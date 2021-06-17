function cookie() {
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    const cookieRefuseButton = document.querySelector(".cookie-btn2");
    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBannerDisplayed", true);
    });
    cookieRefuseButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
    })
    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed"))
            cookieContainer.classList.add("active");
    }, 2000);
}