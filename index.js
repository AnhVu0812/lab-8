var doPrime = document.getElementById("songuyen")

const prime = function(n) 
{
    var n = doPrime.value;
    var flag = true;

    if (n < 2) 
    {
        flag = false;
    }

    else {
        for (let i = 2; i <= Math.sqrt(n); i++)
        {
            if (n % 2 == 0)
            {
                flag = false;
                break
            }

            else 
            {
                flag = true;
            }
        }
    }
    
    if (flag == true)
    {
        document.getElementById("result").innerHTML = `${n} is prime <br/>`;
    }

    else 
    {
        document.getElementById("result").innerHTML = `${n} is not prime <br/>`;
    }
}