function bitcoinMining (input){
    let leva = 0;
    let bitcoin = 0;
    let day = 0;
    let index = 0;
    let currentDayGoldDug = input[index];
    let inputL = input.length;
    let dayOfFirstBitcointPurchase = 0;

    for (let i = 0; i < inputL; i++){
        day++;
        if (day % 3 === 0){
            currentDayGoldDug = currentDayGoldDug * 0.7;
        }
        leva += currentDayGoldDug * 67.51;
        
        for (let j = leva; j > 11949.16; j-=11949.16){
            if (leva >= 11949.16 && bitcoin === 0){
                bitcoin++;
                leva -= 11949.16; 
                dayOfFirstBitcointPurchase = day;
            } else if (leva >= 11949.16 && bitcoin !== 0){
                bitcoin++;
                leva -= 11949.16;
            }
        }
        index++;
        currentDayGoldDug = input[index];
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcointPurchase}`);
    }
    console.log(`Left money: ${leva.toFixed(2)} lv.`);

}
// bitcoinMining([100,200,300])
// bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])