const orm = require("../config/orm.js");

const burgers = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burgerID, callback) {
        orm.updateOne(burgerID, function(res) {
            callback(res);
        });
    }
};

module.exports = burgers;