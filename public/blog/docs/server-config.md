### 1. PostgreSQL

#### 1.1 安装

	sudo apt-get install postgresql

#### 1.2 启动与停止

	sudo /etc/init.d/postgresql start  # 启动
	sudo /etc/init.d/postgresql stop   # 停止

#### 1.3 设置postgres用户密码

以postgres这个系统用户的身份运行psql命令

	sudo su postgres -c psql template1

设置密码

	ALTER USER postgres WITH PASSWORD 'root'; # 请替换密码root

#### 1.4 配置PostgreSQL远程访问

允许远程访问，需要修改两个配置文件。

	文件位置：
	/etc/postgresql/9.3/main

1）postgresql.conf

找到

	listen_addresses = 'localhost'

修改为

	listen_addresses = '*'

2）pg_hba.conf

在IPv4 local connections位置追加以下配置。

	host all all 0.0.0.0/0 md5

如果不希望允许所有IP访问，可以将0.0.0.0设置为特定的IP地址。

#### 1.5 创建postgres用户，并赋予权限

创建用户dbuser

	CREATE USER dbuser WITH PASSWORD 'password';

赋给dbuser使用shell登录权限

	ALTER ROLE dbuser LOGIN;

赋给dbuser管理数据库权限

	ALTER ROLE dbuser CREATEDB;

#### 1.6 管理工具pgAdmin III

[https://www.pgadmin.org/](https://www.pgadmin.org/)