function serializeString(input) {
    let toSerialize = input[0];
    let series = {};
    
    for (let i = 0; i < toSerialize.length; i++){
      if (!Object.keys(series).includes(toSerialize[i])){
        series[toSerialize[i]] = i;
      } else {
        series[toSerialize[i]] += '/'+i;
      }
    }
    for (let [key, value] of Object.entries(series)){
      console.log(`${key}:${value}`)
    }
    
  }
  serializeString(["abcbaba"])