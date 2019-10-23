class RecordingsController < ApplicationController
    def index
        recordings = Recording.all
        render json: recordings
    end

    def destroy
        Recording.destroy(params[:id])
    end
end
