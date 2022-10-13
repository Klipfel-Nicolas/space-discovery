import "../css/index.css";
import Experience from './app/Experience/Experience.js'
import App from './app/App.js'

// Mount App
const app = new App()

// Mount Experience in the canvas
const experience = new Experience(document.querySelector('canvas.webgl'))