
function isTouching(receiving1,receiving2){
    if (receiving1.x - receiving2.x < receiving2.width/2 + receiving1.width/2
      && receiving2.x - receiving1.x < receiving2.width/2 + receiving1.width/2
      && receiving1.y - receiving2.y < receiving2.height/2 + receiving1.height/2
      && receiving2.y - receiving1.y < receiving2.height/2 + receiving1.height/2) {
   return true
  }
  
  else {
  
    return false
  }
  }