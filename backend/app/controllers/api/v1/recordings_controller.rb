class RecordingsController < ApplicationController
    def index
        recordings = Recording.all
        render json: recordings
    end

    def destroy
        
    end
end
