function numObj(s){
  
    let newArray = [];

    s.forEach(elm => {
      
        let obj = {}
        
        obj[elm.toString()] = String.fromCharCode(elm)
        newArray.push(obj)
    });

    return newArray
  
}