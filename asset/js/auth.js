var $ = require('jQuery');
$('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
});
require('./renderer.js');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "app"
});
$("#loginAnchor").click(function() {
    var username = $("#user_name").val()
    var password = $("#password").val()

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        //Make SQL statement:
        var sql = "SELECT password FROM add_user WHERE name = '" + username + "' ORDER BY id LIMIT 1";
        //Make an array of values:

        //Execute the SQL statement, with the value array:
        con.query(sql, function(err, data, fields) {
            if (err) throw err;
            console.log(data[0].password);
            if (data[0].password == password) {
                console.log("same");
                window.location.href = './layout/stock.html'
            }
        });
    });
});