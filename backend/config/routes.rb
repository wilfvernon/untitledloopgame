Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :loops
      resources :notes
      resources :recordings
    end
  end
end
