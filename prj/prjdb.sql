USE isp;

DROP TABLE IF EXISTS data;

CREATE TABLE data (
	column_1 INT(9) NOT NULL AUTO_INCREMENT,
	column_2 INT(9),
	column_3 INT(9),
    Primary KEY (column_1)
);

insert into data VALUES
(1, 1, 1);