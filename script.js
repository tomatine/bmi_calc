function calc() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    document.getElementById("bmi").textContent = bmi.toFixed(2);
}