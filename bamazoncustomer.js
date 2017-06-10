var mysql = require('mysql');
var inquirer = require('inquirer');
var columnify = require('columnify');


var connection = mysql.createConnection({
    //ip address with port #
    host: "127.0.0.1",
    port: 3306,
    //login information
    user: "root",
    password: "",
    //database name
    database: "Bamazon"

});

var productsArr = [];

//check to see if there is a connection
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Connected as id: " +connection.threadId);
// });

var purchasePrompt = function(query){
        inquirer.prompt([
        {
            type: "input",
            message: "Please enter the product ID: ",
            name: "productID"
        },
        {
            type: "input",
            message: "How many items would you like ?",
            name: "productQuantity"
        }
    ]).then(function(value){
        console.log("you selected id: " +value.productID);
        console.log("you selected amount: " +value.productQuantity);
        for(var i = 0; i < productsArr.length; i++){
            if(value.productID == productsArr[i].id){
                console.log(productsArr[i].product_name);
                var totalquant = productsArr[i].stock_quantity - value.productQuantity;
                connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: totalquant}, {id: value.productID}], 
                function(err) {
                    if(err) throw err;
                });
            }
        }
    });
};


connection.query("Select * from products", function(err, res){
    if(err) throw err;
    
    for(var i = 0; i < res.length; i++){
        productsArr.push(res[i]);
    }
    var column = columnify(productsArr, {
        config:
        {
            id: 
            {
                minWidth: 3
            },
            product_name: 
            {
                minWidth: 22
            },
            department_name: 
            {
                minWidth: 17
            },
            price: 
            {
                minWidth: 5
            },
            stock_quantity: 
            {
                minWidth: 5
            }
        }
    });
    console.log(column);
    purchasePrompt(productsArr);
});


