# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  # Flask
  config.vm.network "forwarded_port", guest: 5000, host: 5000

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end

  # Provision python development environment
  config.vm.provision "shell", inline: <<-SHELL
    export HOME=/home/vagrant
    sudo apt-get update

    curl -sL https://deb.nodesource.com/setup_0.12 | sh
    apt-get install -y nodejs

    sudo apt-get install -yq \
      ntp \
      git \
      python-dev \
      python-virtualenv \

    su vagrant -c 'cd /vagrant &&
                   virtualenv venv &&
                   echo "cd $(WORKDIR) && source venv/bin/activate" >> ~/.bash_profile &&
                   source venv/bin/activate &&
                   sudo pip install -r requirements.txt
                   export FLASK_APP=manage.py'
  SHELL
end