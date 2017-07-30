def alphabetize(arr, rev=false)
    arr.sort!
    if (rev==true)
        return arr.reverse!
    else
        return arr
    end
end

numbers = [345,5,8,3,7,23,78,100]

puts alphabetize(numbers, true) 