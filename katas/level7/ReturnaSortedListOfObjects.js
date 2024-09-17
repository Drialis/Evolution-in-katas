function sortList (sortBy, list) {
  
  if (sortBy == "a"){
  list.sort((a,b) => b.a - a.a )
  } 
  
  if (sortBy == "b"){
  list.sort((a,b) => b.b - a.b )
  } 
  
  return list
}