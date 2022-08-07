function plusM() {
    var mins=document.getElementById("minute");
    mins.value++;
    if(mins.value>=60) {mins.value=0;};
    if(mins.value<10) {mins.value="0"+mins.value};
};



function minusM() {
    var mins=document.getElementById("minute");
    if(mins.value<=0) {mins.value=60;};
    mins.value--;
    if(mins.value>=60) {mins.value=0;};
    if(mins.value<10) {mins.value="0"+mins.value};
};



function plusS() {
    var secs=document.getElementById("second");
    secs.value++;
    if(secs.value>=60) {secs.value=0;};
    if(secs.value<10) {secs.value="0"+secs.value};
};



function minusS() {
    var secs=document.getElementById("second");
    if(secs.value<=0) {secs.value=60;};
    secs.value--;
    if(secs.value>=60) {secs.value=0;};
    if(secs.value<10) {secs.value="0"+secs.value};
};


var setTheTime;

function start() {
    var mins=document.getElementById("minute");
    var secs=document.getElementById("second");
    if(mins.value==0&&secs.value==0){
        return;
    }
    else {
        setTheTime=setInterval(counting,1000);
        document.getElementById("start").style.display="none";
        document.getElementById("button1").style.display="none";
        document.getElementById("button2").style.display="none";
        document.getElementById("button3").style.display="none";
        document.getElementById("button4").style.display="none";
    }
};


function counting() {
    var mins=document.getElementById("minute");
    var secs=document.getElementById("second");
    secs.value--;
    if(secs.value<0){
        mins.value--;
        secs.value=59;
        if(mins.value<10) {
            mins.value="0"+mins.value;
        }
    }
    if(secs.value<10){
        secs.value="0"+secs.value;
    }
    if(mins.value==0&&secs.value==0){
        clearInterval(setTheTime);
        navigator.vibrate(2000);
        document.getElementById("start").style.display="inline";
        document.getElementById("button1").style.display="inline";
        document.getElementById("button2").style.display="inline";
        document.getElementById("button3").style.display="inline";
        document.getElementById("button4").style.display="inline";
    };
};


function stop() {
    clearInterval(setTheTime);
    document.getElementById("start").style.display="inline";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button2").style.display="inline";
    document.getElementById("button3").style.display="inline";
    document.getElementById("button4").style.display="inline";
};

function Delete() {
    document.getElementById("start").style.display="inline";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button2").style.display="inline";
    document.getElementById("button3").style.display="inline";
    document.getElementById("button4").style.display="inline";
    var mins=document.getElementById("minute");
    var secs=document.getElementById("second");
    mins.value="00";
    secs.value="00";
};

function color1() {
    var body=document.getElementById("body");
    body.style.backgroundColor= "#8080ff";
}

function color2() {
    var body=document.getElementById("body");
    body.style.backgroundColor= "#bf80ff";
}

function color3() {
    var body=document.getElementById("body");
    body.style.backgroundColor= "#ffbf80";
}

function color4() {
    var body=document.getElementById("body");
    body.style.backgroundColor= "#00cc99";
}