source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

gem 'active_model_serializers' # Serialize AR objs -> JSON

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'devise', '3.5.1' # Authentication
gem 'cancan' # Authorization

gem 'bootstrap-sass', '~> 3.3.5' # SCSS framework

gem 'ranked-model' # Row sorting

gem 'angularjs-rails' # Front-end MVW JS framework
gem 'angular-rails-templates', '~> 0.2.0' # Template cache
gem 'angularjs-rails-resource', '~> 2.0.0' # Rails-specific resources

# TODO: Move angular-ui-router into Bower
gem 'angular-ui-router-rails', git: "git@github.com:iven/angular-ui-router-rails"

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'spring-commands-rspec'
  gem 'rspec-rails', '~> 3.0'
  gem 'guard-rspec'
  gem 'rb-fsevent' if `uname` =~ /Darwin/

  gem 'shoulda' # Model spec helpers
  gem 'capybara', '2.4.4' # Feature specs

	gem 'factory_girl_rails' # Testing fixtures
	gem 'faker' # Fake testing data

  # Call 'debugger' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end
