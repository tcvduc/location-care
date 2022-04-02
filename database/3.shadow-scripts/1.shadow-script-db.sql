drop database if exists stephen;

create database stephen;

use stephen;

-- --------------------------------
-- Table For `stuff_need_to_do`
-- --------------------------------

create table `stuffNeedToDo`(
	id int auto_increment,
    stuffName varchar(200),
	isDone boolean,
    primary key (id)
);

-- --------------------------------
-- Records For `stuff_need_to_do`
-- --------------------------------
insert into `stuffNeedToDo` (stuffName, isDone) values ("Auto update ngrok uri new session",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Auto start ngrok when it expires",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Onboard ngrok/web-expose",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("ENV for figma plugin HTML Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("CDN Script Files Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Revise MMT knowledge",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Acknowledge the truth when the application was deploy to CH Play",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Learn To Work With MySQL Shell",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Index For Database",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Compare MySQL Query And Backend Code Efficiency - Loop Array Versus Select Last Record",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Complete Stuff Need To Do Figma Plugin",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("CORS Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("CSRF Problem",false);
insert into `stuffNeedToDo` (stuffName, isDone) values ("Origins Problem",false);

-- --------------------------------
-- Table For `stuffNeedToDo`
-- --------------------------------

create table `shadowStuffNeedToDo`(
	id int auto_increment,
    stuffName varchar(200),
	isDone boolean,
    primary key (id)
);


-- --------------------------------
-- Records For `shadowStuffNeedToDo`
-- --------------------------------
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Onboard send multiple files nodejs one api",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Revise MMT knowledge",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Acknowledge the truth when the application was deploy to CH Play",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Learn To Work With MySQL Shell",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Index For Database",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Compare MySQL Query And Backend Code Efficiency - Loop Array Versus Select Last Record",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Complete Stuff Need To Do Figma Plugin",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("CORS Problem",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("CSRF Problem",false);
insert into `shadowStuffNeedToDo` (stuffName, isDone) values ("Origins Problem",false);


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



-- --------------------------------
-- Table For `cdnServer`
-- --------------------------------

create table `cdnServer`(
	id int auto_increment,
    uri varchar(200),
    primary key (id)
);

-- --------------------------------
-- Record For `cdnServer`
-- --------------------------------
insert into `cdnServer` (uri) values ("http://cdn-server.com");


















