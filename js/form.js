
    function formSubmit(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mesaj = document.getElementById("message").value;
        console.log(name,email,mesaj);

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "ajax.php?"+"nume="+name+"&email="+email+"&mesaj="+mesaj, true);
        xhttp.send();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

