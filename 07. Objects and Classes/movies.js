function movies(commands) {
    let moviesBase = [];
    for (let entry of commands) {
        let commandSplit = entry.split(' ')
        if (commandSplit[0] === 'addMovie'){
            let movie = {name: commandSplit.slice(1).join(' ')};
            moviesBase.push(movie);
        } else {
            let directorIndex = commandSplit.indexOf('directedBy')
            if (directorIndex >= 0){
                let movieName =  commandSplit.slice(0,directorIndex).join(' ');
                let movieDirector = commandSplit.slice(directorIndex+1).join(' ');
                let movie = moviesBase.find(x => x.name === movieName);
                if (movie){
                    movie.director = movieDirector;
                }
                // console.log(movie);
            } else {
                dateIndex = commandSplit.indexOf('onDate');
                let movieName =  commandSplit.slice(0,dateIndex).join(' ');
                let date = commandSplit.slice(dateIndex+1).join(' ');
                let movie = moviesBase.find(x => x.name === movieName);
                if (movie){
                    movie.date = date;
                }
            }
        }
    }
    for (let movie of moviesBase){
        if(movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
        
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])