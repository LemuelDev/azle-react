const dbCon = require("../Database/connection");

module.exports = async () => {
  try {
    const queryEvents = new Promise((resolve, reject) => {
      dbCon.query("SELECT * FROM events", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return await queryEvents;
  } catch (error) {
    throw error;
  }
};
