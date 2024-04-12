import { setSearchFocus } from "./searchBar.js";

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})

const initApp = () =>{
    //set focus

    setSearchFocus();
    // 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);

}

const submitTheSearch = (event) =>{
    event.preventDefault();
    //delete search results
    //process the search
    //set the focus
}

