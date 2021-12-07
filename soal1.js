
function cekPrima(bil){

    while (true) {
        let faktor = 0;
        for (let y = 1; y <= bil; y++) {
            if (bil%y === 0) {
                faktor++;
            }
        }
        if (faktor === 2) {
            return bil;
        }
        bil++;
    }
}

function drawSikuSiku(number) {
    let saveHistory = 1;
    for (let x = 1; x <= number; x++){
        let derY = '';
        for (let y = 1; y <= x; y++) {
            const prima = cekPrima(saveHistory + 1);
            saveHistory = prima;
            derY += " " + prima + " ";
        }
        console.log(derY);
    }
}


drawSikuSiku(7);
