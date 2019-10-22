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
          bars: params["bars"], 
          BPM: params["BPM"]
        })
        if loopInstance.save
          render json: loopInstance
        else
          render json: errors
        end
      end

      def update
        if loopInstance = Loop.update(name: name, beats_per_bar: beatsPerBar, bars: bars, BPM: BPM)
          render json: loopInstance
        else
          render json: errors
        end
      end

      def destroy
        Loop.destroy(params[:id])
      end
    end
  end
end
