module Api
  module V1
    class LoopsController < ApplicationController
      def index
        loops = Loop.all
        render json: loops
      end

      def show
        loopInstance = Loop(params[:id])
        render json: loopInstance
      end

      def create
        loopInstance = Loop.new({
          name: params["name"],
        })
        if loopInstance.save
          render json: loopInstance
        else
          render json: errors
        end
      end

      def update
        loopInstance = Loop.all.find_by_id(params[:id])
        loopInstance.update({ name: params["name"],
                             bars: params["bars"],
                             BPM: params["BPM"] })
        render json: loopInstance
      end

      def destroy
        Loop.destroy(params[:id])
      end
    end
  end
end
