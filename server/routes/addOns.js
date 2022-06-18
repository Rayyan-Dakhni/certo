const router = require("express").Router();
const con = require("../config/database");

router.get("/", (req, res) => {
  con.query(`SELECT * FROM add_ons`, (err, results, fields) => {
    if (err) throw err;

    res.status(200).json(results);
  });
});

module.exports = router;
