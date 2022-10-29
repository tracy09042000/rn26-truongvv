window.onload = function (e) {
    getListUsers();
  };



function gotoDetail(id) {
  console.log(window.location.href, id);
  window.location.href = "./detail.html?id="+id;
}

function formatRow(user) {
    return `
      <th scope="row" onclick="postUser()">${user?.id}</th>
      <td>${user?.name}</td>
      <td class="text-break">${user?.avatar}</td>
      <td>${user?.name.split(" ")[0]}</td>
      <td>
          <button class="btn btn-success" onclick="gotoDetail(${
            user?.id
          })">Detail</button>
          <button class="btn btn-danger" onclick="deleteRowAPI(this,${user?.id})">Delete</button>
      </td>
  `;
  }

  function addRowJs(user) {
    var tableRef = document
      .getElementById("table_users")
      .getElementsByTagName("tbody")[0];
  
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = formatRow(user);
  }

  
function getListUsers() {
    fetch(
      "https://634e9e69f34e1ed8269171ce.mockapi.io/products",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }