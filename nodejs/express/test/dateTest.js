let nowDate = (new Date()).getTime();


console.log(nowDate);
let i = 0;
while(i<100){
    
    i++;
}

let laterDate = (new Date()).getTime();

console.log(laterDate);

console.log("time gap ::: " + (laterDate - nowDate));