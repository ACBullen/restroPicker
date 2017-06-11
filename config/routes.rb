Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resources :groups, only: [:create, :update, :show]
    resources :restaurants, only: [:create, :index]
    resources :rankings, only: [:create]
    resources :results, only: [:show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
