
    let ans = document.getElementById("Answer");

    let sci = document.getElementById("scissor");
    let roc = document.getElementById("rock");
    let pap = document.getElementById("paper");
   
    sci.addEventListener("click",scissor,true);
    roc.addEventListener("click",rock,true);
    pap.addEventListener("click",paper,true);

    // function triggerBtn()
    // {
    //     document.getElementById("scissor").click()
    // }
    function scissor() {
        const input=Math.floor(Math.random()*3+1)
        console.log(input)
        if(input==2){
            ans.innerHTML = "You won the match"
        }
        else if(input==3){
            ans.innerHTML = "You lose the match"
        }
        else{
            ans.innerHTML = "The match tie";
        }
        
    }
    function rock() {
        const input=Math.floor(Math.random()*3+1)
        console.log(input)
        if(input==1){
            ans.innerHTML = "You won the match"
        }
        else if(input==3){
            ans.innerHTML = "You lose the match"
        }
        else{
            ans.innerHTML = "The match tie"
        }
    }
    function paper() {
        const input=Math.floor(Math.random()*3+1)
        console.log(input)
        if(input==2){
            ans.innerHTML = "You won the match"
        }
        else if(input==1){
            ans.innerHTML = "You lose the match"
        }
        else{
            ans.innerHTML = "The match tie"
        }
    }
    