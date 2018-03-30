# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Post.destroy_all
City.destroy_all




atlanta = City.create!(name: 'Atlanta' , img: 'https://www.atlantaga.gov/Home/ShowImage?id=3728&t=636339564821530000'  )
boston = City.create!(name: 'Boston', img:  'https://assets3.thrillist.com/v1/image/2442752/size/tmg-facebook_social.jpg' )
austin = City.create!(name: 'Austin', img:  'https://austinot.com/wp-content/uploads/2012/06/Downtown-Austin-Texas-1024x543.jpg' )
newyork = City.create!(name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdopbnR0KQN6bTR4TPTwSwmtNVErkbJyVVEvwdGbEcpaBksqdgcA'  )

Post.create!(title: 'Traffic!!!!' , content: 'Lorem ipsum dolor amet single-origin coffee bicycle rights cardigan, williamsburg flannel kinfolk semiotics typewriter next level stumptown poke. Synth chambray shoreditch disrupt squid. Umami hella poke small batch hammock health goth, pour-over stumptown vexillologist vegan venmo microdosing retro. Tumeric occupy austin meditation actually ramps seitan mumblecore.' , img: ''  , city_id:  atlanta.id  )
Post.create!(title: 'Peaches' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://images.unsplash.com/photo-1491933367339-d869a4dcc137?ixlib=rb-0.3.5&s=d092edabf3c012f956323552a3b8833a&auto=format&fit=crop&w=1334&q=80'  , city_id:  atlanta.id  )
Post.create!(title: 'Traplanta' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://media.ticketmaster.co.uk/tm/en-gb/dam/a/765/c518fa1a-78e6-4949-a11e-9c7ba5251765_655221_CUSTOM.jpg'  , city_id:  atlanta.id  )
Post.create!(title: 'Charles River' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://amedia.britannica.com/700x450/92/117492-004-26A403DF.jpg'  , city_id:  boston.id  )
Post.create!(title: 'Pawk thuh Cah in Tha Hawvad Yawd' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://media-cdn.tripadvisor.com/media/photo-f/11/f6/d4/c1/photo7jpg.jpg'  , city_id:  boston.id  )
Post.create!(title: 'SXSW' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://images.unsplash.com/photo-1489364929346-a1d324ff812b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2eef26c094e9a16dca10727c9b139868&auto=format&fit=crop&w=1050&q=80'  , city_id:  austin.id  )
Post.create!(title: 'All my exes...' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRac9rCrEAwhFiWs-qxGzuCXKgGypM4emiWXRDsjXTeg4dLPidQ'  , city_id:  austin.id  )
Post.create!(title: 'Biggest Apple' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://static01.nyt.com/images/2018/03/08/nyregion/08nytoday1/merlin_135149475_0856d1da-19a2-4f70-a0b6-575bc425d122-master768.jpg'  , city_id:  newyork.id  )
Post.create!(title: 'STAY WOKE' , content: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/500px-Statue_of_Liberty_7.jpg'  , city_id:  newyork.id  )
# post_data.each_pair do |city_name, posts|
#   info = city_data[city_name]
#   current_city = City.create!({
#     name:         info[:name],
#     img:    info[:img] 
#   })

#   posts.each do |post|
#     Post.create!({
#       title:        post[:title],
#       content:        post[:content],
#       img:  post[:img],
#       city_id:       current_city.id
#     })
#   end
