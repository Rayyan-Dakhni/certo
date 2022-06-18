const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const con = require("../config/database");
const transporter = require("../config/mail");

const telnyx = require("telnyx")(process.env.TELNYX_API_KEY);

const passwordGenerator = require("generate-password");

router.post("/signup", (req, res) => {
  const { fullName, email, phoneNo, address } = req.body;

  console.log("request ayi");

  console.log(fullName);

  // validating if data for all fields has been passed on to the api
  if (!fullName || !email || !phoneNo || !address) {
    res.status(406).json({
      error: "All input fields are required",
    });
  } else {
    // checking if an owner with the same email address already exists
    con.query(
      `SELECT * FROM owners WHERE email = '${email}'`,
      (err, result, fields) => {
        if (result) {
          if (result.length > 0) {
            res.status(200).json({
              message:
                "An owner account corresponding to this email address already exists",
              found: 1,
            });
          } else {
            // generating a random password that will be assigned to the owner
            const password = passwordGenerator.generate({
              length: 12,
              numbers: true,
            });

            console.log(password);

            const query = `INSERT INTO owners(full_name, email, phone_number, address, password) VALUES('${fullName}', '${email}', '${phoneNo}', '${address}', '${password}')`;

            con.query(query, (err, result, fields) => {
              if (result) {
                const emailTemplate = `<html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>Document</title>


                                <style>
                                .w-screen {
                                    width: 100vw;
                                }
                                .h-auto {
                                    height: auto;
                                }
                                .bg-white {
                                    background-color: white;
                                }
                                .w-full {
                                    width: 100%;
                                }
                                .p-2 {
                                    padding: 0.5rem;
                                }
                                .bg-black {
                                    background-color: black;
                                }
                                .p-5 {
                                    padding: 1.5rem;
                                }
                                .w-24 {
                                    width: 26rem;
                                }
                                .mx-auto {
                                    margin-left: auto;
                                    margin-right: auto;
                                }
                                .text-center {
                                    text-align: center;
                                }
                                .text-3xl {
                                    font-size: 1.875rem;
                                    line-height: 2.25rem;
                                }
                                .font-semibold {
                                    font-weight: 600;
                                }
                                .font-sans {
                                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                                }
                                .font-light {
                                    font-weight: 300;
                                }
                                .px-7 {
                                    padding-left: 1.875rem;
                                    padding-right: 1.875rem;
                                }
                                .text-white {
                                    color: white;
                                }
                                .rounded-md {
                                    border-radius: 0.375rem;
                                }
                                </style>
                            </head>
                            <body>
                              <div class="w-screen h-auto bg-white">
                                <br />
                                <div class="w-100 p-5">
                                  <img src="cid:welcome" class="w-full h-auto" alt="" />
                                </div>
                                <br />
                                <h2 class="text-center text-3xl font-semibold font-sans">
                                  Welcome to Certo
                                </h2>
                                <p class="p-3 text-center font-light">
                                  Thank you for registering with us. Please confirm your email address and
                                  wait for the approval for you account!!
                                </p>
                                <br />
                                <div class="text-center">
                                  <a class="p-3 px-7 bg-black text-white rounded-md" style="font-size: 0.875rem" href="#">
                                    Confirm Email
                                  </a>
                                </div>
                                <br />
                              </div>
                            </body>
                          </html>`;

                const mailOptions = {
                  from: process.env.MAIL_USER,
                  to: email,
                  subject: "Welcome to CERTO",
                  html: emailTemplate,
                  attachments: [
                    {
                      filename: "transparent.png",
                      path: "/Users/apple/Desktop/Fiver_Certo/certo_backend/images/transparent.png",
                      cid: "logo", //same cid value as in the html img src
                    },
                    {
                      filename: "welcome.svg",
                      path: "/Users/apple/Desktop/Fiver_Certo/certo_backend/images/welcome.svg",
                      cid: "welcome", //same cid value as in the html img src
                    },
                  ],
                };

                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    console.log(error);
                    res.status(500).json({
                      message: "Something went wrong. Please contact support",
                    });
                  } else {
                    console.log("Email sent");
                    console.log(info);

                    // telnyx.messages.create(
                    //     {
                    //         'from': '+18665552368', // Your Telnyx number
                    //         'to': '+18445552367',
                    //         'text': 'Hello, World!'
                    //     },
                    //     function (err, response) {
                    //         // asynchronously called
                    //         console.log(response);
                    //     }
                    // );

                    res.status(201).json({
                      message: "Sign up successfull",
                      success: 1,
                    });
                  }
                });
              } else if (err) {
                res.status(400).json(err);
              }
            });
          }
        } else {
          res.status(400).send(err);
        }
      }
    );
  }
});

router.get("/login", (req, res) => {
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
                ownerId: ownerId,
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
          res.status(200).send({
            message: "No account associated with this email address found",
          });
        }
      }
    });
  }
});

// route to verify email of the owner after signup
router.get("/verify/email", (req, res) => {});

// route to verify phone number using telenyx api
router.get("/verify/phone", (req, res) => {});

// route to change password
router.put("/change/password", (req, res) => {
  const { owner_id, password } = req.body;

  // encrypt password first using bcryptjs

  con.query(
    `UPDATE owners SET password = '${password}' WHERE owner_id = ${owner_id}`,
    (err, results, fields) => {
      if (err) throw err;

      res.status(200).json({
        message: "Password changed",
        result: results,
        success: 1,
      });
    }
  );
});

// route to edit an owner profile
router.put("/edit", (req, res) => {
  const { ownerId, fullName, email, phoneNo, address } = req.body;

  con.query(
    `UPDATE owners SET full_name = '${fullName}', email = '${email}', phone_number = '${phoneNo}', address = '${address}' WHERE owner_id = ${ownerId}`,
    (err, results, fields) => {
      if (err) throw err;

      res.status(200).json({
        success: 1,
        message: "Profile updated",
        result: results,
      });
    }
  );
});

// route to get owner details
router.get("/", (req, res) => {
  const { id } = req.query;

  con.query(
    `SELECT * FROM owners WHERE owner_id = '${id}'`,
    (err, results, fields) => {
      if (err) throw err;

      res.status(200).json(results);
    }
  );
});

module.exports = router;
