export const handleTheme = () => {
    const html = document.querySelector("html");
    if (html.classList.value.includes("dark")){
        html.classList.remove("dark");
    }
    else{
        html.classList.add("dark");
    }
}