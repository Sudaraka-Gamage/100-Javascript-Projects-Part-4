const detect = document.querySelector("#detect");
const wrapper = document.querySelector(".wrapper");
const button = wrapper.querySelector("button");

let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge",];
for(let item of adClasses){
    detect.classList.add(item);
}
let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

button.addEventListener("click", () => {
    wrapper.classList.remove("show");
});

if(!wrapper.classList.contains("show")){
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
}
