
//fucus in onload  
function fonload()
{
  document.getElementById('f').focus();
  var input = document.getElementById('f');
console.log(input);
input.addEventListener("keyup", function(event)
{
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("covert").click();
  }
});
}

//Valid values ranges from -9999 to 9999
function f(x) {
  var firstValue = x.dataset.value || "";
  console.log(firstValue);
  var nextValue = x.value;
  console.log(nextValue);
  var num = Number(nextValue);
  console.log(num);
  
  if (nextValue == '-' || (!isNaN(num) && num <= 9999 && num >= -9999 && num%1==0)) 
  {
   
  x.dataset.value= parseInt(nextValue);
  buttonConvert();
  return true;
}
else {
    x.value = firstValue;
    return false;
  }
  
}


//disable function
function buttonConvert()
{
  var far = document.getElementById('f').value;
  console.log(far);
if (far)
{
  document.getElementById('covert').disabled=false;
  document.getElementById('average').disabled=true;
}

}

//display function in textarea
function display()
{
  
    var far = document.getElementById('f').value;
    console.log(far);
    var cel = document.getElementById('c').value;
    console.log(cel);
    var textArea=document.getElementById('textar').value;
    console.log(textArea);
    textArea= textArea+"\n"+"                  " +far+"                  "+cel+"\n";
    console.log(textArea);
    document.getElementById('textar').value=textArea;
    document.getElementById('covert').disabled=true;

}


var floatArrayF=new Array(); //array for number fahrenheit
var i=0;
var floatArrayC=new Array();//array for number celsius
var count =10;


//array push
function fLoadArray()
	{
    var i=0;
    for(i=0;i<10;i++)
    {
      var f=document.getElementById('f').value;
      console.log(f);
      floatArrayF.push(parseFloat(f));
      floatArrayC.push(parseFloat(c.value));
      

    }

	
  }
  
  //convert F->C
  function convert() {
    
    var x;
     
     
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value =x.toFixed(2);
      console.log(x);
      
        fLoadArray();
        display();
        document.getElementById("f").value = "";
        document.getElementById("average").disabled=false;
        
     count --;
     if(count ==0)
     {
      average();
      return;

     }
   
   }


   
//button for average
function buttonAverage()
{
 
  document.getElementById('covert').disabled=true;
  document.getElementById('average').disabled=true;
  appearReset();
  document.getElementById('f').disabled=true;

}

  //calculate average
   function average()
	{
		var textArea=document.getElementById('textar').value;
    var sumF=0;
    var sumC=0;
    var averageF=0;
    var averageC=0;
    for (var k = 0; k < floatArrayF.length; k++)
    {
            sumF=sumF+floatArrayF[k];
            sumC=sumC+floatArrayC[k];
    }
          averageF=sumF/floatArrayF.length;
          averageC=sumC/floatArrayC.length;

      textArea= textArea +"================================================"+"\n"+ "                "+averageF.toFixed(2)+"                 "+averageC.toFixed(2)+"\n";
    console.log(textArea);
    document.getElementById('textar').value=textArea;
    console.log(textArea);
    buttonAverage();
   
  }




//button reset appears
function appearReset()
{
  var parent=document.querySelector('#section');
  var newBtn = document.createElement('button');
    newBtn.innerText = 'Reset';
    parent.appendChild(newBtn);
    newBtn.id="reset";
    newBtn.setAttribute('onclick',"reset()")
}


  
//reset function
  function reset()
  {
    document.getElementById('textar').value="";
    document.getElementById('f').value="";
    document.getElementById('c').value="";

    var parent=document.querySelector('#section');
    var elem=document.querySelector('#reset');
    parent.removeChild(elem);
    document.getElementById('f').disabled=false;
    document.getElementById('f').focus();
  }


