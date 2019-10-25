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
        recording = loopInstance.recordings.last
        Recording.destroy(recording.id)

        updatedLoop = Loop.find(params["id"])
        render json: updatedLoop
      end
    end
  end
end
