
function refresh_me() {
var elements = document.getElementsByTagName("input");
for (var i=0; i < elements.length; i++) {
  if (elements[i].type == "text") {
    elements[i].value = "";
  }
}
}

function memory() {
var ele = document.getElementById("mem");
if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";
	}
}


function change(a){
if(document.getElementById("total").value != "")
{
refresh_me()
}
document.getElementById("cache2").value += a
document.getElementById("disp").value += a
}


function printDiv(divName){
			var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;
			document.body.innerHTML = printContents;
			window.print();
			document.body.innerHTML = originalContents;
		}

var answer = document.getElementById("disp");

function affixScreen(x) {
  switch(x){
    case '-':
      if (answer.value === ''){
        answer.value ='-';
        return;
      }
      if (answer.value === '.'){
        answer.value ='-.';
        return;
      }
      answer.value += x;
      break;
    case 'c':
      answer.value = "";
    break;
    default:
      answer.value += x;
  }
}



function equals() {  
  nbr = document.getElementsByTagName("input")[0].value;
  x = answer.value;
  x=eval(x);
  document.getElementById("total").value = x

  document.getElementById("mem").innerHTML += "<h4 style='text-align: left; margin-left: 15px; color: #0000CD;'  >"  + nbr + "</h4>"+ "</p>" + "<p style='text-align: right; margin-right: 15px; color: red; margin-top: -10px;'> " + "=  "+ x +"<br/>";
   
}

function percent() {
  x = answer.value;
  x = eval(x / 100);
  answer.value = x;
 
}

function negative() {
  x = answer.value;
  x = eval(-x);
  answer.value = x;
}

function power(){
  x=answer.value;
  x=eval(x*x);
  answer.value=x;
}

function backspace(){
  var num = answer.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  answer.value  = newNum;
}

$(
    function(){
     
        $('#time').click(function(){
                  var time = new Date();                
                  $('#timeholder').val(time.toDateString());  
        });
        
    }
);

function clearMe() {
     $('mem').empty();
}

$(document).ready(function () {
        $('#mem').hide();
});