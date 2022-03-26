drop database if exists location_care;

create database location_care;

use location_care;

create table stuff_need_to_do(
	id int auto_increment,
    stuff_name varchar(80),
	is_done boolean,
    primary key (id)
);


insert into stuff_need_to_do (stuff_name, is_done) values ("asdasd",true);
insert into stuff_need_to_do (stuff_name, is_done) values ("asdasd2",true);
insert into stuff_need_to_do (stuff_name, is_done) values ("czxczxc",true);