function songs(array){
    class Song {
        constructor (typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        };
        
    }
    for (let i = 1; i <= array[0]; i++){
        let positionAsArray = array[i].split('_');
        let song = new Song (...positionAsArray)
        if (song.typeList === array[array.length - 1] || array[array.length - 1] === 'all'){
            console.log(song.name);
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']     
    )