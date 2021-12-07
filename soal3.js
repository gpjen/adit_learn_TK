
function sortArray(arr) {
    let tampung = 0;

    for (let x = 0; x < arr.length; x++) {
        for (let y = x+1; y < arr.length; y++) {
            if (arr[x] > arr[y]) {
                tampung = arr[x];
                arr[x] = arr[y];
                arr[y] = tampung;
            }
        }
    }
    return arr;
}

const arrX = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];

const arrMe = sortArray(arrX);
const ganil = arrMe.filter(val => val%2 === 1).join();
const genap = arrMe.filter(val => val%2 === 0).join();


console.log("array : ", arrMe.join());
console.log("ganjil : ", ganil);
console.log("ganjil : ", genap);







