document.addEventListener("click", (ev) => {
  const target = ev.target;
  if (target.tagName.toUpperCase() === "BUTTON") {
    if (target.id === "olaButton") {
      const ancor = document.getElementById("olaAncor");
      ancor.innerHTML = "Ola MUNDOOO";
    }
  } else if (target.tagName.toUpperCase() === "A") {
    console.log("CLICO NA ANCOR");
  }
});

function TableBlock() {}
