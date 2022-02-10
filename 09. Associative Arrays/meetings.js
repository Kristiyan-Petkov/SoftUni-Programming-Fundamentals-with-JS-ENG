function meetings(input){
    let calendar = [];
    for (let elements of input){
        let entry = elements.split(' ');
        let day = entry[0];
        let person = entry[1];
        let isDayTaken = calendar.find(o => o.day === entry[0]);
        if (isDayTaken === undefined){
            let meeting = {
                day,
                person,
            }
            calendar.push(meeting);
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let meetings of calendar){
        console.log(`${meetings.day} -> ${meetings.person}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])