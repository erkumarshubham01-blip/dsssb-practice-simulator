const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", () => {

    const selectedPaper = document.getElementById("paper").value;

    alert("Selected Paper : " + selectedPaper);

});
