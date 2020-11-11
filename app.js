window.onload = function search(){
   
    var btn = document.querySelector(".btn")
    btn.addEventListener("click", function(e){
        e.preventDefault();
        console.log("clicked")
        
 
        var httpRequest = new XMLHttpRequest(); 
        var url = "http://localhost/info2180-lab4/superheroes.php" 
        httpRequest.open('GET', url); 
        httpRequest.send();
        
       
        httpRequest.onreadystatechange = function(){
       

            
            
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200) { 
                    var response = httpRequest.responseText; 
                    document.getElementById("result").innerHTML = response
                    console.log(response)
                    
                    
                }else{ 
                        alert('There was a problem with the request.');   
                    }
            }    
            
        }
       
        
 
 
    })
}
 
