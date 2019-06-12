let i=0;

for (i=0; i <= 100; i++) {
    if (i <= 65 ) {
        console.log(`Pour ` + i + ` points pour avez le grade F.`);
    } else if (i > 65 && i <=70) {
        console.log(`Pour ` + i + ` points pour avez le grade D.`);
    } else if (i > 70 && i <=80) {
        console.log(`Pour ` + i + ` points pour avez le grade C.`);
    } else if (i > 80 && i <=90) {
        console.log(`Pour ` + i + ` points pour avez le grade B.`);
    } else if (i > 90 && i <=100) {
        console.log(`Pour ` + i + ` points pour avez le grade A.`);
    }
}