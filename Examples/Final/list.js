

window.onload = function (e) {
  //   addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};

function gotoDetail(id) {
  console.log(window.location.href, id);
  window.location.href = "./detail.html?id="+id;
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

function deleteRowAPI(elm,id) {
  fetch(
    "https://634e9e69f34e1ed8269171ce.mockapi.io/person/"+id,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteRowJs(elm)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


function formatRow(user) {
  return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.age}</td>
    <td>${user?.address}</td>
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
    "https://634e9e69f34e1ed8269171ce.mockapi.io/person?page=1&limit=10",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}