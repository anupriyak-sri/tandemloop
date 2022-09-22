function series(a){
    let arr=[1]
    
    for(let i=1;i<a;i++){
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

series(9)