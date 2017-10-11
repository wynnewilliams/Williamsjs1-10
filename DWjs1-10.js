function tester() {

    //document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output").innerHTML = string_times(h, n);
    //test third method, etc
}



function sleep_in(weekday,vacation) {
    if(!weekday || vacation){
        return true;
    }else{
        return false;
    }
}

function monkey_trouble(a_smile,b_smile){
    if(a_smile && b_smile || !a_smile && !b_smile){
        return true;
    }else{
        return false;
    }
}

function string_times(h, n){
    var String = "";
    for(var i = 0; i < n; i++){
        var String = String + h;
    }
    return String;
}

function front_times(h, n){
    var string = "";
    for(var i = 0; i < n; i++){
        var string = string + h.substring(0,3);
    }
    return string;
}

function string_bits(h){
    var str = "";
    for(var i = 0; i < h.length / 2; i++){
        var str = str + h[2*i]
    }
    return str;
}


function caughtSpeeding(speed, bday){
    if(!bday){
        if(speed <= 60){
            return 0;
        }
        if(61 <= speed && speed <= 80){
            return 1;
        }
        if(speed >= 81){
            return 2;
        }
    }else{
        if(speed <= 65){
            return 0;
        }
        if(66 <= speed && speed <= 85){
            return 1;
        }
        if(speed >= 81){
            return 2;
        }
    }
}

function fizz_buzz(n){
    var string = "";
    if(n % 3 == 0){
        if(n % 5 == 0){
            var string = "FizzBuzz";
        }else{
            var string = "Fizz";
        }
    }
    if(n % 5 == 0 && n % 3 != 0){
        var string = "Buzz";
    }
    if(n % 5 != 0 && n % 3 != 0){
        var string = n + "!";
    }
    return string;
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }else{
        return 1;
    }
}

function blackjack(a,b){
    if(a < 22 && b < 22){
        if(a >= b){
            return a;
        }else{
            return b;
        }
    }
    if(a < 22 && b > 21){
        return a;
    }
    if(b < 22 && a > 21){
        return b;
    }
    if(b > 21 && a > 21){
        return 0;
    }
}


function loneSum(a,b,c){
    if(a != b && a != c && b != c){
        return a + b + c;
    }
    if(a == b && a != c){
        return c;
    }
    if(a == c && a != b){
        return b;
    }
    if(c == b && c != a) {
        return a;
    }
    if(a == b && b == c){
        return 0;
    }
}