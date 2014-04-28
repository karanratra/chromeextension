document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('kill-buzz');


    // set the initial state of the checkbox
    var is_already_a_buzzkill = false;
    if(is_already_a_buzzkill == "true"){
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function(){
        // localStorage["be_a_buzzkill"] = input.checked;
        alert(1);
    });

     var button = document.getElementById("mybutton");
     button.addEventListener("click", function() {
      alert(2);
    }, false);

});


 