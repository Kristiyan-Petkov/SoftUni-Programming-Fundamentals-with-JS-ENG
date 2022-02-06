function triangleArea(sideA, sideB, sideC){
    let semiPerimeter = ((sideA + sideB + sideC)/2);
    let diffA = semiPerimeter - sideA;
    let diffB = semiPerimeter - sideB;
    let diffC = semiPerimeter - sideC;
    let area = Math.sqrt(semiPerimeter * diffA * diffB * diffC)
    console.log(area);
}
triangleArea(2,
    3.5,
    4
    )