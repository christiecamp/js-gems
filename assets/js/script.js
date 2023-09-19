// variables up top
const start_btn = document.querySelector (".start_btn button");
const details_box = document.querySelector ("details_box");

const next_btn = details_box.querySelector (".next_btn button")




// when start button is clicked - it shows details box
start_btn.onclick = ()=>{
    details_box.ClassList.add ("activeInfo");
}

// when next button is clicked - it shows quiz box, calls questions function, starts timer function

next_btn.onclick = ()=>{
    details_box.ClassList.remove ("activeInfo"); //hides details box
    
}
