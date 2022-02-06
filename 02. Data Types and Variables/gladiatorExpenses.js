function gladiatorExpenses (lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    for (let i = 1; i <= lostFightsCount;i++){
        if (i % 2 === 0 && i % 3 === 0){
            brokenHelmet++;
            brokenSword++;
            brokenShield++;
        } else if (i % 2 === 0){
            brokenHelmet++;
        } else if (i % 3 === 0){
            brokenSword++;
        }
    }
    brokenArmor = Math.floor(brokenShield/2);
    let expenses = brokenHelmet*helmetPrice + brokenSword*swordPrice + brokenShield*shieldPrice + brokenArmor*armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )