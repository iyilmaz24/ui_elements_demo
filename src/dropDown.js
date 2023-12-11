

const menuInnerHTML = `<div id="button-div">
<button>Cart</button>
<button>Saved</button>
<button>Settings</button>
</div>`;


function createDropDown() {
    const dropDownDiv = document.getElementById("drop-down-div");
    const menu = document.createElement("div");
    menu.setAttribute("id", "drop-down-menu");
    menu.innerHTML = menuInnerHTML;
    dropDownDiv.appendChild(menu);
}


function toggleDropDown() {
    
    if(document.getElementById("drop-down-menu").style.display === "none")
    {
        document.getElementById("drop-down-menu").style.display = "inline";
    }
    else {
        document.getElementById("drop-down-menu").style.display = "none";
    }

};


export {createDropDown, toggleDropDown}