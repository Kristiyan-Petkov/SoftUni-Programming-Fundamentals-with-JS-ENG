function softUniStudents(input) {
    let courses = {};
    let capacityObject = {};

    for (let element of input) {
        let elementSplit = element.split(' ')
        let commandIdentifier = elementSplit[0].split('').pop();
        if (commandIdentifier === ':') {
            let course = elementSplit[0]
                .split('')
                .slice(0, elementSplit[0].length - 1)
                .join('')
            let capacity = Number(elementSplit[1]);
            if (!Object.keys(courses).includes(course)) {
                courses[course] = {};
                capacityObject[course] = capacity;
            } else {
                capacityObject[course] += capacity;
            }

        } else {
            let targetCourse = elementSplit.pop();
            let studentDetailsSplit = elementSplit[0].split('[')
            let studentID = studentDetailsSplit[0] + ', ' + elementSplit[3]
            let studentCredits = Number(studentDetailsSplit[1]
                .split(']')
                .slice(0, elementSplit[0].length - 1)
                .join(''))
            if (Object.keys(courses).includes(targetCourse)) {
                if (capacityObject[targetCourse] > 0) {
                    capacityObject[targetCourse] -= 1;
                    courses[targetCourse][studentID] = studentCredits;
                }
            }
        }
    }
    let coursesToIterate = Object.entries(courses).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    for (let element of coursesToIterate) {
        let placesLeft = Object.entries(capacityObject).filter(x => x[0] === element[0])
        console.log(`${element[0]}: ${placesLeft[0][1]} places left`);
        let students = Object.entries(element[1]).sort((a, b) => b[1] - a[1]);
        for (let [key, value] of students) {
            console.log(`--- ${value}: ${key}`)
        }
    }
}
softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[135] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])