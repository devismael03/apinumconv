var converter = require('aznumconv');



exports.getnormal = function(req,res){
  var num = req.params.number;
  if(isNaN(num)){
    res.json({message : "Parameter must be number"})
  }
  else if(num >= 9999999999999999){
    res.json({message: "Not supporting numbers over 9999999999999998"});
  }
  else{
    res.json({message : "Successful",text:converter.convertNormal(num)});
  }


};


exports.getordinal = function(req,res){
  var num = req.params.number;
  if(isNaN(num)){
    res.json({message : "Parameter must be number"})
  }
  else if(num >= 9999999999999999){
    res.json({message: "Not supporting numbers over 9999999999999998"});
  }
  else{
    res.json({message : "Successful",text:converter.convertOrdinal(converter.convertNormal(num))});
  }
};
