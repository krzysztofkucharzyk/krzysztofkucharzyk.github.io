let end = 0;

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(response => response.json())
    .then(data => {
        for (let user of data) {
            let pUserId = document.createElement('p');
            let pName = document.createElement('p');
            let pUserUrl = document.createElement('p');
            let body = document.body;

            pUserId.innerText = `User ID: ${user.id}`;
            pName.innerText = `ID: ${user.name}`;
            pUserUrl.innerHTML = `Title: ${user.website} <br />----------`;
    
            body.appendChild(pUserId);
            body.appendChild(pName);
            body.appendChild(pUserUrl);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

const scrollToEndOfPage = () => {
    let doc = document.documentElement;
    let scrollHeight = doc.scrollHeight;
    let scrollTop = doc.scrollTop;
    let clientHeight = doc.clientHeight;
    let suma = Math.ceil(scrollTop + clientHeight);

    if (suma >= scrollHeight) {
        end += 1;
        getData();
    }

    
}



window.addEventListener('scroll', scrollToEndOfPage);