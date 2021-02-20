const connection = require('./connection.js');

const orm = {
    selectAll: function(callback) {
        const query = "SELECT * FROM burgers";

        connection.query(query, function(err, res) {
            if (err) throw err;

            console.log(res)
            callback(res);
        })
    },

    insertOne: function(burger_name, callback) {
        const query = "INSERT INTO burgers SET ?";

        connection.query(query, {
            burger_name: burger_name,
            devoured: false
        }, function(err, res) {
            if (err) throw err;

            console.log(res)
            callback(res);
        });
    },

    updateOne: function(burgerID, callback) {
        const query = "UPDATE burgers SET devoured = 1 WHERE id = burgerID";

        connection.query(query, function(err, res) {
            if (err) throw err;

            console.log(res)
            callback(res);
        });
    }
};

module.exports = orm;