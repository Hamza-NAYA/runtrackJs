function showhide() {
    const article = document.getElementById("citation");

    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}