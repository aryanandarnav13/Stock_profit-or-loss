const stock = document.querySelector("#stock");
const pprice = document.querySelector("#pprice");
const cprice = document.querySelector("#cprice");
const form = document.querySelector(".form");
const section = document.querySelector("section");
const result = document.querySelector(".result");

function testerFunction1() {
    document.getElementById('col1').style.backgroundColor = "#9ecbf7"; 
}
function testerFunction2() {
    document.getElementById('col1').style.backgroundColor = "#f79881"; 
}

function testerFunction3() {
document.getElementById('col1').style.backgroundColor = "#e3dedc"; 
}

function testerFunction4() {
    document.getElementById('col1').style.backgroundColor = "#a6000b"; 
    }

form.addEventListener("submit", (e) => {
  e.preventDefault();

const stocknum=Number(stock.value);
const purchaseprice=Number(pprice.value);
const currentprice=Number(cprice.value);
  
const totalpp=stocknum*purchaseprice;
const totalcp=stocknum*currentprice;

var flag=2;
var lp=0;
if(totalpp>totalcp)
{   flag=0;
    lp=totalpp-totalcp;
}
else if(totalpp<totalcp)
{   flag=1;
    lp=totalcp-totalpp;
}

var p=(lp/totalpp)*100;

  if (flag==1) {
    result.innerText = `😄 You gained ${p}%. Your total profit is ${lp}.00`;
    testerFunction1();
 
  } else if(p<=50 && flag==0) {
    result.innerText = `😔 You lost ${p}%. Your total loss is ${lp}.00`;
    testerFunction2();
  }
  else if(p>50 && flag==0)
  {result.innerText = `😭  You lost ${p}%. Your total loss is ${lp}.00`;
    testerFunction4();
  }
  else
  {
    result.innerText ="😜 You neither loose nor gain !"
    testerFunction3();
  }

  
});