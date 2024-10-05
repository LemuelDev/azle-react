const dbCon = require("../Database/connection");

module.exports = async () => {
    try {
        const adminQuery = new Promise((resolve, reject) => {
            dbCon.query("SELECT * FROM adminTable", (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results, {message: "Admin data fetched successfully"});
                }
            });
        })
        return await adminQuery;
    } catch (error) {
        throw error;
    }
}