$(document).ready(function(){

    $('#btn').click(function(){
        $.get('https://akademia108.pl/api/ajax/get-post.php', function(data) {

            let pUserId = $("<p></p>").text(`User ID: ${data.userId}`);
            let pId = $("<p></p>").text(`ID: ${data.id}`);
            let pTitle = $("<p></p>").text(`Title: ${data.title}`);
            let pBody = $("<p></p>").text(`Body: ${data.body}`);

            $('body').append(pUserId, pId, pTitle, pBody);

        })
    });

    $('#btnJson').click(function(){
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
                let pUserId = $("<p></p>").text(`User ID: ${data.userId}`);
                let pId = $("<p></p>").text(`ID: ${data.id}`);
                let pTitle = $("<p></p>").text(`Title: ${data.title}`);
                let pBody = $("<p></p>").text(`Body: ${data.body}`);
            $('body').append(pUserId, pId, pTitle, pBody);
            })
            .fail(function(error){
                console.error(error);
            })
    });


});