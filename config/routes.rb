# Rails.application.routes.draw do

#   require 'sidekiq/web'
#   mount Sidekiq::Web => '/sidekiq'
  
#   root "destinations#index"
#   devise_for :users, path: '', path_names: {
#     sign_in: 'login',
#     sign_out: 'logout',
#     registration: 'signup'
#   }, controllers: {
#     registrations: 'users/registrations',
#     sessions: 'users/sessions',
#     passwords: 'users/passwords'
#   }

#   resources :destinations, only: [:index, :show] do
#     resources :buses, only: [:index]
#   end

#   resources :buses, only: [:index, :show]

#   resources :schedules, only: [:index, :show]

#   resources :bookings, only: [:create, :index, :show, :new] do
#     patch :cancel, on: :member

#     collection do
#       get :upcoming
#       get :cancelled
#     end
#   end

#   namespace :admin do
#     resources :destinations
#     get :users
#   end

#   namespace :guide do
#     resources :buses do
#       resources :bus_stops
#       # resources :schedules
#     end
#     resources :schedules
#   end

#   get '/dashboard', to: 'dashboards#index', as: 'dashboard'
  
#   get '*path', to: 'destinations#index', constraints: ->(req) do
#     !req.xhr? && req.format.html?
#   end

# end

# Rails.application.routes.draw do

#   require 'sidekiq/web'
#   mount Sidekiq::Web => '/sidekiq'

#   root "destinations#index"

#   #  API routes
#   namespace :api do
#     namespace :v1 do
#       devise_for :users
#       resources :destinations, only: [:index, :show]
#     end
#   end

#   # devise_for :users, path: ''

#   # Existing web routes (optional if still used)
#   resources :destinations, only: [:index, :show]

#   # React catch-all (must be last)
#   get '*path', to: 'destinations#index', constraints: ->(req) do
#     !req.xhr? && req.format.html?
#   end

# end

Rails.application.routes.draw do

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  
  # root "destinations#index"
  root "home#index"
  #API routes for backend
  namespace :api do
    namespace :v1 do
      scope :users do
        devise_for :users, path: '', path_names: {
          sign_in: 'login',
          sign_out: 'logout',
          registration: 'signup'
        }, controllers: {
          registrations: 'users/registrations',
          sessions: 'users/sessions',
          passwords: 'users/passwords'
        }
      end

      resources :destinations, only: [:index, :show], controller: '/destinations' do
        resources :buses, only: [:index]
      end

      resources :buses, only: [:index, :show], controller: '/buses'

      resources :schedules, only: [:index, :show]

      resources :bookings, only: [:create, :index, :show, :new] do
        patch :cancel, on: :member

        collection do
          get :upcoming
          get :cancelled
        end
      end

      namespace :admin do
        resources :destinations
        get :users
      end

      namespace :guide do
        resources :buses, controller: '/guide/buses' do
          resources :bus_stops, controller: '/guide/bus_stops'
          # resources :schedules
        end
        resources :schedules, controller: '/guide/schedules'
      end

      get '/dashboard', to: 'dashboards#index', as: 'dashboard'
    end
  end
  
  # Frontend routes for React
  get '*path', to: 'home#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/home', to: 'home#index', as: 'home'
end