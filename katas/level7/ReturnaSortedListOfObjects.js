//Return a sorted list of objects

//You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).


function sortList (sortBy, list) {
  
  if (sortBy == "a"){
  list.sort((a,b) => b.a - a.a )
  } 
  
  if (sortBy == "b"){
  list.sort((a,b) => b.b - a.b )
  } 
  
  return list
}