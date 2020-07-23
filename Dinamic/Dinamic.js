/*const images = [
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
*/

var name=["img/tiger.jpg", "img/bear.jpg"];
var description=["Tiger.","Polar bear"]
var intArray=new Array();
var i=0;





/*
function fonload()
{
   var expandImg= document.getElementById("lblResult").src;
   var firstImg = document.getElementById("first").src;
   expandImg=firstImg;
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
    function myFunction(images) {
        var expandImg = document.getElementById("lblResult");
      
       /* expandImg.src = images.src;*/

        expandImg.src = name[parseInt(images)];
        /*
        expandImg.innerHTML = name[parseInt(images.name)];
        
        /*expandImg.parentElement.style.display = "block";*/
        /*expandImg.style.cssText=" width: 400; height: 700 "*/
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