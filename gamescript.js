
let score=0;


function game(){
for(var i=0 ;i<16; i++ ){
    let t=Math.floor(Math.random()*16)
    for(var j=0; j<16; j++){
        //num_arr.push(j)
        if(j==t){
            let buton=document.getElementsByClassName("container"+j);
            //buton[0].classList.add("null");
            buton[0].classList.add("bg-primary");
            buton[0].classList.add(" ");
            for(var c=0; c<16; c++){
               let ele=document.getElementById("mybutton"+c);
            if(c==j){
                ele.addEventListener("click", function(){
                    score++;
                })

            }
            else{
                ele.addEventListener("click", function(){
                    alert("Game Over Your score is "+score);
                })
            }
           }

}
}
}
}
let int =setInterval(game,2100);

