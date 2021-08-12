let fetchBtn = document.getElementById('FetchBtn');
fetchBtn.addEventListener('click', BtnHandler);

function BtnHandler() {
    setTimeout(() => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'Wali.txt', true)
        xhr.onload = function () {
            let obj = JSON.parse(this.responseText)['results'];
            let alert = document.getElementById('container')
            let str = "";
            for (key in obj) {
                str += `<div class="alert alert-primary" role="alert">
            ${obj[key].definition}
            </div>`
            }
            alert.innerHTML = str
        }
        xhr.onprogress = function () {
            Spinner();
        }
        xhr.send()
        console.log('Dictionary');
    }, 1000);
}
function Spinner() {
    let str1 = "";
    let spinner = document.getElementById('Cont1')
    str1 += `<div class="d-flex justify-content-center">
<div class="spinner-border" style="width: 3rem; height: 3rem; margin-bottom:20px" role="status">
<span class="visually-hidden">Loading...</span>
</div>
</div>`;

    spinner.innerHTML = str1
}