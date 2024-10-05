const dbCon = require("../Database/connection");

module.exports = async () => {
  try {
    const queryEventReports = new Promise((resolve, reject) => {
      dbCon.query("SELECT * FROM events_reports", (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    return await queryEventReports;
  } catch (error) {
    throw error;
  }
};
