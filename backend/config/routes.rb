Rails.application.routes.draw do
  namespace "v1" do 
    resources :user, only: [:index]

  end
end
