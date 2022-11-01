"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмтрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из послежних просмотренных фильмов', ''),
        b = prompt('На сколько оценти его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        i--;
    }


}

if (personalMovieDB.count < 10) {
    console.log('error');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('done');
} else if (personalMovieDB.count >= 30) {
    console.log('lalalal');
} else {
    console.log('error');
}

console.log(personalMovieDB);