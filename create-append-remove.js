let ass=document.createElement("p");
//ass.textContent="i am mahesh babu";
document.getElementById("vasi").appendChild(ass);
ass.innerHTML="babulake babu mahesh babu";
ass.style.color="red";
ass.style.backgroundColor="yellow";
setTimeout(() => {
    let re=document.getElementsByClassName("li")[3];
    if(re){
        re.remove();
    }
},2000);
let newh =document.createElement("h2");
newh.innerHTML="jai babu jai jai babu in body by js";
newh.style.color="brown";
document.body.appendChild(newh);
setTimeout(()=>{
    let net=document.createElement("p");
    net.textContent="this is added later";
    document.body.appendChild(net);

},2000
)
let tag=document.createElement("p");
tag.textContent="i am not happy";
tag.style.color="red";
document.getElementById("vasi").appendChild(tag);
let myli=document.createElement("ul");
for(let i=0;i<=5;i++){
    let lisi=document.createElement("li");
    lisi.textContent="item"+i;
    myli.appendChild(lisi);
    document.boddy.append(myli);
}