function isPalindrome (text) {
  
    if(typeof text !== 'string') {
      return false;
    }
    
    if(text.toUpperCase() === text.split("").reverse().join("").toUpperCase()) {
      return true;
    }
    
    return false
};

