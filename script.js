var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}


function square() {
    screen.value = Math.pow(screen.value,2);
}

function degree() {
    screen.value = screen.value * (180 / Math.PI);
}

function radians() {
    screen.value = screen.value * (Math.PI / 180);
  }

function ln() {
    screen.value = Math.log(screen.value);
  }

  function plusMinus() {
    if (screen.value.charAt(0) === "-") {
      screen.value = screen.value.slice(1);
    } else {
      screen.value = "-" + screen.value;
    }
  }

function pow(){
   
    var hii=screen.value;
    if(hii.includes("^")){
      
        screen.value = "^";
    }else{
        screen.value += "^";
    } 
 }

function sqrt() {

    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log10(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function calculate(){
    var hii=screen.value;
    if(hii.includes("^")){
        var ss=hii.split("^");
        screen.value = Math.pow(ss[0],ss[1]);
    }
    var splitScreen = screen.value.split('%',2);
    if(splitScreen.length > 1){
        screen.value=eval(splitScreen[0] + '/100*' + splitScreen[1]);
    }else{
        screen.value=eval(screen.value);
    }
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}