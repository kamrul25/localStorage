/* 
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.key
localStorage.length
*/


const add = () =>{
    localStorage.setItem("Name", "Kamrul Hasan Jaman");
    localStorage.setItem("Age", 18);
    localStorage.setItem("isOk", true);
    const ages = [12, 34, 13, 23, 41, 16];
    const agesString = JSON.stringify(ages);
    console.log(agesString);
    localStorage.setItem("Ages",` ${agesString}`)

    const person = {name: "Shakib", age: 13, home: "Feni", isMale: true};
    const personConvertToString = JSON.stringify(person);
    console.log(personConvertToString);
    localStorage.setItem("Person", `${personConvertToString}`)

    localStorage.getItem("Age");
    localStorage.removeItem("bag");
    // localStorage.key() // I don't know how to use it and how to work it;
    console.log(localStorage.length);
}