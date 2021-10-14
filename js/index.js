const slider = document.querySelector("#myRange");
const output = document.querySelector(".dollarNumber");
const pageview = document.querySelector("#pageview");
const toggler = document.querySelector(".box-toggler");
var dollarNumberSD = document.querySelector("#dollarNumberSD");


console.log(output);
console.log(dollarNumberSD);
output.innerHTML = slider.value;
dollarNumberSD.innerHTML = slider.value;



slider.addEventListener('input', function(){
    output.innerHTML = slider.value;
    dollarNumberSD.innerHTML = slider.value;
    var number = Number(slider.value);
    console.log(number);
  
    // toggler.classList.remove('active');
    if(toggler.classList.contains('active')){
        console.log("toogle is active");
        output.innerHTML = slider.value - 2;
        dollarNumberSD.innerHTML = slider.value - 2;
    }
 
    if(number == 8){
        console.log("This is 8")
        pageview.innerHTML = "10K";
       
    }
    else if(number == 12){
        pageview.innerHTML = "50K";
       
    }
    else if(number == 16){
        pageview.innerHTML = "100K";
       
    }
    else if(number == 20){
        pageview.innerHTML = "250K";
       
    }
    else if(number == 24){
        pageview.innerHTML = "500K";
       
    }
    else if(number == 28){
        pageview.innerHTML = "750K";
       
    }
    else if(number == 32){
        pageview.innerHTML = "850K";
    
    }
    else if(number == 36){
        pageview.innerHTML = "1M";
    
    }
   
});






toggler .addEventListener('click', () => {
    toggler.classList.toggle('active');
    if(toggler.classList.contains('active')){
       
        console.log(slider.value);
        output.textContent = slider.value - 2;
        dollarNumberSD.innerHTML = slider.value - 2;

    }else{
        document.body.classList.remove('active');
        if(slider.value == 8){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 12){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 16){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 20){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 24){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 32){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
        else if(slider.value == 36){
            output.innerHTML = slider.value;
            dollarNumberSD.innerHTML = slider.value;
        }
    }
});

