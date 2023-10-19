 //closures
const sharma = () => {
    const abiral = "Hancy";
    const karki = () => {
        console.log("Please call outer function karki to inner function", abiral);
    }
  
    karki()
 
}
 sharma();
const ghimire = () => {
    const aavash = "Hello baby";
    const sayIt = () => {
        console.log(aavash);
    }
    sayIt();
}
 ghimire();


