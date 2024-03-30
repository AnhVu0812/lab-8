var doPrime = document.getElementById("songuyen")

const prime = function(n) {
    var n = doPrime.value;
    if (n < 2){
        document.write(n," ko la so nt")
    }
    else {
        var flag = true;
        for (let i = 2; i <= Math.sqrt(n); i++){
            if (n % 2 == 0){
                flag = false;
                break
            }
            else {
                flag = true;
                break
            }
        }
    }
    if (flag == true){
        document.getElementById("result").innerHTML = `${n} is prime <br/>`;
    }
    else {
        document.getElementById("result").innerHTML = `${n} is not prime`;
    }
}

