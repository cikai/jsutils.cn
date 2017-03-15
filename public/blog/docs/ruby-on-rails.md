### 1.Ruby

#### 1.1 安装RVM

	curl -L https://get.rvm.io | bash

	sudo apt-get install postgresql

安装完成后重新login，使RVM生效。

	/bin/bash -login

测试RVM是否安装成功，查看RVM信息。

	rvm info

#### 1.2 修改RVM下载源为Ruby China的镜像

	echo "ruby_url=https://cache.ruby-china.org/pub/ruby" > ~/.rvm/user/db
	或者
	sed -i 's!ftp.ruby-lang.org/pub/ruby!cache.ruby-china.org/pub/ruby/!' $rvm_path/config/db

#### 1.3 用RVM安装Ruby环境

	rvm requirements
	rvm autolibs disable
	rvm install 2.3.0

安装完成后，Ruby, Ruby Gems 就安装好了。

#### 1.4 设置系统默认的Ruby版本

	rvm use 2.3.0 --default

#### 1.5 修改gem下载源为Ruby China的镜像

	gem sources --remove https://rubygems.org/
	gem sources -a https://gems.ruby-china.org/
	gem sources -l [请确保只有Ruby China的源地址]

#### 1.6 更新gem版本

	gem update --system 

### 2.Rails

	gem install rails -v=5.0.0.rc1

版本号根据自己的需求填写，不写版本会默认更新为当前稳定版。

测试Rails是否安装成功，查看Rails信息。

	rails -v
