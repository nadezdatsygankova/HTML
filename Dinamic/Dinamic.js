const images = [
    {
        name: "img/1.jpg",
        description: "Tiger.",
        dimensions: {
            width: 414,
		height: 600
        }
    },
    {
        name: "img/2.jpg",
        description: "Polar bear",
        dimensions: {
            width: 425,
		height: 640
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


function fonload()
{
  myFunction(0);
  
};



    function myFunction(num) {
        var expandImg = document.getElementById("lblResult");
        var contImg=document.getElementById("textCoverImg");
        console.log(contImg);


        //variable for value
 
      var nameImages=images[num].name;
    
     expandImg.src= nameImages; //src of image in the container
     expandImg.alt=images[num].description;
    
     
 //display text 
      var textCon=document.getElementById("text");
    
      textCon.innerText=images[num].description +"\n"+ " width: "  + images[num].dimensions.width + "\n"+ " height: " +images[num].dimensions.height;






        var weghtImg=Number(images[num].dimensions.width); //width images original
        console.log(weghtImg);
       var heghtImg=Number(images[num].dimensions.height); 
         console.log(heghtImg);

     
         var widthBoxS=contImg.style.width;
         var widthBox=parseInt(widthBoxS.match(/\d+/));
       
       console.log(widthBox);

       var heightBoxS=contImg.style.height;
       var heightBox=parseInt(heightBoxS.match(/\d+/));
       console.log(heightBox);

      var kof=Number(heghtImg/weghtImg);//koff 
       console.log(kof);

       if((heghtImg<heightBox)&&(weghtImg>widthBox))
       {
        
        weghtImg=(weghtImg/kof);
        console.log(weghtImg);

       expandImg.style.height="auto";
        expandImg.style.width=weghtImg+"px";
       }
       else if(heghtImg>heightBox)
       {
        heghtImg=heightBox;
        console.log(heghtImg);

        expandImg.style.height=heghtImg+"px";
        expandImg.style.width="auto";
       }
      else {
       

        expandImg.style.height=heghtImg+"px";
        expandImg.style.width=weghtImg+"px";
       }


       console.log( expandImg);
       
        
    };
    





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
    
      var currentImageNumber=parseInt(resultBox.match(/\d+/));
      //console.log(currentImageNumber);
      var numCurr=Number(currentImageNumber); //convert to number
       if(numCurr < (images.length-1))
       {
        myFunction(Number(numCurr+1));
  
       }
        else if(numCurr=(images.length-1))
        {
            myFunction(0);
  
        }
    };


    function changeImageBack()
    {
        var resultBox= document.getElementById("lblResult").getAttribute("src");
        console.log(resultBox);
 
      var currentImageNumber=parseInt(resultBox.match(/\d+/));
      console.log(currentImageNumber);
      var numCurr=Number(currentImageNumber); //convert to number

    //  console.log(numCurr);

      var back=Number(numCurr-2);
   //   console.log(back);

      var firstBack=Number((images.length-1));
    //  console.log(firstBack);

       if(numCurr!=1)
       {
              myFunction(back);
 
       }
        else if(numCurr==1)
        {

            myFunction(firstBack);

        }
    };
