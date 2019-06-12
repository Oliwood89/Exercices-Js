let PNJ = {
    name : "Oli",
    age : 29,
    items_to_give : ["sword","potion","key"],
};
for (let cul in PNJ) {
    console.log(PNJ[cul]);
}
let GiveItem = PNJ.items_to_give[Math.floor(Math.random()* PNJ.items_to_give.length)];
console.log(GiveItem);