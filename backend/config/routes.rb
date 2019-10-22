Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :loops
      resources :notes
    end
  end
end

noteArray.forEach(note => {
  notes[note.beatIndex] = note
})