//Пробний СВІЙ варіант
const genres = ['Jazz', 'Blues'];
const newGenres = 'Рок-н-ролл';

console.log(genres);

genres.splice(2, 0, newGenres);
console.log(genres);

console.log(genres.slice(0, 1));

console.log(genres.slice(-1));

console.log(genres.splice(0, 1));

const firstGenres = 'Country';
const twoGenres = 'Reggae';

genres.splice(0, 0, firstGenres);
console.log(genres);

genres.splice(1, 0, twoGenres);
console.log(genres);
