# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  ENV['giver']||="localhost"
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "bento/ubuntu-16.04"
  config.vm.box_version = "2.3.5"

  config.vm.provision "shell", inline: <<-SHELL
    export HOME=/home/vagrant
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-cache policy docker-ce

    sudo apt-get install -yq \
      ntp \
      git
    
    # Install node
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs

    sudo apt-get install -y --allow-unauthenticated nano unzip ufw docker-ce htop nodejs

    # Install docker
    sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

  SHELL

  config.vm.provision "shell", inline: "cd /vagrant && sudo docker-compose up -d", run: "always"
  config.vm.provision "shell", inline: "cd /vagrant && sudo docker-compose ps", run: "always"

  # Flask
  config.vm.network "forwarded_port", guest: 80, host: 5000

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = false

    # Customize the amount of memory on the VM:
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "60"]
    vb.memory = "4096"
    vb.cpus = "2"
  end

end