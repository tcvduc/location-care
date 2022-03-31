use stephen;

select * 
from `stuffNeedToDo`;

select * 
from `shadowStuffNeedToDo`;

-- ----------------------------
-- 1. Client Authenticate error
-- ----------------------------
alter user 'root'@'localhost' identified with mysql_native_password by "1";
flush privileges;


-- ----------------------------
-- 2. Get all `stuffNeedToDo`
-- ----------------------------
select * from stuffNeedToDo;


-- --------------------------------------------
-- 3. Edit isDone of stuffNeedToDo
-- --------------------------------------------
update `stuffNeedToDo` 
set isDone = true 
where id = '1';


-- --------------------------------------------
-- 4. Load origins
-- --------------------------------------------
select *
from `origins`;



-- --------------------------------------------
-- 5. Add new stuff need to do
-- --------------------------------------------
insert into `stuffNeedToDo` (stuffName,isDone) values ("dasd",false);


-- --------------------------------------------
-- 7. Remove unuse stuff need to do
-- --------------------------------------------
delete from `stuffNeedToDo`
where id  >= 5;


-- --------------------------------------------
-- 8. Get Last stuff need to do records
-- --------------------------------------------
select * 
from `stuffNeedToDo`
order by id desc 
limit 1;

-- ----------------------------------------------------------------------------------
-- 9. Get current user is logged in database server and querying
-- ----------------------------------------------------------------------------------
select 
current_user() as user;

-- --------------------------------------------
-- 10. Get All User In MySQL 
-- --------------------------------------------
select * 
from information_schema.processlist;

-- --------------------------------------------
-- 11. Get mysql Variable_name and Value
-- --------------------------------------------
show status 
where variable_name = 'threads_connected';

-- --------------------------------------------
-- 12. Get threads_connected Value
-- --------------------------------------------
show status 
where variable_name = 'threads_connected';

-- --------------------------------------------
-- 13. Delete stuff by id
-- --------------------------------------------
delete from stuffNeedToDo as s
where s.id = 1;  

-- --------------------------------------------
-- 14. get all cdn uri 
-- --------------------------------------------
select *
from `cdnServer`;

-- --------------------------------------------
-- 15. add new cdn uri 
-- --------------------------------------------
insert into `cdnServer` (uri) values ('');

-- --------------------------------------------
-- 16. update cdn uri 
-- --------------------------------------------
update cdnServer
set uri = 'asdasd'
where id = 1;

-- --------------------------------------------
-- 17. get current activate cdn uri 
-- --------------------------------------------
select uri 
from cdnServer 
order by id asc 
limit 1;

-- --------------------------------------------
-- 18. get all shadow stuff need to do
-- --------------------------------------------
select * 
from `shadowStuffNeedToDo`;

-- --------------------------------------------------------------------------
-- 19. get recent stuff need to do which was deleted - undo feature
-- --------------------------------------------------------------------------
select * 
from `shadowStuffNeedToDo` 
order by id desc 
limit 1;





