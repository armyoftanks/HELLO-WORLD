movies = {
    witch: 9,
    hackers: 10
}

puts "What would you like to do with your movie list?"
puts "-- Type 'add' to add a movie."
puts "-- Type 'update' to update a movie."
puts "-- Type 'display' to display all movies."
puts "-- Type 'delete' to delete a movie."
choice = gets.chomp

case choice
    when "add"
        puts "Okay, Type a movie title to add to your list"
        title = gets.chomp
            if movies[title.to_sym].nil?
            puts "Awesome, What would you rate this movie from 1-10?"
            rating = gets.chomp
            movies[title.to_sym] = rating.to_i
            else
                puts "That movie title already exists!"
            end
    when "update"
        puts "Okay, Type a movie title to update"
        title = gets.chomp
            if movies[title.to_sym].nil?
                puts "This movie does not exist in your list, sorry!"
            else
                puts "What will you rate this movie from 1-10?"
                rating = gets.chomp
                movies[title.to_sym] = rating.to_i
            end
    when "display"
        movies.each do |x, y|
            puts "#{x}: #{y}"
        end
    when "delete"
        puts "Okay, Type a movie title to delete"
        title = gets.chomp
        if movies[title.to_sym].nil?
            puts "This movie does not exist in your list, sorry!"
        else
            movies.delete(title)
            puts "Your title has been deleted!"
        end
    else
        puts "Error!"
end
