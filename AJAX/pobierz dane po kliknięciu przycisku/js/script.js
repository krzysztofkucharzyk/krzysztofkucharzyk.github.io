let btn = document.getElementById('btn');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then(data => {
        console.log(data.userId);

        let pUserId = document.createElement('p');
        let pId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

        pUserId.innerText = `User ID: ${data.userId}`;
        pId.innerText = `ID: ${data.id}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pUserId);
        document.body.appendChild(pId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);

    })
    .catch(error => {
        console.log(error);
    })
}



btn.addEventListener('click', getData);
