function fetchData() {
    fetch('example.json')
      .then((res) => res.json()) // converting to json
      .then((jsonData) => console.log(jsonData));
  }
  
  function fetchShowData() {
    fetch('example.json')
      .then((res) => res.json()) // converting to json
      .then((jsonData) => {
        const showDataDiv = document.getElementById('showData');
        showDataDiv.innerHTML = '';
        jsonData.forEach((person) => {
          showDataDiv.innerHTML += `<li> ${person.name}  </li>`;
        });
      });
  }

  // gets data from some api
function fetchAPIData() {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(jsonData => {
    const showDataDiv = document.getElementById('showData')
    showDataDiv.innerHTML = ''
    jsonData.data.forEach((user) => (
      showDataDiv.innerHTML += `
      <img src=${user.avatar} />
      <div>${user.first_name} ${user.last_name}</div>
      `
      ))
      
    })
}