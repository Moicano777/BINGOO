
    function generateCard() {
        const card = document.getElementById("bingo-card");
        card.innerHTML = "";
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement("div");
            if (i === 12) {
                cell.innerText = "FREE";
                cell.style.backgroundColor = "#ddd";
            } else {
                cell.innerText = Math.floor(Math.random() * 75) + 1;
            }
            card.appendChild(cell);
        }
    }
    