$(document).ready(function() {

    $("#signInForm").on('submit', function(e){
      loginUser();
      e.preventDefault();
      return false;
    });

    $("#signInForm").validate({
      messages: {
        "username": "Required field",
        "password" : "Required field"
      }
    });

    $.material.init();

    $(".productSearch i").on("click",function(){
      openSearchInput();
    });

});

function openSearchInput(){
    if($(".productSearch input").hasClass("open")){
      //do search
    }
    else {
      $(".productSearch input").addClass("open", 500)
    }
}

function loginUser(){
    if($("#signInForm").valid()){
      var dataToSend = {
        username : $('#username').val(),
        password: $('#password').val()
    };
    $('#sign-in-button').text('');
    $('#sign-in-button').html('<i class="fa fa-spinner fa-spin loading-icon"></i>');

    $.ajax({
      url: "/user-service/user/login",
      method: "POST",
      async: false,
      contentType: "application/json",
      data: JSON.stringify(dataToSend),
      success: function(){
        
      },
      failure: function(){
        $('#sign-in-button').text('SIGN IN');
      }
    });
  }
}
