-- 1. Create Database

CREATE DATABASE IF NOT EXISTS abacustest;


-- 2. Select the database

use abacustest;

-- 3. Create the table containing the posts

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    body MEDIUMTEXT NOT NULL
);
