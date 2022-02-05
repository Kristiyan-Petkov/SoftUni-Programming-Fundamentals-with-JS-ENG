function vacation(peopleCount, groupType, dayOfWeek) {
    let price = 0;
    switch (groupType) {
        case "Students":
            if (dayOfWeek === "Friday"){
                price = peopleCount * 8.45;
            } else if (dayOfWeek === "Saturday"){
                price = peopleCount * 9.80;
            } else if (dayOfWeek === "Sunday"){
                price = peopleCount * 10.46;
            }
            break;
        case "Business":
            if (dayOfWeek === "Friday"){
                price = peopleCount * 10.90;
            } else if (dayOfWeek === "Saturday"){
                price = peopleCount * 15.60;
            } else if (dayOfWeek === "Sunday"){
                price = peopleCount * 16;
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday"){
                price = peopleCount * 15;
            } else if (dayOfWeek === "Saturday"){
                price = peopleCount * 20;
            } else if (dayOfWeek === "Sunday"){
                price = peopleCount * 22.50;
            }
            break;
    }

    if (groupType === "Students" && peopleCount >= 30){
        price = price * 0.85;
    } else if (groupType === "Business" && peopleCount >= 100){
        price = price - ((price / peopleCount)*10);
    } else if (groupType === "Regular" && peopleCount > 10 && peopleCount <= 20){
        price = price * 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")