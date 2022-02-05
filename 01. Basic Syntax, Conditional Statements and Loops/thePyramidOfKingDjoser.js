function thePyramidOfKingDjoser(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let steps = 0;

    for (let i = base; i > 0; i -= 2) {
        steps++
        let fullSurface = i * i;
        let border = 4 * i - 4;
        let core = fullSurface - border;
        if (i === 2 || i === 1){
            goldRequired = fullSurface;
        } else if (steps % 5 === 0) {
            lapisLazuliRequired += border;
            stoneRequired += core;
        } else {
            marbleRequired += border;
            stoneRequired += core
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneRequired * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired * increment)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);

}
thePyramidOfKingDjoser(11, 1)