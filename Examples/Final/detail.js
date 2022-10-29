window.onload = function () {
    getUser();
  };

  function gotoForm(id) {
    console.log(window.location.href, id);
    window.location.href = "./form.html?id="+id;
  }
  
  function getUser() {
    let id = getIdUrl();
    fetch("https://634e9e69f34e1ed8269171ce.mockapi.io/person/" + id, {
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
      <p>${user?.age}</p>
      <p>${user?.address}</p>
      <button class="btn btn-primary" onclick="gotoForm(${
        user?.id
      })">Update</button>
    `;
    const elm = document.getElementById("info");
    elm.innerHTML = contentHTML;
  }