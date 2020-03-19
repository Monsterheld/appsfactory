# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "generic/alpine38"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/home/vagrant/app"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  config.vm.provider "virtualbox" do |vb|
    # Disable log file generation
    vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]

    # Customize the amount of memory on the VM:
    vb.memory = "4096"

    # Customize the amount of CPUs on the VM:
    vb.cpus = 2
  end

  # Configure shell provisioning
  config.vm.provision "shell" do |shell|
    shell.path = "vagrant/provision.sh"
  end

end
