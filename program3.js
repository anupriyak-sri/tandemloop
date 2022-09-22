function series(x){
    let arr=[1]
    if(x%2==0){
        x-=1
    }
    for(let i=1;i<x;i++){
        arr.push(arr[arr.length-1]+2) 
    }
    str=''
    for(let j=0;j<arr.length;j++){
        str+=arr[j]
        if(j<arr.length-1){
          str+=","
        }
    }
    console.log(str);
}

series(6)