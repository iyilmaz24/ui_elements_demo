import './style.css';
import {createDropDown, toggleDropDown} from './dropDown';



const dropDownButton = document.getElementById("drop-down-button");
createDropDown();

dropDownButton.addEventListener("click", toggleDropDown);
