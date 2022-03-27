use location_care;

select * 
from `stuffNeedToDo`;

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







