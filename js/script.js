document.getElementById("Nama_Kamu").textContent = get_nama().toUpperCase();

function get_nama(){

    let nama;
    while (true) {
        nama = prompt("Silahkan masukan nama anda :");
        if (nama === null) {
            alert("Anda membatalkan input. Silahkan coba lagi.");
        } else if (nama.trim() === "") {
            alert("Nama tidak boleh kosong. Silahkan coba lagi.");
        } else {
            break;
        }
    }

    return nama
}

// Email Formatting 

function email_alert(condition) {
    
    // console.log(condition)
    
    if (condition) {
        document.getElementById('EmailAlert').textContent = " "
    } else{
        document.getElementById('EmailAlert').textContent = "Masukan format email yang benar"
    }

}

function email_formating(email){
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return email_regex.test(email)
}

document.querySelector('input[type="email"][id="email"]').addEventListener('input', function(event) {
    //console.log('Final value:', event.target.value);
    
    if (event.target.value == null || event.target.value == "") {
        
        email_alert(true)
        console.log("he;")
        
        
    } else {
        
        condition = email_formating(event.target.value)
        email_alert(condition)
    }
    
});

// Phone Number Formatting

function phone_number_formatting( country, numberStr ){
    return  country + numberStr.replace(/^0+/, '') || '0';
}


// Country Code

document.addEventListener('DOMContentLoaded', function() {
    const countryCodeSelect = document.getElementById('country-code');    
    // Generate country codes from +1 to +199
    for (let i = 1; i <= 176; i++) {
        const option = document.createElement('option');
        option.value = `+${i}`;
        option.textContent = `+${i}`;
            
        // Set some common country codes as default
        // if (i === 1) option.selected = true; // USA/Canada
        // if (i === 44) option.textContent = '+44 UK';
        // if (i === 91) option.textContent = '+91 India';
        if (i === 62) {
            //option.textContent += ' (INA)';
            option.selected = true;
        }
            
        countryCodeSelect.appendChild(option);
    }
});


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    nama = document.getElementById('nama').value
    email = document.getElementById('email').value
    phone = document.getElementById('phone').value
    countryCode = document.getElementById('country-code').value
    message = document.getElementById('message').value

    phone_format = phone_number_formatting(countryCode, phone)
    //console.log(phone_format);

    email_format = email_formating(email)
    // console.log(email_format)

    if (email_format){

        alert(`Terima Kasih telah mengirimkan pesan kepada kami ${nama} \nPesan anda: \n\n${message}` )
        
    }
 
});