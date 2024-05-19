let slider = document.querySelector('#myRange');
let output = document.querySelector(".slide-value");
let draw_zone = document.querySelector(".draw-zone-container");
let button_reset = document.querySelector("#button-reset");
let flex_init = 100 / 16 + '%';
for (let index = 0; index < Math.pow(16,2); index++) {
    let init_div = document.createElement("div");
    init_div.classList.add("draw-div");
    init_div.style.flexBasis = flex_init ;
    draw_zone.appendChild(init_div);
    
}
slider.oninput = function (){

        output.innerHTML = this.value + " x " + this.value;
        draw_zone.innerHTML = '';
        let flex = 100 / this.value + '%';
        for (var i=0; i< Math.pow(this.value,2) ;i++){
            let new_div = document.createElement("div");
            new_div.classList.add("draw-div");
            new_div.style.flexBasis = flex ;
            draw_zone.appendChild(new_div);
        }
}

draw_zone.addEventListener("mouseover",function(e){
    if (e.target.classList.contains('draw-div')) {
        e.target.classList.add('black');
    }
})
button_reset.addEventListener("click",function(){
    Array.from(draw_zone.children).forEach((child) => {
        child.classList.remove('black');
    })
});






