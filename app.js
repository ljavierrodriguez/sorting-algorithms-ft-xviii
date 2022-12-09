let numbers = [81, 540, 107, 302, 4, 701, 25, 900, 1, 12, 999];
let alumnos = ["Elsa", "Rodrigo", "Luis", "Gabriel", "Mariandris", "Felipe", "Monica", "Victor", "Nico", "Favio", "Favio"];
let users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
    },
    {
        id: 3,
        name: 'Elsa',
        username: 'elsa_1',
        email: 'Elsa@gmail.com'
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org"
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info"
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me"
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz"
    }
]

/*
Criterios de Ordenamiento: 

1.- Simbolos/Caracteres Especiales
2.- Numeros
3.- Mayusculas
4.- Minusculas

*/

const bubbleSortNumbers = arr => {
    console.time();
    let stop = arr.length - 1;

    for (let i = 0; i <= stop; i++) {
        for (let j = 0; j <= stop; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    console.timeEnd();
    return arr;
}
console.log(bubbleSortNumbers(numbers));

const bubbleSortString = arr => {
    console.time();
    let wall = arr.length - 1;
    while (wall >= 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index] > arr[index + 1]) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
            index++;
        }
        wall--;
    }
    console.timeEnd()
    return arr;
}
console.log(bubbleSortString(alumnos));

const bubbleSortObjects = arr => {
    console.time();
    let wall = arr.length - 1;
    while (wall >= 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].username > arr[index + 1].username) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
            index++;
        }
        wall--;
    }
    console.timeEnd()
    return arr;
}
console.log(bubbleSortObjects(users));


const selectionSort = arr => {
    console.time();
    let min = 0;
    while(min < arr.length - 1){
        for(let i = min + 1; i < arr.length - 1; i++){
            if(arr[min] > arr[i]){
                let aux = arr[min];
                arr[min] = arr[i];
                arr[i] = aux;
            }
        }
        min++;
    }
    console.timeEnd();
    return arr;
}

const selectionSortObjects = (arr, field) => {
    console.time();
    let min = 0;
    while(min < arr.length - 1 ){
        for(let i = min + 1; i < arr.length; i++){
            if(arr[min][field] > arr[i][field]){
                let aux = arr[min];
                arr[min] = arr[i];
                arr[i] = aux;
            }
        }
        min++;
    }
    console.timeEnd();
    return arr;
}

console.log(selectionSort(numbers));
console.log(selectionSort(alumnos));

console.log(selectionSortObjects(users, "username"));
console.log(selectionSortObjects(users, "email"));