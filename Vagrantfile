# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define "node01" do |node|
    node.vm.box = "generic/ubuntu2004"
    node.vm.hostname = "node01"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "./playbooks/provision_node.yaml"
    end
  end

  config.vm.define "node02" do |node|
    node.vm.box = "generic/ubuntu2004"
    node.vm.hostname = "node02"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "./playbooks/provision_node.yaml"
    end
  end

  config.vm.define "node03" do |node|
    node.vm.box = "generic/ubuntu2004"
    node.vm.hostname = "node03"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "./playbooks/provision_node.yaml"
    end
  end
end
