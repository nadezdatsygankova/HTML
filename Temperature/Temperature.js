function convert(degree) {
    
   var x;
    
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value =x.toFixed(2);

      display();
      document.getElementById("f").value = "";

    
      
    
    
    
  }


function display()
{

    
    var far = document.getElementById('f').value;
    console.log(far);
    var cel = document.getElementById('c').value;
    console.log(cel);
    var textArea=document.getElementById('textar').value;
    console.log(textArea);

    textArea= textArea + "        "+far+"                 "+cel+"\n";
    console.log(textArea);
    document.getElementById('textar').value=textArea;
    


}

function buttonConvert()
{
  var far = document.getElementById('f').value;
if (far)
{
  document.getElementById('covert').disabled=false;
}


}


function f(x) {
  var firstValue = x.dataset.value || "";
  var nextValue = x.value;
  var num = Number(nextValue);
  if (nextValue == '-' || (!isNaN(num) && num <= 9999 && num >= -9999)) 
  {
    x.dataset.value= nextValue;
    return true;
  } else {
    x.value = firstValue;
    return false;
  }
}