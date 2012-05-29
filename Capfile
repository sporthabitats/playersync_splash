#!/bin/env ruby
require 'rubygems'
require 'railsless-deploy'

set :stages, %w(dev rc staging beta live qa)
set :default_stage, "dev"
set :use_sudo, false
require 'capistrano/ext/multistage'

set :application, "sporthabitats/playersync_splash"
set :scm, :git
set :repository, "git@github.com:sporthabitats/playersync_splash.git"
set :deploy_to, "/var/www/playersync.com"

task :uname do
	run "uname -a"
end

after "deploy:rollback" do
    run "/etc/init.d/apache2 reload"
end

before "deploy:symlink" do
    run "echo 'TODO: insert any cache warmup stuff here'"
end

after "deploy:symlink" do
    run "/etc/init.d/apache2 reload"
end

