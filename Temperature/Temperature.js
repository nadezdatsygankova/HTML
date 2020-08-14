


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

function appearReset()
{
  var parent=document.querySelector('#section');
  var newBtn = document.createElement('button');
    newBtn.innerText = 'Reset';
    parent.appendChild(newBtn);
    newBtn.id="reset";
    newBtn.setAttribute('onclick',"reset()")
}

function buttonAverage()
{
 
  document.getElementById('covert').disabled=true;
  document.getElementById('average').disabled=true;
  appearReset();

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




  
function fonload()
{
  document.getElementById('f').focus();
}


var floatArrayF=new Array();
var i=0;
var floatArrayC=new Array();
var count =9;
//floatArray.length;


function fLoadArray()
	{
    var i=0;
    for(i=0;i<10;i++)
    {
      var f=document.getElementById('f').value;
      console.log(f);
      floatArrayF.push(parseInt(f));
      floatArrayC.push(parseInt(c.value));
      

    }

	
  }
  
  
  function convert() {
    
    var x;
     if(count ==0)
     {
      average();
      return;

     }
     
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value =x.toFixed(2);
      console.log(x);
      
        fLoadArray();
        display();
        document.getElementById("f").value = "";
        document.getElementById("average").disabled=false;
     count --;
   
   }


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

      textArea= textArea +"======================================"+"\n"+ "        "+averageF.toFixed(2)+"                 "+averageC.toFixed(2)+"\n";
    console.log(textArea);
    document.getElementById('textar').value=textArea;
    console.log(textArea);
    buttonAverage();
   
  }
  

  function reset()
  {
    document.getElementById('textar').value="";
    document.getElementById('f').value="";
    document.getElementById('c').value="";

    var parent=document.querySelector('#section');
    var elem=document.querySelector('#reset');
    parent.removeChild(elem);
  }