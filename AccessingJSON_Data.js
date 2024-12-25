// let jsonData = '{"fact":"Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.","length":182}'

// let validData = JSON.parse(jsonData);
// console.log(validData.fact);

// let student = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// let jsTOjson = JSON.stringify(student);
// console.log(jsTOjson);


//fetch() : sending request
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//     console.log(response);
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })
// .catch((error) => {
//     console.log(error);
// })


//Axios
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    //console.log("Button Clicked");
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
    let req = await axios.get(url);
    return req.data.fact;
}catch(error){
    console.log(error);
    return "No fact found"
}}
