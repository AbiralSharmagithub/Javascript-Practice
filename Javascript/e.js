const  aavash =["Aavash is great person","Aavash is a honest person","Aavash is a great programmer"];
let text="";
for(i=0;i<aavash.length;i++)
{
    text+=aavash[i]+"<br>"
}
document.getElementById("demo").innerHTML=text;
const  aashish =["Aashish is bad person","Aashish is a nasty person","Aashish is a worse programmer"];
let next="";
aashish.forEach((value)=>{
    next+=value+"<br>";
})
document.getElementById("remo").innerHTML=next;
const rajaHindustani = {Name:"Raja",Identity:"Hindustani",Profession:"Tax-Driver",Home_Town:"Palan Khayad"};
let doc="";
for(x in rajaHindustani){
doc +=rajaHindustani[x]+"<br>";
}
document.getElementById("lemo").innerHTML=doc;
const  rame =["Rame is bad person","Rame is a nasty person","Rame is a worse programmer"];
let cock ="";
for(k of rame )
{
    cock+=k+"<br>";
}
document.getElementById("rame").innerHTML=cock;