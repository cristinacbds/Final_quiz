Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:create] do
        collection do
          get :current
        end
      end
      resource :sessions, only: [:create, :destroy]
      resources :auctions do
        resources :bids
      end
    end
  end
end
