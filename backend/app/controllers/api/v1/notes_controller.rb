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
          loop_id: params["loopId"],
          cID: params["note"]["cID"],
          note_key: params["note"]["note_key"],
          beat_index: params["beatIndex"],
          velocity: params["note"]["velocity"],
          volume: params["note"]["volume"],
        })
        render json: note
      end

      def destroy
        Note.destroy(params[:id])
      end
    end
  end
end
