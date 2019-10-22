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
        note = Note.create({
          cID: params["cID"]
          loop_id: params["loopId"]
          note_key: params["noteKey"]
          beat_index: params["beatIndex"]
          velocity: params["velocity"]
          volume: params["volume"]
        })
        render json: note
      end

      def destroy
        Note.destroy(params[:id])
      end
    end
  end
end
