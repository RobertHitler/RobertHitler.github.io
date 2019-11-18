function myFunction() {
		var copyText = document.getElementById("myInput");
		copyText.select();
		document.execCommand("copy");
		alert("Copied the text: " + copyText.value);
        console.log("Hello world")
}
    
    
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
   