const images = [
    {
        name: "img/tiger.jpg",
        description: "Tiger.",
        dimensions: {
            width: 442,
		height: 640
        }
    },
    {
        name: "img/bear.jpg",
        description: "Polar bear",
        dimensions: {
            width: 425,
		height: 600
        }
    },
    {
        name: "img/camel.jpg",
        description: "Camel.",
        dimensions: {
            width: 360,
		height: 640
        }
    },

    {
        name: "img/capybara.jpg",
        description: "Capybara.",
        dimensions: {
            width: 480,
		height: 640
        }

    },
    {
        name: "img/dear.jpg",
        description: "Dear.",
        dimensions: {
            width: 360,
		height: 640
        }

    },
    {
        name: "img/donkey.jpg",
        description: "Donkey.",
        dimensions: {
            width: 360,
		height: 640
        }

    },
    {
        name: "img/monkey1.jpg",
        description: "Monkey.",
        dimensions: {
            width: 365,
		height: 550
        }

    },
    {
        name: "img/monkey2.jpg",
        description: "Serious monkey.",
        dimensions: {
            width: 425,
		height: 640
        }

    },
    {
        name: "img/ostrich.jpg",
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
  textCoverImg.focus()
  
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
            expandImgO.value=num;
          //  console.log(expandImgO.value);

    };
    



    function getElement(id)
      {
        var el=document.getElementById(id);
        return el;
      }



      //стрелки
function key(event)
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


};/*
      document.body.addEventListener( "keydown", function( e ) {
        var code = e.keyCode;
        var evt = new MouseEvent( "click" );  // нажатие мыши
                 
       
                    
    }, false); */  


    function fOnkeyDown(evt)
    {
   
		var charCode = (evt.which) ? evt.which : evt.keyCode;
	
		return charCode;
    }	



/*
    function nextImage(n,index){
        myFunction(index+n);
    }
function currentImg(n)
{
    myFunction(index=n);
}
    function lastImg()
    {
        goToImg(currentIm-1);
    }

    function goToImg(i)
    {
        var len=Number(images.length);
        currentIm=((i+len)%len);
        myFunction(currentIm);
    }