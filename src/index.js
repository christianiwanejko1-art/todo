import "./styles.css";
import { createHome, addCardProgress } from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
    createHome()
    addCardProgress('random','card')
});