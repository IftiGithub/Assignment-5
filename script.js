//Heart section
const divs=document.getElementsByClassName("heart")

for(const div of divs){
    div.addEventListener("click",function (){
        const heartCount=parseInt(document.getElementById("heart-count").innerText)
        const finalHeartCount=heartCount+1;
        document.getElementById("heart-count").innerText=finalHeartCount
    })
}

//call section
const calls=document.getElementsByClassName("call")

for(const call of calls){
    call.addEventListener("click",function (){
        const coinCount=parseInt(document.getElementById("coin-count").innerText)
        if(coinCount>=20){
            const finalCoinCount=coinCount-20
            document.getElementById("coin-count").innerText=finalCoinCount
            alert("Calling")
        }
        else{
            alert("Insufficient currency")
        }
    })
}
//copy-count section
const copies=document.getElementsByClassName("copy-btn")

for(const copy of copies){
    copy.addEventListener("click",function(){
        const copyCount=parseInt(document.getElementById("copy-count").innerText)
        const finalCopyCount=copyCount+1
        document.getElementById("copy-count").innerText=finalCopyCount
    })
}