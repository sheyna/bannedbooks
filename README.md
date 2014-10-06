#Banned Books:
###Sorted Using Insertion Sort:

A project for Code Fellows Foundations 1, Oct. 2014

Using one sorting functions I was able to sort the books 3 different ways:
* Ordered by numerical rank
* Alphabetical by title
* Alphabetical by author’s last name.

I worked 2 and half hours with Dale and another TA whose name I didn’t catch at the Thursday lab. Their consensus was that it was impossible to slow my code down the traditional way because it doesn’t return any values. setInterval() and setTimeout() only work if there is a value the code is returning. And since my code has no returning value, the only way to get it to slow down would be to have the script process all the data and then store each book’s positions throughout the sorting-cycle to program a future animation. And then to return those values again in an animation (I’m looking at a JavaScript animations tutorial for future purposes).

Someone in the computing universe really needs to invent a sleep() function to tell the computer to just pause for a moment. Dale suggested a hack around this by putting an unrelated For loop in the middle of the code where I want to computer to slow down. In other words, I'm slowing the computer down by handing it too much information to process at the that moment. Oddly, this froze the code and required the user to continually hit the button to continue the sort. Because of this I was able to get setInterval() to work by continually activating the function to complete the search (if you remove the For loop from the middle of the “sortRankSlow” function it finishes the entire sort instantaneously). I was then able use clearInterval() to turn off the interval.

In order to get the code to handle sorting both numbers and letters I had to add an If loop and thus duplicate the while loop. I tried to make the interior of the while loop it's own function so as not to duplicate the same code, but this caused the code to either malfunction or speed up depending on how I tried it. I was forced to leave the code duplicated.

###Image note
I designed the covers and graphics using free images from [Morguefile.com](http://www.morguefile.com/).
