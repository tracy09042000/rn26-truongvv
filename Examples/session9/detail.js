window.onload = function () {
  getUser();
};

function getUser() {
  let id = getIdUrl();
  fetch("https://634e9e69f34e1ed8269171ce.mockapi.io/products/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
    <p>${user?.id}</p>
    <p>${user?.name}</p>
    <p>${user?.avatar}</p>
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}
