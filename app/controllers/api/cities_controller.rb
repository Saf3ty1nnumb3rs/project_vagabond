class Api::CitiesController < ApplicationController
    
    def index
        @cities = City.all
        @cityname = City.find(params[:id]),name
        render json: {
            cities: @cities,
            cityname: @cityname
        }
    end
    
    def show
        @city = City.find(params[:id])
        @posts = @city.posts.order(id: :desc)
        render json: {
            city: @city,
            posts: @posts
        }
    end
    
    # CREATE NOT REQUIRED FOR CITY MODEL
    
    # UPDATE NOT REQUIRED FOR CITY MODEL
    
    # DESTROY NOT REQUIRED FOR CITY MODEL






end
