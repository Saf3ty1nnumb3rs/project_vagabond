class Api::PostsController < ApplicationController

    def index
        @posts = City.find(params[:city_id]).posts
        render json: {
            posts: @posts
        }
    end

    def show
        @city_posts = City.find(params[:city_id]).posts
        @post = @city_posts.find(params[:id])
        render json: {
            post: @post
        }
    end

    def create
        @city = City.find(params[:city_id])
        @post = @city.posts.create(post_params)
       
        render json: {
            post: @post
        }
    end

    def update
        @city_posts = City.find(params[:city_id]).posts
        @post = @city_posts.find(params[:id])
        @new_post = @post.update!(post_params)
        render json: {
            post: @new_post
        }
    end

    def destroy
        @city_posts = city.find(params[:city_id]).posts
        @city_posts.find(params[:id]).destroy  
    end  
    
    private

  def post_params
    params.require(:post).permit(:title, :img, :content, :city_id)
  end

end


end
