//learn about cookie
 let key=prompt("Name the product you want to buy");
 let value=prompt("Which company product you want to buy");
 document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
 console.log(document.cookie);

