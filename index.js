document.addEventListener("click", (ev) => {
  const target = ev.target;
  if (target.tagName.toUpperCase() === "LI") {
    if (target.innerText.toUpperCase() === "HOME") {
      makeRequest("/html/home/home.html").then((response) =>
        mapingRoot(response)
      );
    } else if (target.innerText.toUpperCase() === "CONTATO") {
      makeRequest("/html/contato/contato.html").then((response) =>
        mapingRoot(response)
      );
    }
  }
});

async function makeRequest(link, config = {}) {
  try {
    const response = await fetch(link, config);
    if (response.status < 200 && response.status >= 300)
      throw new Error("Error request");
    const text = await response.text();
    return text;
  } catch (er) {
    return er;
  }
}

function mapingRoot(html) {
  document.getElementById("root").innerHTML = html;
}
