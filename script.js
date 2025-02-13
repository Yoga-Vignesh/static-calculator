let calc = localStorage.getItem('calc');
      
      if(calc === null){
        value: calc
      }
     
      dispCalc();

      function updateCalc(value){
        calc += value;
        dispCalc();   
      
  
        localStorage.setItem('calc',calc);
      }

        function dispCalc(){
          document.querySelector('.disp')
          .innerHTML = calc;
        }
