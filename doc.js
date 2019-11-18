
/*---email__copy_function---*/

function myFunction() {
		var copyText = document.getElementById("myInput");
		copyText.select();
		document.execCommand("copy");
		alert("Copied the text: " + copyText.value);
        console.log("Hello world")
}
   

/*---picture change_function----*/
    
document.querySelector('.my_pic').onmouseover = function(){hover1()};
  function hover1(){
      document.querySelector('.my_image1').style.display = 'none';
      document.querySelector('.my_image2').style.display = 'block';
      
  }
   
document.querySelector('.my_pic').onmouseout = function(){hover2()};
  function hover2(){
      document.querySelector('.my_image1').style.display = 'block';
      document.querySelector('.my_image2').style.display = 'none';
      
  }
    


/*===mobile _bar menu function===*/
    
    function mob_menu(){
        var icon = document.querySelector('.navi');
        var space = document.querySelector('.space');
        if(icon.style.display === 'block'){
            icon.style.display ='none';
            space.style.height = '80px';
        }else{
            icon.style.display = 'block';
            space.style.height = '200px';
        }
    }
   

/*=====works_content function====*/




function web(){
        document.getElementById('cont_1').href = '#web_sec';
        x1.display = 'block';
        x2.display = 'none';
        x3.display = 'none';
        x4.display = 'none';
        x5.display = 'none';
        
    }


function prod(){
    document.getElementById('cont_2').href = '#prod_sec';
    x1.display = 'none';
    x2.display = 'block';
    x3.display = 'none';
    x4.display = 'none';
    x5.display = 'none';
}

function model(){
    document.getElementById('cont_3').href = '#model_sec_1';
    x1.display = 'none';
    x2.display = 'none';
    x3.display = 'block';
    x4.display = 'block';
    x5.display = 'none';
}

function aug_re(){
    document.getElementById('cont_4').href = '#ar_sec';
    x1.display = 'none';
    x2.display = 'none';
    x3.display = 'none';
    x4.display = 'none';
    x5.display = 'block';
}