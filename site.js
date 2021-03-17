jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
}

function function2(){
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
}

window.addEventListener("load",function(){
    document.getElementById("button").addEventListener("click",function2());
});