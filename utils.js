var utils = { 
  toNum: function(code){
    return code.toUpperCase().split('').map(function(i){ return i.charCodeAt()- 65 });
  },
  
  toStr: function(code){
    return String.fromCharCode.apply(this, code.map(function(i){ return i + 65 }));
  }
  
  useless: function(a){
    console.log(a) //fixme
  }
}

module.exports = utils;
