function chessBoard(num){
    console.log('<div class="chessboard">');
    let counter = 0;
    for (i = 1; i <= num; i++){
        console.log('  <div>');
        for(j = 1; j <= num; j++){
            counter++;
            if (counter % 2 === 0){
                console.log('    <span class="white"></span>');
            } else {
                console.log('    <span class="black"></span>');
            }
        }
        console.log('  </div>');
        if (num % 2 === 0){
            counter++;
        }
    }
    console.log('</div>');
}
chessBoard(4)