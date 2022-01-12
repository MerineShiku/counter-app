let count = 0

const countEl = document.getElementById("count_el")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){

        const styles = e.currentTarget.classList
        if (styles.contains("increase-btn")){
            count ++

        }else if (styles.contains("decrease-btn")){
            count --

        }else {
            count = 0
    } if (count >0 ){
            countEl.style.color = "green"
     }else if (count <0 ) {
          countEl.style.color = "red"

     }else {
         countEl.style.color = "black"
     }
        countEl.textContent = count
    })
})







