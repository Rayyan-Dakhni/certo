const con = require("../config/database");

const router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "./uploads" });

// route to add a new vehicle
router.post("/add", (req, res) => {
  const {
    year,
    make,
    model,
    body,
    color,
    noOfDoors,
    seats,
    fuelType,
    transmission,
    fwdOrAwd,
    pricePerHour,
    pricePerDay,
    pricePerWeek,
  } = req.body;

  con.query(
    `INSERT INTO vehicles(year, make, model, body, color, no_of_doors, seats, fuel_type, transmission, fwd_or_awd, price_per_hour, price_per_day, price_per_week) VALUES(${year}, '${make}', '${model}', '${body}', '${color}', ${noOfDoors}, ${seats}, '${fuelType}', '${transmission}', '${fwdOrAwd}', ${pricePerHour}, ${pricePerDay}, ${pricePerWeek})`,
    (err, results, fields) => {
      if (err) throw err;

      res.status(200).json({
        message: "Successfully added new vehicle",
        result: results,
        success: 1,
      });
    }
  );
});

// route to get all the vehicles from the database

router.get("/", (req, res) => {
  const data = [];

  console.log("yaha aya");

  con.query(
    `SELECT * FROM vehicles INNER JOIN vehicle_images ON vehicles.vehicle_id = vehicle_images.vehicle_id`,
    (err, results, fields) => {
      if (err) throw err;

      results.map((vehicle, index) => {
        const vehicle_id = vehicle.vehicle_id;

        con.query(
          `SELECT ( SELECT SUM(rating) FROM vehicle_ratings WHERE vehicle_id = ${vehicle_id} ) AS rating, ( SELECT COUNT(*) FROM bookings WHERE vehicle_id = ${vehicle_id} ) AS trips`,
          (err, results, fields) => {
            if (err) throw err;

            data.push({
              vehicle_id: vehicle_id,
              owner_id: vehicle.owner_id,
              location: vehicle.location,
              year: vehicle.year,
              make: vehicle.make,
              model: vehicle.model,
              body: vehicle.body,
              color: vehicle.color,
              no_of_doors: vehicle.no_of_doors,
              seats: vehicle.seats,
              fuel_type: vehicle.fuel_type,
              transmission: vehicle.transmission,
              fwd_or_awd: vehicle.fwd_or_awd,
              price_per_hour: vehicle.price_per_hour,
              price_per_day: vehicle.price_per_day,
              price_per_week: vehicle.price_per_week,
              front_image: vehicle.front_image,
              back_image: vehicle.back_image,
              left_image: vehicle.left_image,
              right_image: vehicle.right_image,
              front_seats_image: vehicle.front_seats_image,
              rear_seats_image: vehicle.rear_seats_image,
              dashboard_image: vehicle.dashboard_image,
              console_image: vehicle.console_image,
              rating: results[0].rating,
              trips: results[0].trips,
            });

            if (results.length == index) {
              res.status(200).json(data);
            }
          }
        );
      });
    }
  );
});

// route to add front image of the vehicle
router.post("/images/front", upload.single("frontImage"), (req, res) => {
  const { vehicle_id } = req.body;

  const front_image = req.file.filename;

  var query = "";

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
    (err, results, fields) => {
      if (err) throw err;

      console.log(results);

      if (results.length > 0) {
        query = `UPDATE vehicle_images SET front_image = '${front_image}' WHERE vehicle_id = ${vehicle_id}`;
      } else {
        query = `INSERT INTO vehicle_images(vehicle_id, front_image) VALUES(${vehicle_id}, '${front_image}')`;
      }

      con.query(query, (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
          message: "Vehicle front image added",
          result: results,
        });
      });
    }
  );
});

// route to add the back image of the vehicle
router.post("/images/back", upload.single("backImage"), (req, res) => {
  const { vehicle_id } = req.body;

  const back_image = req.file.filename;

  var query = "";

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
    (err, results, fields) => {
      if (err) throw err;

      console.log(results);

      if (results.length > 0) {
        query = `UPDATE vehicle_images SET back_image = '${back_image}' WHERE vehicle_id = ${vehicle_id}`;
      } else {
        query = `INSERT INTO vehicle_images(vehicle_id, back_image) VALUES(${vehicle_id}, '${back_image}')`;
      }

      con.query(query, (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
          message: "Vehicle back image added",
          result: results,
        });
      });
    }
  );
});

// route to add the left image of the vehicle
router.post("/images/left", upload.single("leftImage"), (req, res) => {
  const { vehicle_id } = req.body;

  const left_image = req.file.filename;

  var query = "";

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
    (err, results, fields) => {
      if (err) throw err;

      console.log(results);

      if (results.length > 0) {
        query = `UPDATE vehicle_images SET left_image = '${left_image}' WHERE vehicle_id = ${vehicle_id}`;
      } else {
        query = `INSERT INTO vehicle_images(vehicle_id, left_image) VALUES(${vehicle_id}, '${left_image}')`;
      }

      con.query(query, (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
          message: "Vehicle left image added",
          result: results,
        });
      });
    }
  );
});

// route to add the right image of the vehicle
router.post("/images/right", upload.single("rightImage"), (req, res) => {
  const { vehicle_id } = req.body;

  const right_image = req.file.filename;

  var query = "";

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
    (err, results, fields) => {
      if (err) throw err;

      console.log(results);

      if (results.length > 0) {
        query = `UPDATE vehicle_images SET right_image = '${right_image}' WHERE vehicle_id = ${vehicle_id}`;
      } else {
        query = `INSERT INTO vehicle_images(vehicle_id, right_image) VALUES(${vehicle_id}, '${right_image}')`;
      }

      con.query(query, (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
          message: "Vehicle right image added",
          result: results,
        });
      });
    }
  );
});

// route to add the front seats image of the vehicle
router.post(
  "/images/seats/front",
  upload.single("frontSeatsImage"),
  (req, res) => {
    const { vehicle_id } = req.body;

    const front_seats_image = req.file.filename;

    var query = "";

    con.query(
      `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
      (err, results, fields) => {
        if (err) throw err;

        console.log(results);

        if (results.length > 0) {
          query = `UPDATE vehicle_images SET front_seats_image = '${front_seats_image}' WHERE vehicle_id = ${vehicle_id}`;
        } else {
          query = `INSERT INTO vehicle_images(vehicle_id, front_seats_image) VALUES(${vehicle_id}, '${front_seats_image}')`;
        }

        con.query(query, (err, results, fields) => {
          if (err) throw err;

          res.status(200).json({
            message: "Vehicle front seats image added",
            result: results,
          });
        });
      }
    );
  }
);

// route to add the rear seats image of the vehicle
router.post(
  "/images/seats/rear",
  upload.single("rearSeatsImage"),
  (req, res) => {
    const { vehicle_id } = req.body;

    const rear_seats_image = req.file.filename;

    var query = "";

    con.query(
      `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
      (err, results, fields) => {
        if (err) throw err;

        console.log(results);

        if (results.length > 0) {
          query = `UPDATE vehicle_images SET rear_seats_image = '${rear_seats_image}' WHERE vehicle_id = ${vehicle_id}`;
        } else {
          query = `INSERT INTO vehicle_images(vehicle_id, rear_seats_image) VALUES(${vehicle_id}, '${rear_seats_image}')`;
        }

        con.query(query, (err, results, fields) => {
          if (err) throw err;

          res.status(200).json({
            message: "Vehicle rear seats image added",
            result: results,
          });
        });
      }
    );
  }
);

// route to add the dashboard image of the vehicle
router.post(
  "/images/dashboard",
  upload.single("dashboardImage"),
  (req, res) => {
    const { vehicle_id } = req.body;

    const dashboard_image = req.file.filename;

    var query = "";

    con.query(
      `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
      (err, results, fields) => {
        if (err) throw err;

        console.log(results);

        if (results.length > 0) {
          query = `UPDATE vehicle_images SET dashboard_image = '${dashboard_image}' WHERE vehicle_id = ${vehicle_id}`;
        } else {
          query = `INSERT INTO vehicle_images(vehicle_id, dashboard_image) VALUES(${vehicle_id}, '${dashboard_image}')`;
        }

        con.query(query, (err, results, fields) => {
          if (err) throw err;

          res.status(200).json({
            message: "Vehicle dashboard image added",
            result: results,
          });
        });
      }
    );
  }
);

// route to add the console image of the vehicle
router.post("/images/console", upload.single("consoleImage"), (req, res) => {
  const { vehicle_id } = req.body;

  const console_image = req.file.filename;

  var query = "";

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${vehicle_id}`,
    (err, results, fields) => {
      if (err) throw err;

      console.log(results);

      if (results.length > 0) {
        query = `UPDATE vehicle_images SET console_image = '${console_image}' WHERE vehicle_id = ${vehicle_id}`;
      } else {
        query = `INSERT INTO vehicle_images(vehicle_id, console_image) VALUES(${vehicle_id}, '${console_image}')`;
      }

      con.query(query, (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
          message: "Vehicle console image added. Redirecting...",
          result: results,
        });
      });
    }
  );
});

// route to get all images for the vehicle
router.get("/images", (req, res) => {
  const { id } = req.query;

  con.query(
    `SELECT * FROM vehicle_images WHERE vehicle_id = ${id}`,
    (err, results, fields) => {
      if (err) throw err;

      res.status(200).json(results);
    }
  );
});

module.exports = router;
