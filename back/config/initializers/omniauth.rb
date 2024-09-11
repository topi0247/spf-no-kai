# config/initializers/omniauth.rb
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_CLIENT_ID'], ENV['GITHUB_CLIENT_SECRET'], {
    provider_ignores_state: Rails.env.development?,
  }
end
OmniAuth.config.allowed_request_methods = %i[post get]
