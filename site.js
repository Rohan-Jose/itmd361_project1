jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

function function2(){
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
}

window.addEventListener("load",function(){
    document.getElementById("button").addEventListener("click",function2());
});

function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (document.getElementById("fname") == "") {
        alert("First Name must be filled out");
    } else if (document.getElementById("lname") == "") {
        alert("Last Name must be fille out");
    } else if (document.getElementById("email") == "") {
        alert("Email must be filled out");
    } else if (document.getElementById("password") == "") {
        alert("Password must be filled out");
    } else {
        alert("Thank you for signing up");
    };
};

window.addEventListener("load",function(){
    document.getElementById("submit").addEventListener("click",validateForm());
});