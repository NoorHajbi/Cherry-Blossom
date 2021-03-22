//User's Feedback:
        
        /*Prompt function(): returns what user input in a box. otherwise null.
        When? if we want the user to input a value at first.
        */
        /*
        var x= window.prompt("What is Your name?");
        while (x == '') {
           //if (x == '')
                x= window.prompt("please enter your name");        
        }
        
        var y= window.prompt("What Backgound color you want to choose\n1.White\n2.black\n3.purple\n4.none");
        /*confirm() function: if the user clicked (OK) returns true, otherwise false.
        When? if we want to take the user's confirmation about something;
        For Example: as E-commerce websites,
         if you want to delete a product from a cart "Are you Sure?" Message will appear
          and without user's confirmation the product will not be removed.
        */
       /*
        while (y) {
            if (y==1)
                document.body.style.backgroundColor = "white";

            else if (y==2)
            document.body.style.backgroundColor = "black";

            else if (y==3)
            document.body.style.backgroundColor = "purple";

            else if (y==4)
            window.alert("The color does not change..!");

            else{
                window.alert("Please choose a correct number");
                window.prompt("1.White\n2.black\n3.purple\n4.none");
        }
        y = !y;
        }
       
        var imgIndex = new Array(); 
        //insert the URL of images in array  
        imgIndex[0] = "https://64.media.tumblr.com/0a423f1560b6379d350f3c997e73f57e/tumblr_p4vqvrVfca1x72yt1o1_500.png";  
        imgIndex[1] = "https://64.media.tumblr.com/085735941d6685e3e7b9173641226a5e/tumblr_p4vqvrVfca1x72yt1o3_500.png";  
        imgIndex[2] = "https://64.media.tumblr.com/34f1d8b45adb53f92214e4d233c527a8/tumblr_p4vqvrVfca1x72yt1o4_500.jpg";  
        imgIndex[3] = "https://i.pinimg.com/564x/e9/66/79/e96679e74561ad9c3b42738f71d44924.jpg";  

        var result = '';
        var numberOfImg = window.prompt("How many sakura images do you want?\nPrefer choose a number from 1 to 4");
        var imgs = '';
        for (var i =0; i<numberOfImg; i++ ){
            if (i < 4){
            imgs = '<img src="'+imgIndex[i]+'" width="250" height="300" />';}
            result+= imgs;  
        }
        document.write(result);
        var z = confirm("Welcome "+ x + ", Hope you liked it!");
        console.log("username prompt value = "+x);
        console.log("confirm value = "+z);
        //Background Color

        //Functions helps reuse code; Just while define it once, use it any time.