function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = x.toFixed(2);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value =x.toFixed(2);
    }
  }
/*
  function validate(evt)
  {
      evt.value=evt.value.replace(/[^0-9]/g,"");
  }

  */

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