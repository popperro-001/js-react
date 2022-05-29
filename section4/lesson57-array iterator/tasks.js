const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let res = [];

    for (let film of arr) {
        if (film.rating >= 8) {
            res.push(film);
        }
    }

    return res;
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let filmArr = [];

    for (let film of arr) {
        filmArr.push(film.name);
    }

    return filmArr.join(', ');
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    let res = arr.map((film, i) => {
        film.id = i;
        return film;
    });

    return res;
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(element => 'id' in element);
}

console.log(checkFilms(tranformedArray));
console.log(films);
console.log(checkFilms(films));


const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];



const getPositiveIncomeAmount = (data) => {

    return data.filter(element => Object.values(element) > 0)
        .reduce((sum, current) => sum + current.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    return data.some(element => element.amount < 0) ? data.reduce((sum, current) => sum + current.amount, 0) : getPositiveIncomeAmount(data);
};