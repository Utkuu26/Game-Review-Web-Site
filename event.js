$(function(){
    $("#submit").click(function(){
       var isim=$("#name").val();
       var nick=$("#nickname").val();
       var sifre=$("#password").val();
       var mail=$("#emailField").val();

       if(isim=='' || nick=='' || sifre=='' || mail=='' ){
          swal({
             title: "Hata", text: "İsim, Nick, Şifre ve E-Mail alanlarını doldurmak zorunludur.",icon: "error", button: "Tamam",
           });
        }

       else{
          swal({title: "Kayıt Olma İşlemi Başarılı",text: "Kayıt Olduğunuz İçin Teşekkürler",icon: "success",button: "Tamam",
           });
        }
    })