// var counter = 0;
// var sorted;

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

// INSERTION SORTING FUNCTION:

function sortRankSlow(m, item) { /* start 1 */
  // sorted = false;
  for (var i = 1; i < m; i++) { /* start 2 */
    var x = $('.card:eq(' + i + ')').attr('' + item + '');
    $('.card:eq(' + i + ')').addClass('swapping').fadeIn('slow');
    $('.card:eq(' + ( i - 1 ) + ')').addClass('swapping').fadeIn('slow');
    var j = i;

    while (j > 0 && $('.card:eq(' + ( j - 1 ) + ')').attr('' + item + '') > x) { /* start while loop */
      $('.card:eq(' + j + ')').insertBefore($('.card:eq(' + ( j - 1 ) + ')')).fadeIn('slow');

        // hack to slow the process:
        for (var k = 1; k < 200; i++) {
            return k;
        }

      j -= 1;

    } /* End while loop */

    $('li').removeClass('swapping');

    // if ($('.card:eq(' + ( j - 1 ) + ')').attr('' + item + '') < x) {
    //   counter += 1;
    // }

    // if (i == (m - 1)) {
    //   clearInterval(sortRankSlow);
    // }

  } /* End 2 */

  sortReset(); // Currently does not work

  // clearInterval(sortRankSlow);

  // sorted = true;

  // if (counter == 25) {
  //  window.clearInterval(sortRankSlow);
  //  counter = 0;
  // }

} /* End 1 */

// RESENT FUNCTION (currently does not work):

function sortReset() {
  window.clearInterval(sortRankSlow);
}

// MIDDLEMAN FUNCTIONS
// launch the sorting function with the correct perameters:

function slowMoRank() {
  sortRankSlow($('.card').length, 'id');
  // clearInterval(sortRankSlow);

  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
}

function slowMoTitle() {
  sortRankSlow($('.card').length, 'title');
  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
}

function slowMoAuthor() {
  sortRankSlow($('.card').length, 'class');
  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
}

// BUTTON CALLS:

$('button#mostBanned').on('click', function() {
  setInterval(slowMoRank, 200);
  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
});

$('button#author').on('click', function() {
  setInterval(slowMoAuthor, 200);
  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
});

$('button#byTitle').on('click', function() {
  setInterval(slowMoTitle, 200);
  // if (counter == 25) {
  //   clearInterval(sortRankSlow);
  //   counter = 0;
  // }
});

// CREATES THE BOOKS:

function Books() {
  this.bookID = ['book0', 'book1', 'book2', 'book3', 'book4', 'book5',
    'book6', 'book7', 'book8', 'book9', 'book10', 'book11', 'book12',
    'book13', 'book14', 'book15', 'book16', 'book17', 'book18', 'book19',
    'book20', 'book21', 'book22', 'book23', 'book24'];
  this.bookRank = [90, 5, 80, 1, 23, 95, 27, 33, 28, 91, 14,
    16, 21, 22, 10, 6, 42, 84, 11, 43, 67, 50, 60, 66, 69];
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
