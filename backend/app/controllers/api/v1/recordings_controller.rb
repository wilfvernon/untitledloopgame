module Api
  module V1
    class RecordingsController < ApplicationController
      def index
        recordings = Recording.all
        render json: recordings
      end

      def create
        recording = Recording.create(id: params["id"])
      end

      def destroy
        loopInstance = Loop.find(params["id"])
        Recording.destroy(loopInstance.recordings[-1].id)
      end
    end
  end
end
