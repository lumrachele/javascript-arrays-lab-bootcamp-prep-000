function kittens () {
  return kittens
  
}

function destructivelyAppendKitten (name) {
  return kittens.push(`${name}`)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(`${name}`)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
  }
  
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var appendKitten = kittens.splice(0, 0, `${name}`)
  return appendKitten
}

//function prependKitten(name){
  
//}

//function removeLastKitten(){
  
//}

//function removeFirstKitten(){
  
//}