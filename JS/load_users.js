const table = document.querySelector('#table tbody');

function load_users(){
    fetch('./JS/users.json')
        .then(response => response.json())
        .then(users => {
            users.forEach(users => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${users.id}</td>
                    <td>${users.name}</td>
                    <td>${users.lastName}</td>
                    <td>${users.email}</td>
                    <td>${users.college}</td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => console.log('Error : ' + error.message ))
}

load_users();