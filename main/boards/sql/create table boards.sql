CREATE DATABASE boards;

USE boards;

CREATE TABLE boards (
b_no INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT
,b_subject VARCHAR(100) NOT NULL 
,b_content TEXT NOT NULL
,b_date DATETIME NOT NULL
,b_hit INT UNSIGNED NOT NULL DEFAULT 0
,b_id VARCHAR(20) NOT NULL
,b_pw VARCHAR(50) NOT NULL
);
