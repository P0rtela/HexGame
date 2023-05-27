//(#valor#)).toString(16) -> para hex
//parseInt(red, 16) ->  para normal
//*
const colorShow = document.getElementById("colorShow");
const original = document.getElementById("originalCode");
const aI = document.getElementById("answerInput");
var rev = false
const points = {
    red: document.getElementById("aRed"),
    green: document.getElementById("aGreen"),
    blue: document.getElementById("aBlue"),
    total: document.getElementById("aTotal"),
    percentage: document.getElementById("aPercentage")
}

var cR = '000'

function checkAnswer(i){
    i.value = i.value.toUpperCase()
    var regex = /[^a-f0-9]/gi;
    i.value = i.value.replace(regex, '');
}

function tryAgain(){
    generateHex()
    aI.value = ""
    original.innerHTML = `revelar`
    original.classList.replace('exposedCode','hiddenCode')

    points.red.innerHTML = 0
    points.green.innerHTML = 0
    points.blue.innerHTML = 0
    points.total.innerHTML = 0
    points.percentage.innerHTML = 0
}

function generateHex(){
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    var init = {
        code: '000',
        hex: {
        red: 'ff',
        green: 'ff',
        blue: 'ff'
        },
        dec: {
            red: red,
            green: green,
            blue: blue
        }
    };
    init.hex.red = (init.dec.red).toString(16)
    init.hex.green = (init.dec.green).toString(16)
    init.hex.blue = (init.dec.blue).toString(16)
    init.code = init.hex.red + init.hex.green + init.hex.blue
    colorShow.style.backgroundColor = "#"+init.code;
    cR=init.code
    console.log(init)
    return init
}

var init = generateHex();

function answer(){
    if (aI.value.length == 6){
        console.log(aI.value)
        console.log(aI.value.length)
    
        var res = {
            code: aI.value,
            hex: {
            red: 'ff',
            green: 'ff',
            blue: 'ff'
            },
            dec: {
                red: '0',
                green: '0',
                blue: '0'
            }
        };
    
        res.hex.red = res.code[0] + res.code[1];
        res.hex.green = res.code[2] + res.code[3];
        res.hex.blue = res.code[4] + res.code[5];
        res.dec.red = parseInt(res.hex.red, 16)
        res.dec.green = parseInt(res.hex.green, 16)
        res.dec.blue = parseInt(res.hex.blue, 16)
        
        console.log(res)
        
        var end = {
            red: parseInt(100-Math.sqrt((Math.pow((init.dec.red - res.dec.red)*100/255,2)))),
            green: parseInt(100-Math.sqrt((Math.pow((init.dec.green - res.dec.green)*100/255,2)))),
            blue: parseInt(100-Math.sqrt((Math.pow((init.dec.blue - res.dec.blue)*100/255,2)))),
            percentage: 23,
            total: 0
        }
        
        end.total = end.red + end.green + end.blue
        end.percentage = parseInt(end.total/3)
    
        points.red.innerHTML = end.red
        points.green.innerHTML = end.green
        points.blue.innerHTML = end.blue
        points.total.innerHTML = end.total
        points.percentage.innerHTML = end.percentage
        console.log(end)
    } else {
    
        points.red.innerHTML = 0
        points.green.innerHTML = 0
        points.blue.innerHTML = 0
        points.total.innerHTML = 0
        points.percentage.innerHTML = 0
    }
}

function revel(){
    console.log("aaa")
    original.innerHTML = '#' + cR
    original.classList.replace('hiddenCode','exposedCode')
}