export const books = [
  {
    title: 'Candle-lightin Time',
    author: 'Paul Laurence Dunbar',
    categories: ['Novel', 'Adventure', 'Science Fiction'],
    bookCover: require('../assets/book-covers/book_cover_candle_light_in_time.jpg'),
    edition: 2,
    yearReleased: '2020',
    pages: 210,
    price: '19,20€',
  },
  {
    title: 'God Emperor of Dune',
    author: 'Frank Herbert',
    categories: ['Novel', 'Science Fiction'],
    bookCover: require('../assets/book-covers/book_cover_god_emperor_of_dune.jpg'),
    edition: 6,
    yearReleased: '1981',
    pages: 496,
    price: '22,50€',
  },
  {
    title: 'Soul of the Deep',
    author: 'Natasha Bowen',
    categories: ['Adventure', 'Fantasy'],
    bookCover: require('../assets/book-covers/book_cover_soul_of_the_deep.jpg'),
    edition: 1,
    yearReleased: '2022',
    pages: 197,
    price: '13,70€',
  },
  {
    title: 'The Ballad of Songbirds and Snakes',
    author: 'Suzanne Collins',
    categories: ['Novel', 'Adventure'],
    bookCover: require('../assets/book-covers/book_cover_the_ballard_of_songbirds_and_snakes.png'),
    edition: 2,
    yearReleased: '2019',
    pages: 464,
    price: '26,99€',
  },
  {
    title: 'The Mystery of Black Hollow Lane',
    author: 'Julia Nobel',
    categories: ['Mystery'],
    bookCover: require('../assets/book-covers/book_cover_the_mystery_of_black_hollow_lane.jpg'),
    edition: 2,
    yearReleased: '2018',
    pages: 320,
    price: '20,85€',
  },
  {
    title: 'The Remains of the Day',
    author: 'Kazuo Ishiguro',
    categories: ['Novel', 'Romance', 'Drama'],
    bookCover: require('../assets/book-covers/book_cover_the_remains_of_the_day.jpg'),
    edition: 5,
    yearReleased: '1989',
    pages: 534,
    price: '31,77€',
  },
  {
    title: 'The Secret Skin',
    author: 'Wendy N. Wagner',
    categories: ['Horror'],
    bookCover: require('../assets/book-covers/book_cover_the_secret_skin.png'),
    edition: 1,
    yearReleased: '2021',
    pages: 88,
    price: '9,53€',
  },
  {
    title: 'The Virus in the Age of Madness',
    author: 'Bernard-Henri Lévy',
    categories: ['Fantasy', 'Horror'],
    bookCover: require('../assets/book-covers/book_cover_the_virus_in_the_age_of_madness.png'),
    edition: 4,
    yearReleased: '2011',
    pages: 259,
    price: '18,50€',
  },
  {
    title: 'Wolf Moon',
    author: 'Charles de Linte',
    categories: ['Romance', 'Drama'],
    bookCover: require('../assets/book-covers/book_cover_wolf_moon.png'),
    edition: 4,
    yearReleased: '1988',
    pages: 344,
    price: '23,12€',
  },
];

const reviewsData = [
  {
    writerName: 'Anna Middlesworth',
    review:
      'An extremely powerful book with defined style. Lived up to my high expectations.',
    isSpecialist: true,
  },
  {
    writerName: 'Paval Bloxam',
    review:
      'I got the chills so many times toward the end of this book. It completely blew my mind. Definetely recommend.',
    isSpecialist: false,
  },
  {
    writerName: 'Arseny Kovách',
    review:
      'Despite its flaws, it was pleasure to read this book. Anyone into this category should try it.',
    isSpecialist: true,
  },
  {
    writerName: 'Sadb Kendal',
    review:
      'I am still dipping my toes into this category, finding what works for me and what doesn’t. This book definetely works. 9/10',
    isSpecialist: true,
  },
  {
    writerName: 'Valentin Ó Tíghearnaigh',
    review:
      'Did not meet my expectations. Still a decent read, but there are books with similar themes that did the job much better.',
    isSpecialist: true,
  },
  {
    writerName: 'Jake Smith',
    review:
      'First time I got to know about the author, and this book sparked my interested in them. Love their style. I will for sure read his other works.',
    isSpecialist: false,
  },
];

var reviewsDataSpecialists = reviewsData.slice();
for (let i = 0; i < reviewsDataSpecialists.length; i++) {
  if (!reviewsDataSpecialists[i].isSpecialist)
    // array.splice(index, 1); // 2nd parameter means remove one item only
    reviewsDataSpecialists.splice(i, 1);
}

function getRandomInt(maxExclusive) {
  // maxExclusive = 3 => returns 0 1 2
  return Math.floor(Math.random() * maxExclusive);
}

function compareReviewsData(reviewData1, reviewData2) {
  if (reviewData1.isSpecialist && !reviewData2.isSpecialist) return -1;
  else if (reviewData2.isSpecialist && !reviewData1.isSpecialist) return 1;
  return 0;
}

books.forEach(function (book) {
  var chosenSpecialistReview =
    reviewsDataSpecialists[
      Math.floor(Math.random() * reviewsDataSpecialists.length)
    ];

  var shuffledReviewsDataWithoutSpecialist = reviewsData.map((x) => x);
  // remove chosenSpecialistReview
  shuffledReviewsDataWithoutSpecialist.splice(
    shuffledReviewsDataWithoutSpecialist.indexOf(chosenSpecialistReview),
    1
  ); // second arg means remove only 1 element
  // shuffle
  shuffledReviewsDataWithoutSpecialist =
    shuffledReviewsDataWithoutSpecialist.sort(() => Math.random() - 0.5);

  var numReviews = getRandomInt(3) + 1; // 1 2 3 including specialist
  book.reviewsData = [];

  book.reviewsData.push(chosenSpecialistReview);

  for (let i = 0; i < numReviews - 1; i++) {
    book.reviewsData.push(shuffledReviewsDataWithoutSpecialist[i]);
  }

  book.reviewsData.sort(compareReviewsData);
});

export var booksBought = [];
