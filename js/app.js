

  'use strict';
  let sur =prompt('hi what is your nickname?');
  alert('i am marwan rawashdeh welcome '+sur+' to the guessing game page');
  alert('If you are a Bollywood fan, leave this page');
  alert('we just joking with you have a nice time');
  alert('Please answer using Yes, No If you answer the correct answer, you will get a star');
  
  
  let first= prompt("Do you think I like movies?");
  function q1 (){


  switch(first.toLowerCase()) {
      case "yes":alert('your answer is correct you will get first star');
      document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');
        break;
        case "no":alert('your answer is false you will not get star');}
        
       console.log(first);
  }
  q1()
       
       let sec= prompt('is leonardo dicaprio my favorit actor in hollywood');
       function q2(){
      switch(sec.toLowerCase()) {
          case "yes":alert('your answer is true you will get star');
          document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');
           break;
          case "no":alert('your answer is false you will not get star');}
            
       
       console.log(sec);
      }
      q2()
       
      
       function q3 (){
         let thir= prompt('did you watch inception or the wolf of wall streat?');
       switch(thir.toLowerCase()) {
          case "yes":alert('your answer is true you will get star');
          document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');  
          break;
          case "no":alert('your answer is false you will not get star');}
            
       
       console.log(thir);
       }
       q3()
         
       
       function q4 (){
          let forth= prompt('do you think i like jennifer lawrence more than margot robbie?');
       switch(forth.toLowerCase()) {
          case "yes":alert('your answer is true you will get star');
          document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');
          break;
          case "no":alert('your answer is false you will not get star');}
            
       
       console.log(forth);
       }
       q4 ()
       
       function q5 (){
          let fifth=prompt('Is 2015 the best year for movies in the new century?')
       switch(fifth.toLowerCase()) {
          case "no":alert('your answer is true you will get star');
          document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >'); 
          break;
          case "yes":alert('your answer is false you will not get star');}
            
       
      console.log(fifth);
       }
       q5 ()
      
function q6 (){
  for(  let i=1;i<5;i++){
     let sixth= prompt('You have four attempts to find the correct number. How many Leonardo movies?');
   
  if(sixth<=29){
    alert('too low');}
  
     else if (sixth>=31){
    alert('too high');}
  
    
    else if(sixth=30) { 
      document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');
     break ;}
  
    }
     alert('number of Leonardo movies is 30 ') ;
   }
  q6 ()
  
  function q7 (){
     let oscar=[1993,2005,2007,2014]


   for( let y = 0;y<6;y++){
    let sevth= prompt('You have six attempts to find the correct number When did Leonardo DiCaprio nominate for an Oscar?');
    
   if(sevth==oscar[ 0 ]||sevth==oscar[1]||sevth==oscar[2]||sevth==oscar[3]) {
     alert('that right lenardo nominated in'+sevth)

     document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" >');
   
     break ;
           
   }
    else  {
   alert('your answer not correct Leonardo DiCaprio did not nominat in'+sevth);}
   
      }
      console.log(oscar);
   }
q7()