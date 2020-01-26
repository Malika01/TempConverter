function f(from)
{ window.x=from; }

function t(to)
{ window.y=to; } 

function c()
{
    if(window.x=='1')
   { if(window.y=='1')
     alert("Choose two different units");
     var cel=document.getElementById('1').value;
     if(window.y=='2')
       { var fah= 1.8*parseFloat(cel) + 32;
         document.getElementById('2').value=(fah); 
         }
     if(window.y=='3')
       { var kel= 273 + parseFloat(cel);
        document.getElementById('2').value=(kel);
         }
   }

   if(window.x=='2')
   { if(window.y=='2')
     alert("Choose two different units");
     var fah=document.getElementById('1').value;
     var cel=(5/9)*(parseFloat(fah) - 32);
     if(window.y=='1')    
         document.getElementById('2').value=(cel); 
         
     if(window.y=='3')
       { var kel= 273 + parseFloat(cel);
        document.getElementById('2').value=(kel);
         }
   }

   if(window.x=='3')
   { if(window.y=='3')
     alert("Choose two different units");
     var kel=document.getElementById('1').value;
     var cel=parseFloat(kel) - 273;
     if(window.y=='1')    
         document.getElementById('2').value=(cel); 
         
     if(window.y=='2')
       { var fah= 1.8*parseFloat(cel) + 32;
        document.getElementById('2').value=(fah);
         }
   }
}

function r()
{ document.getElementById('1').value=" ";
  document.getElementById('2').value=" ";
  }