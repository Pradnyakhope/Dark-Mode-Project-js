document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("mode-toggle");
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        }
    });
});