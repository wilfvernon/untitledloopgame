module Api
  module V1
    class NotesController < ApplicationController
      def index
        notes = Note.all
        render json: notes
      end

      def show
        note = Note.find(params[:id])
        render json: note
      end

      def create
        note = Note.new({
          loop_id: params["loopId"]
          note_key: params["noteKey"]
          velocity: params["velocity"]
          volume: params["volume"]
          beat_index: params["beatIndex"]
        })

      def destroy
        Note.destroy(params[:id])
      end
    end
  end
end
