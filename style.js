// first value should go to( be assigned )to x
//until the operator is selcted.
//after the operator selection the value sholud go to y or assigned to y.
// value of x will be stored and after that we only select operator and value of y.

let x = 0; //fisrt operand or value + also store the calculated value that is z.
let y = 0; //2nd operand or value
let count = 0;
let opcount = 0; // so that we can't select any operator before first operand
let op = "";
let z = 0; // the calculated value that is z=x (operand)y



// operands selection

document.getElementById("1").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 1;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 1;
    document.getElementById("valy").innerHTML = y;
    // console.log("y",y);
  }
});


document.getElementById("2").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 2;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 2;
    document.getElementById("valy").innerHTML = y;
    // console.log('y',y);
  }
});


document.getElementById("3").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 3;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 3;
    document.getElementById("valy").innerHTML = y;
    // console.log("y",y);
  }
});



document.getElementById("4").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 4;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 4;
    opcount++;
    document.getElementById("valy").innerHTML = y;
    // console.log('y',y);
  }
});


document.getElementById("5").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 5;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 5;
    document.getElementById("valy").innerHTML = y;
    // console.log("y",y);
  }
});


document.getElementById("6").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 6;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 6;
    document.getElementById("valy").innerHTML = y;
    // console.log('y',y);
  }
});


document.getElementById("7").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 7;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 7;
    document.getElementById("valy").innerHTML = y;
    // console.log("y",y);
  }
});


document.getElementById("8").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 8;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 8;
    document.getElementById("valy").innerHTML = y;
    // console.log('y',y);
  }
});


document.getElementById("9").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 9;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 9;
    document.getElementById("valy").innerHTML = y;
    // console.log("y",y);
  }
});


document.getElementById("0").addEventListener("click", function () {
  if (count == 0 && op == "") {
    x = x * 10 + 0;
    opcount++;
    document.getElementById("valx").innerHTML = x;
    // console.log("x",x);
  }
  if (count != 0 || op != "") {
    y = y * 10 + 0;
    document.getElementById("valy").innerHTML = y;
    // console.log('y',y);
  }
});





//  operator selection



document.getElementById("+").addEventListener("click", function () {
  if (opcount == 0) {
    alert("Please Enter first value");
  } else {
    op = "+";
    document.getElementById("valop").innerHTML = op;
  }
});
document.getElementById("*").addEventListener("click", function () {
  if (opcount == 0) {
    alert("Please Enter first value");
  } else {
    op = "x";
    document.getElementById("valop").innerHTML = op;
  }
});
document.getElementById("-").addEventListener("click", function () {
  if (opcount == 0) {
    alert("Please Enter first value");
  } else {
    op = "-";
    document.getElementById("valop").innerHTML = op;
  }
});
document.getElementById("/").addEventListener("click", function () {
  if (opcount == 0) {
    alert("Please Enter first value");
  } else {
    op = "/";
    document.getElementById("valop").innerHTML = op;
  }
});




// calculation



document.getElementById("=").addEventListener("click", function () {
  switch (op) {
    case "+":
      z = x + y;
      z = Number(z.toFixed(3));
      count++;
      x = z;
      // console.log(y);
      y = 0;
      op = "";
      document.getElementById("valx").innerHTML = z;
      document.getElementById("valy").innerHTML = "";
      document.getElementById("valop").innerHTML = "";
      console.log(z);
      break;

    case "-":
      z = x - y;
      z = Number(z.toFixed(3));
      count++;
      x = z;
      y = 0;
      op = "";
      document.getElementById("valx").innerHTML = z;
      document.getElementById("valy").innerHTML = "";
      document.getElementById("valop").innerHTML = "";
      console.log(z);
      break;

    case "x":
      z = x * y;
      z = Number(z.toFixed(3));
      count++;
      x = z;
      y = 0;
      op = "";
      document.getElementById("valx").innerHTML = z;
      document.getElementById("valy").innerHTML = "";
      document.getElementById("valop").innerHTML = "";
      console.log(z);
      break;

    case "/":
      z = x / y;
      if(z==Infinity || z==-Infinity){
        alert('Please enter a valid value for y so that the result is not infinity');
        y=0;
        document.getElementById("valy").innerHTML = "";
    }
      else{
      z = Number(z.toFixed(3));
    //   z = z.toFixed(3);
      count++;
      x = z;
      y = 0;
      op = "";
      document.getElementById("valx").innerHTML = z;
      document.getElementById("valy").innerHTML = "";
      document.getElementById("valop").innerHTML = "";
      console.log(z);
      break;
      }}
});



// clear all



document.getElementById("c").addEventListener("click", function () {
  count = 0;
  opcount = 0;
  x = 0;
  y = 0;
  op = "";
  z = 0;
  document.getElementById("valx").innerHTML = "";
  document.getElementById("valy").innerHTML = "";
  document.getElementById("valop").innerHTML = "";
  // console.log('zero');
});
