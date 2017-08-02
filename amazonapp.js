var mysql = require ("mysql");

var inquirer = require ("inquirer");

//create a connection with the database
var connection = mysql.createConnection({
  host:"localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "amazondb"
});

connection.connect(function (err){
  if (err) throw err;
  //console.log("connected as id" + connection.threadID);


  connection.query(
    "SELECT * FROM products",
    function (err,res){
      if (err) throw err;

      //for all the items in the list
      for (var i = 0; i < res.length; i++){
        console.log("Id: " + i + " Product: " + res[i].product_name + " Price: $" + res[i].price);
      }

      //ask bidder
      askBuyer();
    }
  );
});

//function to ask bidder waht they want, and how much they want to buy
var askBuyer = function() {
  inquirer.prompt([
  {
    type: "input",
    message: "What is the id of the product you want to buy?",
    name: "productID"
  },
  {
    type:"input",
    message: "How many would you like to purchase?",
    name: "quantity"
  }
]).then(function(inqResponse){


  //check to see if there's enough to purchase
  connection.query("SELECT * FROM products WHERE item_id=?" , [inqResponse.productID], function(err,res){

      //if the quantity is more than in stock, then inform
      if (inqResponse.quantity > res[0].stock_quantity){
        console.log("Insufficient quantity. Sorry for the inconvenience.");
      }

      //if enough, then fufill the order
      else{
        var stockq = parseInt(res[0].stock_quantity);
        var price = parseInt(res[0].price);
        fufillOrder(inqResponse.productID, parseInt(inqResponse.quantity), stockq, price);
      }
  });
});
};

//function to fufill the order if there is enough quantity
var fufillOrder = function(id, quantityOrdered, stockq, price){

  //update the SQL database with the stock after order
  connection.query("UPDATE products SET? WHERE?",
  [
    {
      stock_quantity: stockq - quantityOrdered
    },
    {
      item_id: id
    }
  ]
);
console.log("Processing order..");

//show the customer the total cost of their purchase
console.log("Your total cost for this item will be: $" + price * quantityOrdered);

};
