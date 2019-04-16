# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV['giver']||="localhost"
Vagrant.configure("2") do |config|
  # https://docs.vagrantup.com.

  # Find boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "bento/ubuntu-16.04"
  config.vm.box_version = "2.3.5"

  # Forwarding ports
  config.vm.network "forwarded_port", guest: 5001, host: 8000
  config.vm.network "forwarded_port", guest: 3306, host: 9036
  config.vm.network "forwarded_port", guest: 3007, host: 8088
  config.vm.network "forwarded_port", id: "ssh", guest: 22, host: 9022

  config.vm.synced_folder ".", "/home/vagrant/BEAR-Necessities-Market/"

  config.vm.provision "shell", inline: <<-SHELL
    #!/usr/bin/env bash

    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-cache policy docker-ce
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y --allow-unauthenticated nano unzip ufw docker-ce htop nodejs

    sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    cd /home/vagrant/BEAR-Necessities-Market/ && npm install --no-bin-links
    cd /home/vagrant/BEAR-Necessities-Market/ && export REACT_APP_USERS_SERVICE_URL=http://localhost
  SHELL

  config.vm.provision "shell", inline: "cd /home/vagrant/BEAR-Necessities-Market/ && sudo docker-compose up --build -d", run: "always"
  config.vm.provision "shell", inline: "cd /home/vagrant/BEAR-Necessities-Market/ && sudo docker-compose ps", run: "always"

  #config.vm.network "private_network", type: "dhcp"
  #  type: "nfs",
  #  nfs_version: 4,
  #  nfs_udp: false

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
     # Display the VirtualBox GUI when booting the machine
     vb.gui = false

     # Customize the amount of memory on the VM:
     vb.customize ["modifyvm", :id, "--cpuexecutioncap", "60"]
     vb.memory = "4096"
     vb.cpus = "2"
  end
end
