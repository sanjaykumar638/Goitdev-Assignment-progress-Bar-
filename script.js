let number = document.getElementById("number");
const refreshBtn = document.getElementById("btnRefresh");
let counter = 0;

setInterval(() => {
    if (counter === 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
