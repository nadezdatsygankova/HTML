const images = [
    {
        name: "img/1.jpg",
        description: "Tiger.",
        dimensions: {
            width: 442,
		height: 640
        }
    },
    {
        name: "img/2.jpg",
        description: "Polar bear",
        dimensions: {
            width: 425,
		height: 600
        }
    },
    {
        name: "img/3.jpg",
        description: "Camel.",
        dimensions: {
            width: 360,
		height: 640
        }
    },

    {
        name: "img/4.jpg",
        description: "Capybara.",
        dimensions: {
            width: 480,
		height: 640
        }

    },
    {
        name: "img/5.jpg",
        description: "Dear.",
        dimensions: {
            width: 360,
		height: 640
        }

    },
    {
        name: "img/6.jpg",
        description: "Donkey.",
        dimensions: {
            width: 360,
		height: 640
        }

    },
    {
        name: "img/7.jpg",
        description: "Monkey.",
        dimensions: {
            width: 365,
		height: 550
        }

    },
    {
        name: "img/8.jpg",
        description: "Serious monkey.",
        dimensions: {
            width: 425,
		height: 640
        }

    },
    {
        name: "img/9.jpg",
        description: "Ostrich.",
        dimensions: {
            width: 480,
		height: 640
        }

    },



];
//open src images
//var srcImg=images[0].name;

function fonload()
{
  myFunction(0);
  
};


// picture above image
/*
(images[0].description)//desription
(images[1].description)

/*
function fnOnload () {
=${document.getElementById("")}
*/


/*

function fInitialize()
    {
		lblResult.innerHTML = "";
    };
*/

    function myFunction(num) {
        var expandImg = document.getElementById("lblResult");
      
        //variable for value
 
      var nameImages=images[num].name;
    
     expandImg.src= nameImages; //src of image in the container
     
    
     
 //display text 
      var textCon=document.getElementById("text");
    
      textCon.innerText=images[num].description +"\n"+ " width: "  + images[num].dimensions.width + "\n"+ " height: " +images[num].dimensions.height;






        var weghtImg=Number(images[num].dimensions.width); //width images original
       // console.log(weghtImg);
       var heghtImg=Number(images[num].dimensions.height); 
      // console.log(heghtImg);

     


       var widthBox=expandImg.width;
       var heightBox=expandImg.height;
       
       var resultWeght=weghtImg/widthBox;

       var widthN=weghtImg/resultWeght; //finish result for img -400


       var resultHeght=heghtImg/heightBox;
       var heightN=heghtImg/resultHeght; 

       expandImg.height=heightN;
       expandImg.width=widthN;
       //console.log(expandImg.height);
       //console.log(expandImg.width);


       //position
       var expandImgO = document.getElementById("textCoverImg");
         //   expandImgO.value=num;
          //  console.log(expandImgO.value);


         // var currentImageNuber=expandImg.substring(expandImg.lastIndexOf('/') +1,expandImg.lastIndexOf('/')+2);
          
       //   console.log(currentImageNuber);

    };
    



    function getElement(id)
      {
        var el=document.getElementById(id);
        return el;
      }



      //стрелки
/*function key(event)
{
    
    
    evt = (event) ? event : window.event;							//	window.event is MS IE specific
    var code = (event.which) ? event.which : event.keyCode;
    console.log(code);



    var expandImgO = document.getElementById("textCoverImg");
    var i =Number(expandImgO.getAttribute('value'));
    console.log(i);

    var len=Number(images.length);
    console.log(len);
    
    if( code == 38 ) { //  up
        if((i<=len) && (i>0))
        {
            console.log(i);
            myFunction((i-1));
        }
        else if (i<=0)
        {
            myFunction(len);
        }
        
    }
    if( code == 40 ) { //  down
        if(i<=Number(len) && i>0)
        {
            myFunction((i+1));
        }
        else if(i>=Number(len))
        {
            myFunction(0);
        }
    }


};
*//*
      document.body.addEventListener( "keydown", function( e ) {
        var code = e.keyCode;
        var evt = new MouseEvent( "click" );  // нажатие мыши
                 
       
                    
    }, false); */  


 /*   function fOnkeyDown(evt)
    {
   
		var charCode = (evt.which) ? evt.which : evt.keyCode;
	
		return charCode;
    }	



*/


    document.onkeydown=function(event){
        console.log(event);



        if (event.keyCode ==40){
            console.log('Enter ArrowDown ');
                   changeImageNext();
        }

        if(event.keyCode ==38)
        {
            console.log('Enter ArrowUp ');
            changeImageBack();
        }
    }



    function changeImageNext()
    {
        var resultBox= document.getElementById("lblResult").getAttribute("src");
       // console.log(resultBox);
      //  var currentImageNumber=resultBox.substring(resultBox.lastIndexOf('/')+1,resultBox.lastIndexOf('/')+2 );
      var currentImageNumber=parseInt(resultBox.match(/\d+/));
      //console.log(currentImageNumber);
      var numCurr=Number(currentImageNumber); //convert to number
       if(numCurr < (images.length-1))
       {
        myFunction(Number(numCurr+1));
     //   resultBox.setAttribute("src","/img" +(numCurr+1)+".jpg");
       }
        else if(numCurr=(images.length-1))
        {
            myFunction(0);
            //  resultBox.setAttribute("src","/img" +1+".jpg");
        }
    };


    function changeImageBack()
    {
        var resultBox= document.getElementById("lblResult").getAttribute("src");
        console.log(resultBox);
      //  var currentImageNumber=resultBox.substring(resultBox.lastIndexOf('/')+1,resultBox.lastIndexOf('/')+2 );
      var currentImageNumber=parseInt(resultBox.match(/\d+/));
      console.log(currentImageNumber);
      var numCurr=Number(currentImageNumber); //convert to number
          //   myFunction(numCurr-2);
      console.log(numCurr);

      var back=Number(numCurr-2);
      console.log(back);

      var firstBack=Number((images.length-1));
      console.log(firstBack);

       if(numCurr!=1)
       {
              myFunction(back);
      //  myFunction(Number(numCurr-1));
     //   resultBox.setAttribute("src","/img" +(numCurr+1)+".jpg");
       }
        else if(numCurr==1)
        {

            myFunction(firstBack);
            //  resultBox.setAttribute("src","/img" +1+".jpg");
        }
    };
        
/*
    function changeImageBack()
    {
        var resultBox= document.getElementById("lblResult").getAttribute("src");
        console.log(resultBox);
       // var currentImageNumber=resultBox.substring(resultBox.lastIndexOf('/')+1,resultBox.lastIndexOf('/')+2 );
       var currentImageNumber=parseInt(resultBox.match(/\d+/));
       console.log(currentImageNumber);
       var numCurr=Number(currentImageNumber); //convert to number
       console.log(images.length);

     //  if((numCurr <= images.length) && numCurr>1)
     //  {

        myFunction(Number(currentImageNumber-1));
        //myFunction(Number(numCurr-1));
      //  console.log(Number(numCurr-1));
       // resultBox.setAttribute("src","/img" +(numCurr-1)+".jpg");
     //  }
      //  else if(numCurr=1)
     //   {
     //       myFunction((Number(images.length)-1));
            // resultBox.setAttribute("src","/img" +images.length+".jpg");
     //   }
    };
/*
    function myFunction(num) {
        var expandImg=document.getElementById("lblResult");
        console.log(expandImg);
        var expandImgSrc = document.getElementById("lblResult").getAttribute("src");
      
        //variable for value
 
      var nameImages=images[num].name;
      expandImgSrc= nameImages; //src of image in the container
//text
var textCon=document.getElementById("text");
    
textCon.innerText=images[num].description +"\n"+ " width: "  + images[num].dimensions.width + "\n"+ " height: " +images[num].dimensions.height;

var weghtImg=Number(images[num].dimensions.width); //width images original
// console.log(weghtImg);
var heghtImg=Number(images[num].dimensions.height); //height images original
// console.log(heghtImg);




var widthBox=expandImg.width;  //box width
var heightBox=expandImg.height;//box heght

var resultWeght=weghtImg/widthBox;

var widthN=weghtImg/resultWeght; //finish result for img -400


var resultHeght=heghtImg/heightBox;
var heightN=heghtImg/resultHeght; 

expandImg.height=heightN;
expandImg.width=widthN;

    };
//console.log(expandImg.height);
//console.log(expandImg.width);

//






/*
        
        var imageSrcTiger=document.getElementById('tiger').getAttribute("src");
        console.log(imageSrcTiger);

           



        var currentImageNumber=imageSrcTiger.substring(imageSrcTiger.lastIndexOf('/')+1,imageSrcTiger.lastIndexOf('/')+2 );
        console.log(currentImageNumber);
       var resultBox= document.getElementById("lblResult");
       resultBox.setAttribute("src", "/Images" +(Number(currentImageNumber)+1)+".jpg");


    }*/