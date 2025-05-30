export function openTab(tabName, tabEl) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
    }

    document.getElementById(tabName).style.display = "block";

    tabEl.style.backgroundColor = "#a01414";
    tabEl.style.color = "white";

    if (tabName === "chart") {
        const mainEvent = new CustomEvent("mainTabActivated");
        window.dispatchEvent(mainEvent);
      }
}