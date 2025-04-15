let a = 10
let i = 0 ;
while ( i <=a ){
 console.log(i);
 i++;
}
let marks = 20;
let result = new Promise ((resolve,reject) =>{
if (marks >=40 ){
    resolve("pass")
}
else {
    reject("fail")
}
});
result
.then((message) =>{
console.log(message);
})
.catch((error) =>{
    console.log(error);
    })