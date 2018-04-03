class Post < ApplicationRecord
  belongs_to :city

  validates :content, presence: true, length: { in: 2..200 }
end
