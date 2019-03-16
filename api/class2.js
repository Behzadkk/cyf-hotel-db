const express = require("express");
const router = express.Router();

const filename = "database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(filename);
// db.run("PRAGMA foreign_keys = ON");

router.get("/customers", function(req, res) {
  var sql = "select * from customers";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      customers: rows
    });
  });
});

router.get("/customers/:id", function(req, res) {
  const id = req.params.id;
  const idIsNumber = Number(id) == id;
  if (idIsNumber) {
    const sql = `SELECT * FROM customers WHERE id = ${id}`;
    console.log(sql);
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log("ERROR fetching from the database:", err);
        return;
      }
      console.log("Request succeeded, new data fetched", rows);
      res.status(200).json({
        customers: rows
      });
    });
  } else {
    res.redirect("surname/" + id);
  }
});
router.get("/customers/surname/:surname", function(req, res) {
  const surname = req.params.surname;

  const sql = `SELECT * FROM customers WHERE surname like '%${surname}%'`;
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      customers: rows
    });
  });
});

router.post("/customers/", function(req, res) {
  const newCustomer = req.body;
  const insert = `INSERT INTO customers (title, firstname, surname, email) VALUES ("${
    newCustomer.title
  }", "${newCustomer.firstname}" , "${newCustomer.surname}" , "${
    newCustomer.email
  }") `;
  db.all(insert, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

router.post("/reservations/", function(req, res) {
  const newReservation = req.body;
  const insert = `INSERT INTO reservations (customer_id, room_id, check_in_date, check_out_date, room_price) VALUES (${
    newReservation.customerID
  }, ${newReservation.roomID} , "${newReservation.checkInDate}" , "${
    newReservation.CheckOutDate
  }" , ${newReservation.roomPrice}) `;
  db.all(insert, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

router.put("/customers/:id", function(req, res) {
  const id = req.params.id;
  const editedCustomer = req.body;
  let updatedDetails = "UPDATE customers SET ";
  if (editedCustomer.title) {
    updatedDetails += ` title = "${editedCustomer.title}",`;
  }
  if (editedCustomer.firstname) {
    updatedDetails += ` firstname = "${editedCustomer.firstname}",`;
  }
  if (editedCustomer.surname) {
    updatedDetails += ` surname = "${editedCustomer.surname}",`;
  }
  if (editedCustomer.email) {
    updatedDetails += ` email = "${editedCustomer.email}"`;
  }
  updatedDetails += " WHERE id = ?";
  console.log(updatedDetails);
  db.get(updatedDetails, [id], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

router.get("/customers/firstname/firstname", function(req, res) {
  const sql = `SELECT * FROM customers WHERE firstname in ("John", "Uriel")`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      customers: rows
    });
  });
});

router.get("/reservations", function(req, res) {
  var sql = "select * from reservations";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get("/invoices", function(req, res) {
  var sql = "select * from invoices";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      invoices: rows
    });
  });
});

router.delete("/reservation/:id", function(req, res) {
  const id = req.params.id;
  const sql = `DELETE FROM reservations WHERE id = ${id}`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.sendStatus(200);
  });
});

// get '/reservations'
// TODO: add code here

// get '/reservations/:id'
// TODO: add code here

// delete '/reservations/:id'
// TODO: add code here

// get '/reservations/starting-on/:startDate'
// TODO: add code here

// get '/reservations/active-on/:date'
// TODO: add code here

// post '/reservations'
// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }
// TODO: add code here

// get `/detailed-invoices'
// TODO: add code here

// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here
router.get("/reservations/details-between/:from_day/:to_day", function(
  req,
  res
) {
  const fromDay = req.params.from_day;
  const toDay = req.params.to_day;

  var sql = `SELECT * FROM reservations WHERE check_in_date IN ("2019-01-06", "2019-02-06") AND check_out_date IN ("2018-03-08", "2018-04-08") `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

module.exports = router;
