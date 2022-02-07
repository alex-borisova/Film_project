let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    grade = prompt("На сколько оцените его?", ""),
    lastFilmTwo = prompt("Один из последних просмотренных фильмов?", ""),
    gradeTwo = prompt("На сколько оцените его?", "");


personalMovieDB.movies[lastFilm] = grade;
personalMovieDB.movies[lastFilmTwo] = gradeTwo;

console.log(personalMovieDB);