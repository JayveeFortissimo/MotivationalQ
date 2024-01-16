const motivational = new XMLHttpRequest();



const div = document.querySelector('.container');
const creation = document.createElement('h3');


creation.textContent = "Loading.......";
div.appendChild(creation)

let True = false;

const button = document.querySelector('.BTN button').addEventListener('click',()=>{
   

    if(!True){
        motivational.open('GET','https://type.fit/api/quotes');
        motivational.onreadystatechange = function(){

           
            if(this.readyState === 4 && this.status === 200){
                   const obj =  JSON.parse(this.responseText);
                     
                   obj.forEach((indo,index) =>{
                      
                    const random = Math.floor(Math.random() * obj.length);
                    const request = obj[random];
    
                   creation.innerHTML = `${request.text} <h5>~author: ${request.author}</h5>`;
                    div.appendChild(creation)
    
                   })
    
            }
            
            }
            motivational.send();
    }

     
     
})





