let san = +prompt("San engiz")
 
let min = 0
let max = 0
let i = 1;

while(i <= san){
    if(i % 5 == 0){
        if(min ==0){
            min = i;
        }
        max = i;
    }
    i++;
}


if(min == 0){
    console.log("1 men" + san + "arasynda 5 ke bolinetin san joq.");
}else{
    console.log("En kishi san:" + min );
    console.log("En ulken san:" + max );

}