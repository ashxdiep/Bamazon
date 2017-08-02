DROP DATABASE IF EXISTS amazondb;

CREATE DATABASE amazondb;

USE ebaydb;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR (70),
  department_name VARCHAR (70),
  price INT (200),
  stock_quantity INT (200)
);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("loft bed", "furniture", 150, 17);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("pocket knife", "outdoors", 15, 30);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("hammock chair", "outdoors", 35, 10);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("gaming keyboard", "electronics", 112, 12);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("couch", "furniture", 300, 5);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("pullover hoodie", "apparel", 30, 50);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("mouse", "electronics", 15, 12);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("keurig", "kitchen", 80, 6);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("knife set ", "kitchen", 95, 2);

INSERT INTO items(product_name, department_name, price, stock_quantity)
VALUES ("crew socks", "apparel", 11, 20);
