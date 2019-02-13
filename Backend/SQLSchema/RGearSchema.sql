-- Create Database
CREATE DATABASE RGear;
use RGear

SET GLOBAL local_infile = 1;

create table studentId(
  id INTEGER NOT NULL PRIMARY KEY,
  ts timestamp default current_timestamp on update current_timestamp
);

-- Create table
create table student(
  StudentId Integer not null primary key
);

-- Populate Table
LOAD DATA LOCAL INFILE 'allStudents2018.csv' INTO TABLE student 
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  (StudentId);

LOAD DATA LOCAL INFILE 'volunteers.csv' INTO TABLE studentId 
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  (StudentId);
