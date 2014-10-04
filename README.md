#Banned Books: Sorted Using Insertion Sort

Using the same function I was able to sort by books 3 different ways:
*Ordered by numerical rank
*Alphabetical by title
*Alphabetical by author’s last name.

##Needs to be fixed:
I’ve got everything except I can’t get clearInterval() to work. The sorting function does not shut off after it finishes sorting the books. I left many of my attempts to add clearInterval() to the code commented out in the code. Any ideas? I will continue to work on this.
Thus, although all 4 buttons work. You have to refresh the page before you hit another button. If you don’t refresh it tries to sort via both criteria which crashes it.

##The rest works fine
I worked 2 and half hours with Dale and another TA whose name I didn’t catch. Their consensus was that it was impossible to slow my code down the traditional way because it doesn’t return any values. setInterval() and setTimeout() only work if there is a value the code is returning. And since my code has no returning value, the only way to get it to slow down would be to have the script process all the data and then store each book’s positions throughout the sorting-cycle to program a future animation. And then to return those values again in an animation (I’m looking at a JavaScript animations tutorial for future purposes).
Someone in the computing universe needs to invent a sleep() function to tell the computer to just pause for a moment. Dale suggested a hack around this by putting an unrelated For loop in the middle of the code where I want to computer to slow down. In other words, I'm slowing the computer down by handing it too much information to process at the that moment. Oddly, this froze the code and required the user to continually hit the button to continue the sort. Because of this I was able to get setInterval() to work by continually activating the function to complete the search (if you remove the For loop from the middle of the “sortRankSlow” function it finishes the entire sort instantaneously.

###Image note
I designed the covers and graphics using free images from [Morguefile.com](http://www.morguefile.com/).
