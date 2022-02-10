function bookShelf(input) {
    let shelf = {};
    let books = {};

    for (let element of input) {
        let elementSplit = element.split(' ');
        if (elementSplit[1] === '->') {
            if (!Object.keys(shelf).includes(elementSplit[0])) {
                shelf[elementSplit[0]] = elementSplit[2];
            }
        } else {

            let elementNewSplit = element.split(', ');
            let bookAndAuthor = elementNewSplit[0].split(': ');
            let book = bookAndAuthor[0];
            let author = bookAndAuthor[1];
            let genre = elementNewSplit[1];
            if (Object.values(shelf).includes(genre)) {
                if (!Object.keys(books).includes(genre)) {
                    books[genre] = {}
                }
                let bookObject = { book: author }
                if (Object.values(shelf).includes(genre)) {
                    let shelfID = Object.keys(shelf).find(key => shelf[key] === genre);
                    books[genre][book] = author;
                }
            }

        }
    }
    let shelves = Object.entries(shelf)
    let bookses = Object.entries(books).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    let booksFiltered = bookses.filter(x => Object.entries(x[1]).length > 0)
    for (let element of booksFiltered) {
        let shelfNum = Object.keys(shelf).find(key => shelf[key] === element[0]);
        let objectsToIterate = Object.entries(element[1]).sort((a, b) => a[0].localeCompare(b[0]));
        let shelfLength = Object.entries(objectsToIterate).length;
        console.log(`${shelfNum} ${element[0]}: ${shelfLength}`)
        for (let [key, value] of objectsToIterate) {
            console.log('--> ' + key + ': ' + value)
        }
    }
}
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])