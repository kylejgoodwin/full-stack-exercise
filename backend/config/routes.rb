Rails.application.routes.draw do
  namespace "v1" do
    resources :users, only: [:index], controller: "users"
    resources :locations, only: [:create]
    resources :pickups, only: [:create]

    resources :organization, only: [] do
      resources :locations, only: [:index]
      resources :pickups, only: [:index]
    end
  end
end
