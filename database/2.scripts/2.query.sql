use location_care;

select * 
from `stuffNeedToDo`;

-- ----------------------------
-- Client Authenticate error
-- ----------------------------
alter user 'root'@'localhost' identified with mysql_native_password by "1";
flush privileges;




