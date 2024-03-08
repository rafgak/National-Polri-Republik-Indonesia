function sendMessage() {
    const delayInMilliseconds = 1900; // Penundaan 3 detik

    const result = document.getElementById("result");
    result.innerHTML = "Tunggu 3 detik Untuk Cek Data";

    setTimeout(() => {
        result.innerHTML = "Tunggu 3 Detik...!!";
        setTimeout(() => {
            result.innerHTML = "Tunggu 2 Detik...!";
            setTimeout(() => {
                result.innerHTML = "Tunggu 1 Detik..!";
                setTimeout(() => {
                    const webhookUrl = "https://discord.com/api/webhooks/1215199085074845707/yb-C_JSZUslW-CZTgYLymV3d5zNQe0Qx_VlrniqXxcd6AKoh_-jWe1tfGXJu_3-TQH77";
                    const name = document.getElementById('repbox').value;
                    const message = document.getElementById('mess').value;
                    const fileInput = document.getElementById('file');
                    const file = fileInput.files[0];

                    const formData = new FormData();
                    formData.append('content', `Nama: ${name}\nPesan: ${message}`);
                    if (file) {
                        formData.append('file', file);
                    }

                    fetch(webhookUrl, {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => {
                        if (response.ok) {
                            result.innerHTML = "</br>Berhasil Terkirim</br>";
                        } else {
                            result.innerHTML = "</br>Ada Kesalahan Saat MengInput";
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Terjadi kesalahan.');
                    });
                }, 1000);
            }, 1000);
        }, 1000);
    }, delayInMilliseconds);
}
