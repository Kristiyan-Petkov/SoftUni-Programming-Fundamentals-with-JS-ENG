function problem4 (array){
    let food = Number (array.shift()) * 1000;
    let hay = Number (array.shift()) * 1000;
    let cover = Number (array.shift()) * 1000;
    let petWeight = Number (array.shift()) * 1000;

    for (let i = 1; i < 31; i++){
        food -= 300;
        if (i % 2 === 0){
            hay -= food*0.05;
        }
        if (i % 3 === 0){
            cover -= petWeight/3;
        }
        if (food < 0 || hay < 0 || cover < 0){
            return "Merry must go to the pet store!"
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
}
problem4((["10", 
"5", 
"5.2", 
"1"]))