import arr from'./modules/sign.js'
// import { arr } from "./modules/sign";
let sing_in = document.querySelectorAll('.sign_in')
sing_in.forEach(i => {
    i.onclick = () => {
        arr()
    }
});
arr()