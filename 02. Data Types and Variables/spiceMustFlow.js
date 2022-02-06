function spiceMustFlow(startingYield){
    let days = 0;
    totalYield = 0;
    for(i = startingYield; i >= 100; i -= 10){
        days++;
        totalYield += (i-26)
    }
    if (totalYield >= 26){
        totalYield -= 26;
    } else {
        totalYield = 0;
    }
    console.log(days);
    console.log(totalYield);

}
spiceMustFlow(111)