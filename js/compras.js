var cubatas=0
var precio=8
var show =0
function mas() {
show =show + cubatas;
    document.getElementById("demo").innerHTML = show;
    document.getElementById("total").innerHTML = show*precio;
  }
function menos() {
    if (cubatas >=0){
        show = show - cubatas
        document.getElementById("demo").innerHTML = show ;
        document.getElementById("total").innerHTML = show*precio;
    }
    
  }