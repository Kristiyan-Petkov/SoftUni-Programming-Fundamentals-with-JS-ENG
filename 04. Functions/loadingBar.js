function loadingBar(loading) {
    if (loading === 100){
        console.log(`100% Complete!\n[%%%%%%%%%%]`);
        return;
    }
    let loadingsDev = `${loading}% [`;
    for (let i = 1; i <= loading / 10; i++) {
        loadingsDev += `%`;
    }
    let empty = 10 - (loading / 10);
    for (let j = empty; j > 0; j--){
        if (j === 1){
            loadingsDev += `.]`;
        } else if (j > 1){
            loadingsDev += `.`;
        }
    }
    console.log(`${loadingsDev}\nStill loading...`);
}
loadingBar(30)