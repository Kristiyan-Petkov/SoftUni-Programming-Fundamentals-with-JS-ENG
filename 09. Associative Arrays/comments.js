function comments(input) {
    let users = {};
    let articles = {};


    for (let element of input) {
        let elementSplit = element.split(' ');
        switch (elementSplit[0]) {
            case 'user':
                elementSplit.shift();
                let user = elementSplit.join(' ');
                users[user] = 1;
                break;
            case 'article':
                elementSplit.shift();
                let article = elementSplit.join(' ');
                articles[article] = {};
                break;
            default:
                let userName = elementSplit.shift();
                elementSplit.shift();
                elementSplit.shift();
                let elementJoined = elementSplit.join(' ');
                let elementSplitAgain = elementJoined.split(': ');
                let articleTitle = elementSplitAgain[0];
                let commentSplit = elementSplitAgain[1].split(', ');
                let commentTitle = commentSplit[0];
                let commentContent = commentSplit[1];
                if (Object.keys(users).includes(userName) && Object.keys(articles).includes(articleTitle)) {
                    let currentComment = `: ${commentTitle} - ${commentContent}`;
                    articles[articleTitle][userName] = currentComment;
                }
                break;
        }
    }
    // let sortedUsers = Object.values(articles);
    // for (let element of sortedUsers){
    //   console.log(element)
    //   let currentLength = Object.keys(element).length;
    //   console.log(currentLength)
    //   console.log('---')
    // }
    // SORTING NEEDS FIXING
    let sortedArticles = Object.entries(articles).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    // console.log(sortedArticles[0][1])
    // console.log(sorted)
    // console.log(Object.values(articles).length);
    for (let element of sortedArticles) {
        console.log(`Comments on ${element[0]}`);
        let comment = Object.entries(element[1]).sort();
        let sortedComment = comment.sort((a, b) => a[0].localeCompare(b[0]));
        for (let [key, value] of sortedComment) {
            console.log(`--- From user ${key}${value}`)
        }
    }

}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])