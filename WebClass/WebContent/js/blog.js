$(function(){
  $('#loginForm').submit(function (event) {
     // 자동으로 submit되는 것을 막기
     event.preventDefault();

     // id,pwd값 가져오기
     //document.getElemntById("id").value;
     var id = $('#id').val();
     var pwd = $('#pwd').val();


      $.post("http://httpbin.org/post",
              {"id": id, "pwd" : pwd},
              function(data) {
                 //alert(data.form.id + "로그인");
                 var myModal = $("#myModal");
                myModal.modal();
                myModal.find('.modal-body').text(id + "님 로그인되었습니다.");
              });
  });

  $('#signup').submit(function (event) {
     // 자동으로 submit되는 것을 막기
     event.preventDefault();

     // id,pwd값 가져오기
     //document.getElemntById("id").value;
     var name = $('#name').val();
     $.post("http://httpbin.org/post",
              {"name": name},
              function(data) {
                 //alert(data.form.id + "로그인");
                  var myModal = $("#myModal2");
                   myModal.modal();
                   myModal.find('.modal-body').text(name + "님 회원가입되었습니다.");
              });

  });

  var $form = document.querySelectorAll('#signup')[0],
      $submit = document.querySelectorAll('#signup input[type="submit"]')[0];

  // Bail if addEventListener isn't supported.
    if (!('addEventListener' in $form))
      return;

  // Events.
  // Note: If you're *not* using AJAX, get rid of this event listener.
    $form.addEventListener('submit', function(event) {

      event.stopPropagation();
      event.preventDefault();

      // Disable submit.
        $submit.disabled = true;

      // Process form.
      // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
      // but there's enough here to piece together a working AJAX submission call that does.
        window.setTimeout(function() {

          // Reset form.
            $form.reset();

          // Enable submit.
            $submit.disabled = false;
        }, 750);

    });
});