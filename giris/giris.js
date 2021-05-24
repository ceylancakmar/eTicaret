
function kontrol() {
    var username, pass, text ; 
    
    // Kullanıcı adının uzunluğunu username değişkenine aktar
    // Şifrenin uzunluğunu pass değişkenine aktar
    username= document.getElementById("kullaniciad").value.length;
    pass= document.getElementById("kullanicisifre").value.length;
    
    
    // Kullanıcı adı veya şifre girilmemişse
    if (username == 0 || pass == 0) { 
    text= "Kullanici adı veya sifre bos birakilamaz";
    }
    
    // Şifre 6 karakterden kısaysa
    else if (pass < 6) {
    text= "Sifre 6 karakterden kisa olamaz";
    }
    
    // Kullanıcı adı 3'den küçük 20'den fazlaysa 
    else if (username < 3 || username > 20) { 
    text= "Kullanici adi 3-20 karakter arasında olmalıdır"; 
    }
    
    // İkisi de uygunsa
    else { 
    text= "Giris Basarili" ;
    }
    
    
    document.getElementById("result").innerHTML = text;
   }