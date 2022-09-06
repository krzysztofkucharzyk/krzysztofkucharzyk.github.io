let btn = document.getElementById('btn');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    })
}



btn.addEventListener('click', getData);
