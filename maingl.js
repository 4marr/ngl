var InputText = document.getElementById('pesan');
        var Limit = document.getElementById("Limit");
        var limit = 100;
        Limit.textContent = 0 + "/" + limit;
 
        InputText.addEventListener('input', function () {
            var textLength = InputText.value.length;
            Limit.textContent = textLength + "/" + limit;
 
        })

var textarea = document.getElementById('pesan');
textarea.addEventListener("input", e => {
    textarea.style.height = 'auto';
    var height = e.target.scrollHeight;
    textarea.style.height = height + 'px';
    
    var submit = document.getElementById('kirim');
    var mess = document.getElementById('mes');
    if(textarea.value ==='' || textarea.value ==null) {
        submit.style.display = "none"
        mess.style.color = "red"
    }else if(textarea.value !== "" || textarea.value !== null){
        submit.style.display = "inline-block"
        mess.style.color = "green"
    }

})

var submit = document.getElementById('kirim');
    var mess = document.getElementById('mes');
    if(textarea.value === "" || textarea.value == null) {
        submit.style.display = "none"
        mess.style.color = "red"
    }else if(textarea.value !=='' || textarea.value !==null) {
        submit.style.display = "inline-block"
        mess.style.color = "green"
    }

function kirimPesan() {
    var text = "Pesan baru :"
    var pesan = document.getElementById("pesan");

    var gabungan = text + '%0A' + pesan.value;

    var token = '7180436531:AAFk8zEKwCJTeUGvN6fgw9rDqu6_iOHbCfk';
    var grup = '-4271367193';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
    window.open("sending.html")
}