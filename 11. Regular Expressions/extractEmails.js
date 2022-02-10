function extractEmails(text) {
    let pattern = /[A-Za-z0-9\.\-\_]+@[A-Za-z0-9\.\-]+\.[a-z]+/g;

    let emails = text.match(pattern);
    for (let email of emails) {
        let emailPieces = email.split('')
        let validEmail = true;
        let prevChar = undefined;
        if (email[0] === '\.' || email[0] === '\-' || email[0] === '\_') {
            validEmail = false;
        }
        for (let char of email) {
            if (char === prevChar) {
                if (char === '\.' || char === '\-' || char === '\_') {
                    validEmail = false;
                }
            }
            if (prevChar === '\@' && (char === '\.' || char === '\-' || char === '\_')) {
                validEmail = false;
            }
            prevChar = char;
        }
        if (validEmail) {
            console.log(email);
        }
    }
}
extractEmails('qgsgqgqgq hjs@gmvv.vsa.com')