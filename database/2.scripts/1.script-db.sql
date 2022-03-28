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
insert into `stuffNeedToDo` (stuffName, isDone) values ("Complete Stuff Need To Do Figma Plugin",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("CORS Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("CSRF Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Origins Problem",false);


-- --------------------------------
-- Table For `origins`
-- --------------------------------

create table `origins`(
	id int auto_increment,
    origin varchar(200),
    primary key (id)
);

insert into `origins` (origin) values ("http://example1.com");
insert into `origins` (origin) values ("http://example2.com");



















