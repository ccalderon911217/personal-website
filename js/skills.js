$(document).ready(function() {
$("#skill-nodejs").click(function(){
    //to highlight it
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    //to un-highlight everything else
    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $("#pb1").animate({
      width: '85'+'%',
      backgroundColor: "#E57C04"
    }, 500);
  });
  
  $("#skill-perl").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $("#pb1").css("background-color","green");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "99%",
      backgroundColor: "#FE7F2D"
  }, 500);
  });
  
  $("#skill-java").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $("#pb1").css("background-color","light-orange");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "60%",
      backgroundColor: "#FAA300"
  }, 500);
  });

  $("#skill-aws").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "50%",
      backgroundColor: "#F3B700"
  }, 500);
  });

  $("#skill-postgresql").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "75%",
      backgroundColor: "#E57C04"
  }, 500);
  });

  $("#skill-mongodb").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "80%",
      backgroundColor: "#E57C04"
  }, 500);
  });

  $("#skill-mysql").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "70%",
      backgroundColor: "#FAA300"
  }, 500);
  });

  $("#skill-jquery").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "30%",
      backgroundColor: "#FFD97D"
  }, 500);
  });

  $("#skill-javascript").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "30%",
      backgroundColor: "#FFD97D"
  }, 500);
  });

  $("#skill-git").click(function(){
    $(this).css("background-color", "#FFF");
    $(this).children("span").css("color", "#F67E22");

    $(".skill-item").not(this).css("background-color", "#FFF");
    $(".skill-item").not(this).children("span").css("color", "rgba(0,0,0,0.4)");

    $(".progress-bar").animate({
      width: "95%",
      backgroundColor: "#FE7F2D"
  }, 500);
  });

  $('body').click(function (e){
      var skill =  /.*skill.*/;
  if (!e.target.className.match(skill) && e.target.className != 'sub')
      {
    $(".progress-bar").animate({
        width: "0%"
    }, 0);
    $(".skill-item").css("background-color", "#FFF");
    $(".skill-item").children("span").css("color", "rgba(0,0,0,0.4)");
    return;
      }

        
  });

});