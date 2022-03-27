drop database if exists location_care;

create database location_care;

use location_care;

-- --------------------------------
-- Table For `stuff_need_to_do`
-- --------------------------------

create table `stuffNeedToDo`(
	id int auto_increment,
    stuffName varchar(80),
	isDone boolean,
    primary key (id)
);

-- --------------------------------
-- Records For `stuff_need_to_do`
-- --------------------------------
insert into `stuffNeedToDo` (stuffName, isDone) values ("asdasd",true);
insert into `stuffNeedToDo` (stuffName, isDone) values ("asdasd2",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("czxczxc",true);















