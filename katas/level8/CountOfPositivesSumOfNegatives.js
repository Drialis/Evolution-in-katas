function countPositivesSumNegatives(input) {

  let positive = 0
  let negative = 0
  
  if (input.length === 0 || input === null) {
    return []
  }
  
  for (let i = 0; i < input.length; i++){
    if (input[i] > 0){
      positive++
    }else if (input[i] < 0 ){
      negative += input[i]
    }
  }
  
  let counter = [positive, negative]
  
  return counter
}