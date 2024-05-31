document.addEventListener("DOMContentLoaded", function () 
{
    //console.log('ready to display');
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
  
    let currentValue = "";
  
    function evaluateResult() 
    {
      console.log('currentValue:', currentValue)       
      const convertedValue = currentValue    //currentValue is string
        .replace("×", "*")                   //replacement for some values
        .replace("÷", "/")
        .replace('%', '*0.01')
        .replace('sin', 'Math.sin')        //ans in not in degrees
        .replace('cos', 'Math.cos')
        .replace('ln', 'Math.log')
        .replace('π', 'Math.PI')
        .replace('log', 'Math.log10')
        .replace('e', 'Math.E')
        .replace('tan', 'Math.tan')
        .replace('√', 'Math.sqrt');
      
      console.log('convertedValue:', convertedValue)
      const result = eval(convertedValue);          // eval not to use in production work.
      currentValue = result.toString();             // value inside button 
      display.value = currentValue;        
    }
  
    for (let i = 0; i < buttons.length; i++) 
    {         
      const button = buttons[i];
      button.addEventListener('click', function() 
      {         // button is clicked this function is evoked
        const value = button.innerText;          

        try                       //if the code works otherwise print the error 
        {
            if (value == "AC")        //functionality for AC value
            {       
                currentValue = "";
                display.value = currentValue;    
            } else if(value == "=") 
            {
                evaluateResult();
            } else 
            {
                currentValue += value;
                display.value = currentValue;
            }
        } catch (error) 
        {
            console.error(error);
            currentValue = "ERROR";
            display.value = currentValue;
        }

      })
    }
  });