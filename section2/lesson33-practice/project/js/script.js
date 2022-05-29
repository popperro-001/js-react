/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const add = document.querySelector('.promo__adv'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelectorAll('.promo__interactive-item');

    /* 1 */
    // add.remove();
    const adv = document.querySelectorAll('.promo__adv img');
    const deleteAdv = (arg) => {
        arg.forEach(item => {
            item.remove();
        });
    };



    /* 2 */
    const makeChanges = () => {
        genre.textContent = "драма";

        /* 3 */
        // document.querySelector('.promo__bg').style.background = "url('../img/bg.jpg')";

        document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = function(arr) {
        arr.sort();
    };

    /* 4-5 */
    // movieList.forEach((item, i) => {
    //     item.textContent = `${i + 1}: ${movieDB.movies.sort()[i]}`;
    // });

    const listOfMovies = document.querySelector('.promo__interactive-list');

    function moviesListUpdate(films, parent) {
        parent.innerHTML = '';
        sortArr(movieDB.movies);
        /* a=a+1/a+=1 */
        films.movies.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}: ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                moviesListUpdate(films, parent);
            });
        });
    }

    /* 1,2,4,5 */
    window.addEventListener('load', () => {
        moviesListUpdate(movieDB, listOfMovies);
        deleteAdv(adv);
        makeChanges();
    });

    const newMovie = document.querySelector('.adding__input'),
        btn = document.querySelector('.add button'),
        checkBox = document.querySelector('[type="checkbox"]');


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let newFilm = newMovie.value;
        if (newMovie.value) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0.22)}...`;
            }

            if (checkBox.checked) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
        }

        newMovie.value = '';

        moviesListUpdate(movieDB, listOfMovies);
    });


});