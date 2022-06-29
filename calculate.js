var calci = require('./calci.js');
console.log(calci.add(23,4));
console.log(calci.sub(23,4));
console.log(calci.mul(23,4));
calci.div(12, 0, (err, result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);
})
console.log(calci.pow(23,4));
