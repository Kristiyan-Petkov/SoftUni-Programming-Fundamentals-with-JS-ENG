function addAndRemove (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        let command = array[i];
        switch (command){
            case "add":
                newArray.push(i+1);
                break;
            case "remove":
                if (array.length <= 0){
                    continue;
                } else {
                    newArray = newArray.slice(0, -1)
                }
                break;
        }
        
    }
    console.log(newArray.join(' '));
}
addAndRemove(['remove', 'add', 'add', 'add', 'remove'])