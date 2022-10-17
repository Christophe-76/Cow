const userInfo = require("./information")

var  cowsay  =  require ( "cowsay" ) ;

console.log(cowsay.say({
    text : `${userInfo.name} ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));