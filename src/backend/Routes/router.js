const { Router } = require("express");

const router = Router();

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
