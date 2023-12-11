/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import './style.css';
import {createDropDown, toggleDropDown} from './dropDown';
import './dropDown.css';
import './imageSlide.css';
import { enableSlideControl } from './imageSlide';


const dropDownButton = document.getElementById("drop-down-button");
createDropDown();
dropDownButton.addEventListener("click", toggleDropDown);

enableSlideControl();


