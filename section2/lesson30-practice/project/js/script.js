/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
adv.forEach(item => {
    item.remove();
});

/* 2 */
genre.textContent = "драма";

/* 3 */
// document.querySelector('.promo__bg').style.background = "url('../img/bg.jpg')";

document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";

/* 4-5 */
// movieList.forEach((item, i) => {
//     item.textContent = `${i + 1}: ${movieDB.movies.sort()[i]}`;
// });

const listOfMovies = document.querySelector('.promo__interactive-list');

listOfMovies.innerHTML = '';

/* a=a+1/a+=1 */
movieDB.movies.sort().forEach((film, i) => {
    listOfMovies.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});