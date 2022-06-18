const router = require("express").Router();

const con = require("../../config/database");
require("dotenv").config();

const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(406).json({
      error: "All input fields are required",
    });
  } else {
    const query = `SELECT * FROM owners WHERE email = '${email}'`;

    con.query(query, (err, result, fields) => {
      if (result) {
        if (result.length > 0) {
          const hashPassword = result[0].password;

          const ownerId = result[0].owner_id;

          if (result[0].account_status == "approved") {
            if (hashPassword == password) {
              const token = jwt.sign(
                {
                  owner_id: ownerId,
                  email,
                },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "12h",
                }
              );

              res.status(200).send({
                message: "Login Successfull",
                token: token,
              });
            } else {
              res.status(401).send({
                message: "Owner could not be authorised",
              });
            }
          } else {
            res.status(401).send({
              message: "Owner account not yet approved",
            });
          }
        } else {
          con.query(`SELECT * FROM users WHERE email = '${email}'`, () => {});
          res.status(200).send({
            message: "No account associated with this email address found",
          });
        }
      }
    });
  }
});

router.post("/owners/login", (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(406).json({
      message: "All fields required",
    });
  } else {
    const query = `SELECT * FROM owners WHERE email = '${email}'`;

    con.query(query, (err, results, fields) => {
      if (err) {
        res.status(500).json(err);
      } else {
        if (results.length > 0) {
          if (results[0].password === password) {
            const token = jwt.sign(
              {
                owner_id: results[0].owner_id,
                email,
              },
              process.env.TOKEN_KEY,
              {
                expiresIn: "12h",
              }
            );

            res.status(200).json({
              message: "Owner Authorised Successfully",
              token: token,
              found: 1,
              ownerId: results[0].owner_id,
            });
          } else {
            res.status(200).json({
              message: "Owner Not Authorised",
              found: 1,
            });
          }
        } else {
          res.status(200).json({
            message: "Owner not found",
            found: 0,
          });
        }
      }
    });
  }
});

router.post("/users/login", (req, res) => {
  const { email, password } = req.body;

  console.log(email);

  if (!email && !password) {
    res.status(406).json({
      message: "All fields required",
    });
  } else {
    const query = `SELECT * FROM users WHERE email = '${email}'`;

    con.query(query, (err, results, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (results.length > 0) {
          if (results[0].password === password) {
            res.status(200).json({
              message: "User Authorised Successfully",
              found: 1,
            });
          } else {
            res.status(200).json({
              message: "User Not Authorised",
              found: 1,
            });
          }
        } else {
          res.status(200).json({
            message: "No account with this email was found",
            found: 0,
          });
        }
      }
    });
  }
});

module.exports = router;
