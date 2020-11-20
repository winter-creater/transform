var n=1;
var id=setInterval(()=>{
    if(n<=200){
        demo.style.left=n+'px';
        n=n+1;
    }else{
        clearInterval(id)
    }
},1000/60)

setTimeout(()=>{
    demo2.classList.add('end')
},3000)
setTimeout(()=>{
   demo3.remove()
},3000)