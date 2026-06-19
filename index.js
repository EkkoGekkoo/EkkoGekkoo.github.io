const now = new Date(Date.now());
const birthday = new Date("2004-04-22");
const myAge = new Date(now - birthday).getTime() / 1000 / 60 / 60 / 24 / 365;

const ageElem = document.getElementById("myAge");
const main = document.getElementById("main");
const navList = document.getElementById("navList");
    
document.addEventListener("DOMContentLoaded", () => {
    ageElem.innerHTML = Math.floor(myAge);


    const title = document.getElementById("title");
    title.onclick = () => document.body.scrollIntoView({behavior: "smooth"});

    const mainChildren = [...main.children];
    for(let c of mainChildren) {
        if(c.nodeName !== "SECTION") continue;
        let listItem = document.createElement("li");

        let link = document.createElement("a");
        
        link.innerHTML = c.getAttribute("name");
        if(link.innerHTML == "Minusta") continue;
        link.onclick = () => c.scrollIntoView({behavior: "smooth"});
        listItem.appendChild(link);
        navList.appendChild(listItem);
    }
    
});


// const progressElem = document.getElementById("progressBar");
// document.addEventListener("scroll", () => {
//     let scrollProgress = document.body.scrollTop | document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     progressElem.style.height = `${(scrollProgress / height) * 100}%`;
// });