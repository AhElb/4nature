$(document).ready(function(){





$("#co-founder").click(function(){
                $("#i1").removeClass("active2");
                $("#i2").addClass("active2");
                $("#i3").removeClass("active2");

                 



                  $(".about-company").removeClass("wow slideInRight animated");

          $(".about-company").addClass("wow slideOutRight animated");


            $(".about-company").css("position", "absolute");
                        $(".about-company").css("display", "none");



                            $(".designer-body").removeClass("wow slideInLeft animated");

            $(".designer-body").addClass("wow slideOutLeft animated");

  $(".designer-body").css("display", "none");
    $(".designer-body").css("position", "absolute");



                                  $(".founder-body").removeClass("wow slideOutLeft animated");

          $(".founder-body").addClass("wow slideInLeft animated");

  $(".founder-body").css("display", "block");
    $(".founder-body").css("position", "relative");


});




$("#4-compaany").click(function(){
                         $("#i2").removeClass("active2");
                          $("#i3").removeClass("active2");

                    $("#i1").addClass("active2")


                      $(".about-company").removeClass("wow slideOutRight animated");

 $(".designer-body").removeClass("wow slideInLeft animated");

            $(".designer-body").addClass("wow slideOutLeft animated");

  $(".designer-body").css("display", "none");
    $(".designer-body").css("position", "absolute");

       


                      $(".founder-body").removeClass("wow slideInLeft animated");

            $(".founder-body").addClass("wow slideOutLeft animated");

  $(".founder-body").css("display", "none");
    $(".founder-body").css("position", "absolute");

       
          $(".about-company").addClass("wow slideInRight animated");
            $(".about-company").css("position", "relative");
                        $(".about-company").css("display", "block");





          


});




$("#designer").click(function(){
                         $("#i1").removeClass("active2");
                         $("#i2").removeClass("active2");


                    $("#i3").addClass("active2")



                      $(".about-company").removeClass("wow  slideInRight animated");
                      $(".founder-body").removeClass("wow slideInLeft animated");

            $(".founder-body").addClass("wow slideOutLeft animated");

  $(".founder-body").css("display", "none");
    $(".founder-body").css("position", "absolute");

       
          $(".about-company").addClass("wow slideOutRight animated");
            $(".about-company").css("position", "relative");
                        $(".about-company").css("display", "none");








                                  $(".designer-body").removeClass("wow slideOutLeft animated");

          $(".designer-body").addClass("wow slideInLeft animated");

  $(".designer-body").css("display", "block");
    $(".designer-body").css("position", "relative");
          


});

});