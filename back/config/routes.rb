Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'api/v1/sessions#create'
  namespace :api do
    namespace :v1 do
      root 'bases#index'
      get 'current_user', to: 'sessions#current_user'
    end
  end
end
