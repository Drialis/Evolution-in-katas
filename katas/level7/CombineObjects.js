function combine(...objects) { 
  
  const combinedObject = {};

  objects.forEach(obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (combinedObject.hasOwnProperty(key)) {
          combinedObject[key] += obj[key];
        } else {
          combinedObject[key] = obj[key];
        }
      }
    }
  });

  return combinedObject;
}