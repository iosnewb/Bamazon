#Bamazon
The app will take in orders from customers and deplete stock from the store's inventory. 

#code below is for creating the product table in mysql
use Bamazon;
CREATE TABLE products (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Hennessey VSOP", "Alcohol", 50.99, 25),
("Hennessey XO", "Alcohol", 150.00, 50),
("Martell Cordon Bleu", "Alcohol", 160.00, 20),
("Adidas NMD", "Shoes", 180.00, 10),
("Adidas Ultraboost", "Shoes", 200.00, 15),
("Nike Roshe", "Shoes", 99.99, 5),
("Vietnamese coffee beans", "Coffee", 11.50, 100),
("Hawaiian coffee beans", "Coffee", 8.99, 150),
("Seattle coffee beans", "Coffee", 12.50, 80),
("Rolex", "Watches", 10000.00, 5),
("Breitling", "Watches", 5000.00, 3)

UPDATE product 
SET 
	product = "<item>", 
    department_name = "<name>", 
    price = ,
    stock_quantity =  
WHERE <"column_name_here"> = "<name>";
