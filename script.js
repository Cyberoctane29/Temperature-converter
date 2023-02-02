const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel*1.8)+32);
    return fahrenheit;
  };
  const celToKel = (cel) => {
    let kelvin = Math.round(+cel+273);
    return kelvin;
  };
  const fahToCel = (fah) => {
    let celsius = Math.round((fah - 32)/1.8);
    return celsius;
  };
  const fahToKel = (fah) => {
    let kelvin = Math.round(((fah-32)/1.8)+273);
    return kelvin;
  };
  const kelToCel = (kel) => {
    let celsius = Math.round(kel-273);
    return celsius;
  };
  const kelToFah = (kel) => {
    let fahrenheit= Math.round(((kel-273)*1.8)+32);
    return fahrenheit;
  };
  let result;
  if (valueTemp == "cel") {
    result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML = `${result}°Fahrenheit`;
    result = celToKel(numberTemp);
    document.getElementById("resultContainer2").innerHTML = `${result} Kelvin`;
  } else if(valueTemp == "fah"){
    result = fahToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = `${result}°Celsius`;
    result = fahToKel(numberTemp);
    document.getElementById("resultContainer2").innerHTML = `${result} Kelvin`;
  }
  else{
    result = kelToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = `${result}°Celsius`;
    result = kelToFah(numberTemp);
    document.getElementById("resultContainer2").innerHTML = `${result}°Fahrenheit`;
  }
};
