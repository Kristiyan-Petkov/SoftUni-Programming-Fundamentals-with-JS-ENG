function test(){
        var totalNumberofRows = 5;
        var arr = new Array();
        for (var i = 1; i <= totalNumberofRows; i++) {
          for (var j = 1; j <= i; j++) {
            arr.push(j);
            console.log(j);
          }
          console.log("\n");
        }
}