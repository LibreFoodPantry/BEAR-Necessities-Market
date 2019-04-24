# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV['giver']||="localhost"
Vagrant.configure("2") do |config|
  # https://docs.vagrantup.com.

  # Find boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "bento/ubuntu-16.04"
  config.vm.box_version = "2.3.5"

  # Forwarding ports
  config.vm.network "forwarded_port", guest: 5000, host: 8000
  config.vm.network "forwarded_port", guest: 3000, host: 8088
  config.vm.network "forwarded_port", id: "ssh", guest: 22, host: 9022

  config.vm.synced_folder ".", "/home/vagrant/BEAR-Necessities-Market/"

  config.vm.provision "shell", inline: <<-SHELL
    #!/usr/bin/env bash

    echo "============= Downloading and installing developer packages ============= "
    sudo apt-get update
    # Node
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    # Other developer packages    
    sudo apt-get install -y --allow-unauthenticated nano unzip ufw htop nodejs python3-dev python3-setuptools
    sudo easy_install3 pip
    # Yarn
    sudo npm install -g yarn

    echo "============= Installing project's dependencies ========================="
    cd /home/vagrant/BEAR-Necessities-Market 
    sudo npm install --no-bin-links
    sudo pip install -r requirements.txt
    cd /home/vagrant/BEAR-Necessities-Market/frontend
    sudo npm install react-scripts@2.1.2 -g --silent
  SHELL

  SHELL

  # Config specific to VirtualBox:
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