const genreData = [
  'Hip-Hop',
  'Dance/Electric',
  'POP',
  'Country',
  'Rock',
  'Indie',
];

const moodData = ['party', 'chill', 'workout', 'focus', 'driving'];

const nextedMenu = {
  explore: {
    data: [
      {
        id: 1,
        value: 'genre',
      },
      {
        id: 2,
        value: 'new',
      },
      {
        id: 3,
        value: 'pre order',
      },
    ],
  },
  library: {
    data: [
      {
        id: 1,
        value: 'playlist',
      },
      {
        id: 2,
        value: 'album',
      },
      {
        id: 3,
        value: 'artists',
      },
    ],
  },
};

export { genreData, moodData, nextedMenu };
