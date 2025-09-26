// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    // append the new id to the DOM
    document.body.innerHTML = data.id;
    return data;
  })
  .catch(error => {
    // append the error message to the DOM
    document.body.innerHTML = error.message;
    return error;
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { submitData };
}

