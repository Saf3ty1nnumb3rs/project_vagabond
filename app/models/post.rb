class Post < ApplicationRecord
  belongs_to :city
  validates :title, presence: true, length: { maximum: 200}
  validates :content, presence: true, length: { in: 2..200 , message: "Post must be between 2 and 200 characters"}
end
