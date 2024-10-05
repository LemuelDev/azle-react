const { Router } = require("express");
const dbCon = require("./Database/connection");
// get the query
const getAdmin = require("./Query/getAdmin");
const getEvents = require("./Query/getEvents");
const getVolunteers = require("./Query/getVolunteers");
const getEventReports = require("./Query/getEventReports");
// routers
const router = Router();

// test the api http://localhost:3000/api/test
router.get("/test", (req, res) => {
  res.send("Hello World!");
});

// routes name http://localhost:3000/api/get-admin
router.get("/get-admin", async (req, res) => {
  try {
    const resultAdmin = await getAdmin();
    res.status(200).json(resultAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// routes name http://localhost:3000/api/get-events
router.get("/get-events", async (req, res) => {
  try {
    const resultEvent = await getEvents();
    res.status(200).json(resultEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// routes name http://localhost:3000/api/get-volunteers
router.get("/get-volunteers", async (req, res) => {
  try {
    const resultVolunteer = await getVolunteers();
    res.status(200).json(resultVolunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// routes name http://localhost:3000/api/get-event-reports
router.get("/get-event-reports", async (req, res) => {
  try {
    const resultEventReport = await getEventReports();
    res.status(200).json(resultEventReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
