
function hitungVoucher(kodeVocer, bayar) {
    let potongan = 0;

    if (kodeVocer === 'DumbWaysJos') {
        bayar >= 50_000 ? potongan = bayar / 100 * 21.1 : potongan;
        potongan > 20_000 ? potongan = 20_000 : potongan;
        bayar = bayar - potongan;
    } else if (kodeVocer === 'DumbWaysMantap'){
        bayar >= 80_000 ? potongan = bayar / 100 * 30 : potongan;
        potongan > 40_000 ? potongan = 40_000 : potongan;
        bayar = bayar - potongan;
    }

    console.log("Uang yang harus dibayar : Rp.", bayar);
    console.log("Diskon : Rp.", potongan);
}


hitungVoucher("DumbWaysJos", 100_000);
// hitungVoucher("DumbWaysMantap", 100_000);