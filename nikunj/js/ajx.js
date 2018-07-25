(function () { 

  function init(){ 
    $('#submitButton').click(submitButtonHandler); 
  } 

  function submitButtonHandler (evt) { 
     var tForm = document.getElementById('contact-form'); 
console.log(tForm);
      //prevent form submission 
      evt.preventDefault(); 
      evt.stopPropagation(); 

      $('').fadeOut(); 
      //make the AJAX call 
      $.ajax({ 
        url: '/form', 
        type: 'POST', 
        data: { 
          fname: tForm.fname.value, 
          email: tForm.email.value, 
          mobile: tForm.subject.value, 
          message: tForm.message.value 
        

        }, 
        success: postSuccessHandler 
      }); 
      tForm.reset(); 
  } 

  function postSuccessHandler (jsonData) { 
    var $data = $('data'); 
    //update the UI with the data returned from the AJAX call 
    $.each(jsonData, function (key, val) { 
      $data.append('<li><b>' +  key + '</b>'   + val + '</li>'); 
    }); 

    $('').fadeIn(); 
  }; 
//init on document ready 
$(document).ready(init);
})();