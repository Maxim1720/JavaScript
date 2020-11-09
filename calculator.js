<script>

function calc(op,a,b)
{
	try
    {
    	if(isNaN(a) || isNaN(b))
        {
        	throw "один или два операнда не являются числами";
        }
        
		switch(op)
    	{
   			case '+':
   		  		return a+b;
       		case '-':
       			return a-b;
       		case '*':
     		 	return a*b;
      	   	case '/':
            	if(b == 0)
                {
                	throw "деление на 0";
                }
        		return a/b;
    	}
        throw "Неверный оператор"
  	}
    catch(err)
    {
    	 return "error: " + err;
    }
}


alert(calc(prompt("Введите оператор:","+ - * /"),Number(prompt("Введите первое число",' ')),Number(prompt("Введите второе число",' '))));

</script>
