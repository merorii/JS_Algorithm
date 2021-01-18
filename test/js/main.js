document.addEventListener('DOMContentLoaded', function(){
    console.log(solution(120));
});

function solution(n) {
    var arr=Array(n+1).fill(true).fill(false, 0, 2);
    
    for (var i=2; i<=n ;i++){
        if(arr[i]){
        for(var j=i*i; j<=n; j+=i){
            arr[j] = false;
        }
        }
    }
    return arr.filter((ele)=>{return ele}).length;
}