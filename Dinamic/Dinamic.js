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
      
 
      var nameImages=images[num].name;
    
     expandImg.src= nameImages;
     
     //  images.wight = expandImg.style.cssText=" height: 700px; margin: 0 auto; width: 400px;";

     // var newId= getElement(idN);

    //  expandImg.style.cssText="width: 400px; height: 600px; object-fit:cover ";
     
 
      var textCon=document.getElementById("text");
    


textCon.innerText=images[num].description +"\n"+ " width: "  + images[num].dimensions.width + "\n"+ " height: " +images[num].dimensions.height;




//style.getPropertyValue("width"));

        var weghtImg=Number(images[num].dimensions.width); //442
       // console.log(weghtImg);
       var heghtImg=Number(images[num].dimensions.heght); 


       //var widthBox=getComputedStyle(document.expandImg);
       //alert(widthBox.width);
       
       var widthBox=400;
       var heightBox=600;
       
       var resultWeght=weghtImg/widthBox;

       var widthN=weghtImg/resultWeght; //finish result for img -400


       var resultHeght=heghtImg/heightBox;
       var heightN=heghtImg/resultHeght; 

       expandImg.style.height=heightN;
       expandImg.style.width=widthN;
       console.log(expandImg.style.cssText);



    };
    

/*
//функция для изменения изображения
function fCSSa(images)
	{
       var findCon= document.getElementById("lblResult");
      
        findCon.src = images.src;
        findCon.style.cssText="width: 400; height: 700";
        //document.getElementById("camel").style.cssText="filter:brightness(200%)";
    }*/
    

    function getElement(id)
      {
        var el=document.getElementById(id);
        return el;
      }



      //стрелки
function key(event)
{
    var code=event.keyCode;
    console.log(code);

    var expandImg = document.getElementById("textCoverImg");
    var i =Number(expandImg.getAttribute('value'));
    
    if( code == 38 ) { //  up
        if(i<=length.images && i>0)
        {
            myFunction((i-1));
        }
        else if (i<=0)
        {
            myFunction(length.imges);
        }
        
    }
    if( code == 40 ) { //  down
        if(i<=length.images && i>0)
        {
            myFunction((i+1));
        }
        else if(i>=length.images)
        {
            myFunction(0);
        }
    }


};/*
      document.body.addEventListener( "keydown", function( e ) {
        var code = e.keyCode;
        var evt = new MouseEvent( "click" );  // нажатие мыши
                 
       
                    
    }, false); */  





