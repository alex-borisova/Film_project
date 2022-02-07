let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
        grade = prompt("На сколько оцените его?", "");
    
    // while (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || grade == null || grade == '') {
    //     lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    //     grade = prompt("На сколько оцените его?", "");
    // }

    if (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || grade == null || grade == '') {
        i--;
    } else {
        personalMovieDB.movies[lastFilm] = grade;
    }
}

if (personalMovieDB.count < 10) {
    alert ('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

console.log(personalMovieDB);