let personalMovieDB = {
    count: +'',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }

        personalMovieDB.count = numberOfFilms;  
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
                grade = prompt("На сколько оцените его?", "");
            
            if (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || grade == null || grade == '') {
                i--;
            } else {
                personalMovieDB.movies[lastFilm] = grade;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");

            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
                i--;
            }
        }

        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};