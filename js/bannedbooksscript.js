// var counter = 0;
// var sorted;
var sortingTimer;

// BROOK'S SHUFFLE FUNCTION FROM CLASS:

// shuffle books:
function shuffle(m) {
  // swap last card with a random card from left
  var $m,
    rand = Math.floor(Math.random() * m),
    $rand;

  $('li').removeClass('swapping');

  $mth = $('.card:eq(' + m + ')')
    .addClass('swapping')
    .fadeIn();
  $rand = $('.card:eq(' + rand + ')')
    .addClass('swapping')
    .fadeIn();

  $mth.before($rand);
  $('.card:eq(' + rand + ')').before($mth);

  if (m > 0) {
    setTimeout(shuffle, 200, m - 1);
  } else {
    $('li').removeClass('swapping');
  };
}

$('button#shuffle').on('click', function() {
  shuffle($('.card').length - 1);
});

// ------------------------MY WORK:------------------------

// INSERTION SORTING FUNCTION (for letters):

function sortRankSlow(m, item) { /* start 1 */
  // sorted = false;
  for (var i = 1; i < m; i++) { /* start 2 */

    // gets value of x so it can be compared in the While loop
    var x = $('.card:eq(' + i + ')').attr('' + item + '');

    // adds pink highlight to the to active books:
    $('.card:eq(' + i + ')').addClass('swapping').fadeIn('slow');
    $('.card:eq(' + ( i - 1 ) + ')').addClass('swapping').fadeIn('slow');

    // sets j so it can later be compared to x in the while loop:
    var j = i;

    // puts "x" ahead of the book before it if it is greater than x:
    while (j > 0 && $('.card:eq(' + ( j - 1 ) + ')').attr('' + item + '') > x) { /* start while loop */
      $('.card:eq(' + j + ')').insertBefore($('.card:eq(' + ( j - 1 ) + ')')).fadeIn('slow');

        // hack to slow the process:
        for (var k = 1; k < 200; i++) {
            return k;
        }

      j -= 1; // devaluates j before While loop loops back

    } /* End while loop */

    $('li').removeClass('swapping'); // removes pink highlight

  } /* End 2 */

  sortReset(); // Ends setInterval timer

} /* End 1 */


// INSERTION SORTING FUNCTION (for numbers):

function sortRankSlowNumbers(m) { /* start 1 */
  // sorted = false;
  for (var i = 1; i < m; i++) { /* start 2 */

    // gets value of x so it can be compared in the While loop
    var x = parseInt($('.card:eq(' + i + ')').attr('id'));

    // adds pink highlight to the to active books:
    $('.card:eq(' + i + ')').addClass('swapping').fadeIn('slow');
    $('.card:eq(' + ( i - 1 ) + ')').addClass('swapping').fadeIn('slow');

    // sets j so it can later be compared to x in the while loop:
    var j = i;

    // puts "x" ahead of the book before it if it is greater than x:
    while (j > 0 && parseInt($('.card:eq(' + ( j - 1 ) + ')').attr('id')) > x) { /* start while loop */
      $('.card:eq(' + j + ')').insertBefore($('.card:eq(' + ( j - 1 ) + ')')).fadeIn('slow');

        // hack to slow the process:
        for (var k = 1; k < 200; i++) {
            return k;
        }

      j -= 1; // devaluates j before While loop loops back

    } /* End while loop */

    $('li').removeClass('swapping'); // removes pink highlight

  } /* End 2 */

  sortReset(); // Ends setInterval timer

} /* End 1 */

// RESET SORTINGTIMER FUNCTION :

function sortReset() {
  window.clearInterval(sortingTimer);
}

// MIDDLEMAN FUNCTIONS:
// Launches the sorting function with the correct perameters.
// This is necessary because if it is all done inside the buttons
// below the sort happens to quickly.

function slowMoRank() {
  sortRankSlowNumbers($('.card').length);
}

function slowMoTitle() {
  sortRankSlow($('.card').length, 'title');
}

function slowMoAuthor() {
  sortRankSlow($('.card').length, 'class');
}

// BUTTON CALLS:

$('button#mostBanned').on('click', function() {
  sortingTimer = setInterval(slowMoRank, 200);
});

$('button#author').on('click', function() {
  sortingTimer = setInterval(slowMoAuthor, 200);
});

$('button#byTitle').on('click', function() {
  sortingTimer = setInterval(slowMoTitle, 200);
});

// CREATES THE BOOKS:

function Books() {
  this.bookID = ['book0', 'book1', 'book2', 'book3', 'book4', 'book5',
    'book6', 'book7', 'book8', 'book9', 'book10', 'book11', 'book12',
    'book13', 'book14', 'book15', 'book16', 'book17', 'book18', 'book19',
    'book20', 'book21', 'book22', 'book23', 'book24'];
  this.bookRank = [90, 05, 80, 01, 23, 95, 27, 33, 28, 91, 14,
    16, 21, 22, 10, 06, 42, 84, 11, 43, 67, 50, 60, 66, 69];
  this.bookTitle = ["A Wrinkle in Time", "Of Mice and Men", "A Day No Pigs Would Die",
    "Harry Potter (series)", "The Giver", "Shade's Children", "My Brother Sam Is Dead",
    "Snow Falling on Cedars", "Bridge To Terabithia", "Julie of the Wolves",
    "The Adventures of Huckleberry Finn", "Forever", "To Kill A Mockingbird",
    "Gossip Girl (series)", "The Perks of Being a Wallflower",
    "I Know Why the Caged Bird Sings", "The Fighting Ground",
    "So Far From the Bamboo Grove", "Fallen Angels", "Blubber", "A Time to Kill",
    "The Kite Runner", "Speak", "Roll of Thunder, Hear My Cry", "Fahrenheit 451"];
  this.bookTitleSort = ["Wrinkle in Time, A", "Of Mice and Men", "Day No Pigs Would Die, A",
    "Harry Potter (series)", "Giver, The", "Shade's Children", "My Brother Sam Is Dead",
    "Snow Falling on Cedars", "Bridge To Terabithia", "Julie of the Wolves",
    "Adventures of Huckleberry Finn, The", "Forever", "To Kill A Mockingbird",
    "Gossip Girl (series)", "Perks of Being a Wallflower, The",
    "I Know Why the Caged Bird Sings", "Fighting Ground, The",
    "So Far From the Bamboo Grove", "Fallen Angels", "Blubber", "Time to Kill, A",
    "Kite Runner, The", "Speak", "Roll of Thunder, Hear My Cry", "Fahrenheit 451"];
  this.bookAtribution = ["by Madeline L'Engle", "by John Steinbeck",
    "by Robert Newton Peck", "by J.K. Rowling", "by Lois Lowry", "by Garth Nix",
    "by James Lincoln Collier", "by David Guterson", "by Katherine Paterson",
    "by Jean Craighead George", "by Mark Twain", "by Judy Blume", "by Harper Lee",
    "by Cecily von Ziegesar", "by Stephen Chbosky", "by Maya Angelou", "by Avi",
    "by Yoko Watkins", "by Walter Dean Myers", "by Judy Blume", "by John Grisham",
    "by Khaled Hosseini", "by Laurie Halse Anderson", "by Mildred Taylor",
    "by Ray Bradbury"];
  // "x" on the end of the first "Blume" prevents sorting errors:
  this.bookAuthorLastName = ["L'Engle", "Steinbeck", "Peck", "Rowling", "Lowry",
    "Nix", "Collier", "Guterson", "Paterson", "George", "Twain", "Blumex", "Lee",
    "Von Ziegesar", "Chbosky", "Angelou", "Avi", "Watkins", "Myers", "Blume",
    "Grisham", "Hosseini", "Anderson", "Taylor", "Bradbury"];


  // For Loop print on page
  for (var i = 0; i < this.bookID.length; i++) {
    $('#books').append('<li id="' + this.bookRank[i] + '" class="' + this.bookAuthorLastName[i] + ' \
      card" title="' + this.bookTitleSort[i] + '"><div class="bookcover" title="' + this.bookTitle[i] + '" \
        id="' + this.bookID[i] + '"></div>' + this.bookRank[i]+ '. ' + this.bookTitle[i] + '<br />\
        ' + this.bookAtribution[i] + '</li>');
  }
} // closes Books()

var book = new Books();
