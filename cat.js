

let url = "https://catfact.ninja/fact?max_length=140";
async function getFact() {
   try{
    let res = await axios.get(url);
    console.log(res.data.fact);
    return res.data.fact;
   } catch(e){
    console.log(`Error : ${e} `);
    return "no fact found";
   }
}
let btn = document.querySelector(".btn");
let p = document.querySelector("#fact");
btn.addEventListener("click", async ()=> {
    let res = await getFact();
    console.log(res);
    p.innerHTML = res;
});