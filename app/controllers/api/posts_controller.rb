class Api::PostsController < ApplicationController
    before_action :def_post, only: [:show, :update, :destroy]


    def index
        @posts = City.find(params[:city_id]).posts.order(id: :desc)
        render json: @posts
        
    end

    def show
        # @city_posts = City.find(params[:city_id]).posts
        # @post = @city_posts.find(params[:id])
        @city_name = City.find(params[:city_id]).name
        render json: {
            post: @post,
            city_name: @city_name
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
       
       @post.update!(post_params)
        render json: {
            post: @post
        }
    end

    def destroy
       @post.destroy  
    end  
    
    private

  def def_post
        @post = Post.find(params[:id])
  end


  def post_params
    params.require(:post).permit(:title, :img, :content, :city_id)
  end

end


