const body = document.body;

window.addEventListener("scroll", () => {
    console.log("working");
    const header = document.querySelector("header");
    
    // adds the classlist if it doesn't exist and removes it if it exists 
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(pageHeight)  

    const scrollPercentage = (currentState / pageHeight) * 100;
    console.log(scrollPercentage);

    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}