function amuConvert(val) {
   console.log("I converted");
   document.getElementById("carat").value = val * 1.5611;
   document.getElementById("gram").value = val * 1.6605e-24;
   document.getElementById("kilogram").value = val * 1.6605e-27;
   document.getElementById("milligram").value = val * 1.6605e-21;
   document.getElementById("ounce").value = val * 5.8574e-26;
   document.getElementById("pound").value = val * 3.6609e-27;
   document.getElementById("stone").value = val * 2.6149e-28;
   document.getElementById("tonne").value = val * 1.6605e-30;
}

function caratConvert(val) {
   document.getElementById("amu").value = val * 1.204e+23;
   document.getElementById("gram").value = val * 0.2;
   document.getElementById("kilogram").value = val * 0.0002;
   document.getElementById("milligram").value = val * 200;
   document.getElementById("ounce").value = val * 0.00705479;
   document.getElementById("pound").value = val * 0.000440925;
   document.getElementById("stone").value = val * 3.1495e-5;
   document.getElementById("tonne").value = val * 2e-7;
}

function gramConvert(val) {
   document.getElementById("amu").value = val * 6.022e+23;
   document.getElementById("carat").value = val * 5;
   document.getElementById("kilogram").value = val * 0.001;
   document.getElementById("milligram").value = val * 1000;
   document.getElementById("ounce").value = val * 0.035274;
   document.getElementById("pound").value = val * 0.00220462;
   document.getElementById("stone").value = val * 0.000157473;
   document.getElementById("tonne").value = val * 1e-6;
}

function kgConvert(val) {
   document.getElementById("amu").value = val * 6.022e+26;
   document.getElementById("carat").value = val * 5000;
   document.getElementById("gram").value = val * 1000;
   document.getElementById("milligram").value = val * 1e+6;
   document.getElementById("ounce").value = val * 35.274;
   document.getElementById("pound").value = val * 2.20462;
   document.getElementById("stone").value = val * 0.157473;
   document.getElementById("tonne").value = val * 0.001;
}

function mgConvert(val) {
   document.getElementById("amu").value = val * 6.022e+20;
   document.getElementById("carat").value = val * 0.005;
   document.getElementById("gram").value = val * 0.001;
   document.getElementById("kilogram").value = val * 1e-6;
   document.getElementById("ounce").value = val * 3.5274e-5;
   document.getElementById("pound").value = val * 2.2046e-6;
   document.getElementById("stone").value = val * 1.5747e-7;
   document.getElementById("tonne").value = val * 1e-9;
}

function ounceConvert(val) {
   document.getElementById("amu").value = val * 1.707e+25;
   document.getElementById("carat").value = val * 141.748;
   document.getElementById("gram").value = val * 28.3495;
   document.getElementById("kilogram").value = val * 0.0283495;
   document.getElementById("milligram").value = val * 28349.5;
   document.getElementById("pound").value = val * 0.0625;
   document.getElementById("stone").value = val * 0.00446429;
   document.getElementById("tonne").value = val * 2.835e-5;
}

function poundConvert(val) {
   document.getElementById("amu").value = val * 2.732e+26;
   document.getElementById("carat").value = val * 2267.96;
   document.getElementById("gram").value = val * 453.592;
   document.getElementById("kilogram").value = val * 0.453592;
   document.getElementById("milligram").value = val * 453592;
   document.getElementById("ounce").value = val * 16;
   document.getElementById("stone").value = val * 0.0714286;
   document.getElementById("tonne").value = val * 0.000453592;
}

function stoneConvert(val) {
   document.getElementById("amu").value = val * 3.824e+27;
   document.getElementById("carat").value = val * 31751.5;
   document.getElementById("gram").value = val * 6350.29;
   document.getElementById("kilogram").value = val * 6.35029;
   document.getElementById("milligram").value = val * 6.35e+6;
   document.getElementById("ounce").value = val * 224;
   document.getElementById("pound").value = val * 14;
   document.getElementById("tonne").value = val * 0.00635029;
}

function tonneConvert(val) {
   document.getElementById("amu").value = val * 6.022e+29;
   document.getElementById("carat").value = val * 5e+6;
   document.getElementById("gram").value = val * 1e+6;
   document.getElementById("kilogram").value = val * 1000;
   document.getElementById("milligram").value = val * 1e+9;
   document.getElementById("ounce").value = val * 35274;
   document.getElementById("pound").value = val * 2204.62;
   document.getElementById("stone").value = val * 157.473;
}