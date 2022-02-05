function nextDay(year, month, day) {
    // let dateEntry = `${year},${month},${day}`
    // Date = dateEntry
    // var tomorrow = new Date(dateEntry);
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // console.log(tomorrow);

    let dayStart = new Date(`${year}, ${month}, ${day}`);
    // console.log(dayStart);
    cloneDate = new Date(dayStart.valueOf());
    cloneDate.setDate(cloneDate.getDate() + 1);
    // console.log(cloneDate);
    return cloneDate;
    
    
}
nextDay(2016, 9, 30)