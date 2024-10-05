const { Router } = require("express");
const dbCon = require("./Database/connection");
// get the query
 const getAdmin = require("./Query/getAdmin");

const router = Router();

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

// routes name http://localhost:5000/api/get-admin
router.get("/get-admin", async (req, res) => {
    try {
        const resultAdmin = await getAdmin();
        res.status(200).json(resultAdmin);
    } catch (error) {
      res.status(500).json(
        { message: error.message });
    }
});

module.exports = router;
