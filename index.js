var text = ['apple','banana','kiwi','cherry']

for(let i=1;i<=10;i++){
    console.log(i)
}
console.log("");
for(let i=0;i<text.length;i++){
    console.log(text[i])
    console.log(i)
}
console.log("");
for(let i in text){
    console.log(i);
}
console.log("");
for(let i of text){
    console.log(i);
}
console.log("");
for(let i=0;i<text.length;i++){
    console.log(text[i].replaceAll("a",'c'));
}
console.log("");
//cutduse ikiye bol tekdise ustune iki gel
var arr=[1,9,2,8,3,7,65,7,32]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]/2);
    }
    else{
        console.log(arr[i]+2);
    }
}
console.log("");
