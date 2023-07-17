let enunt_button = document.getElementById("meniu-problema-enunt")
let comments = document.createElement("li");
enunt_button.parentElement.appendChild(comments);
comments.innerHTML = enunt_button.innerHTML;
let child = comments.children[0];
let id_problema = document.getElementsByClassName("label label-primary")[0].innerText;
id_problema = id_problema.substring(1);
comments.innerHTML = '<a href="https://www.pbinfo.ro/comentarii/' + id_problema+'" title="Vezi enunțul problemei" data-id="' + id_problema+'">Comentarii</a>';