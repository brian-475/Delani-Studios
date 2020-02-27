$("document").ready(function(){     //first image toggle
    $("#desn").click(function(){
        $(".design2").toggle();
    })
})

$("document").ready(function(){   //second image toggle
    $("#desn-2").click(function(){
        $(".twenty").toggle();
    })
})
$("document").ready(function(){     //third image toggle
    $("#fear").click(function(){
        $(".building").toggle();
    })
})
$("document").ready(function(){             // toggle function the first line
    $(".container-4 .row .col-md-3 #im").mouseenter(function(){
        $(".container-4 .row .col-md-3 #first").show();
    })
    $(".container-4 .row .col-md-3 #im").mouseleave(function(){
        $(".container-4 .row .col-md-3 #first").hide();
    });
    $(".container-4 .row .col-md-3 #ima").mouseenter(function(){
        $(".container-4 .row .col-md-3 #second").show();
    })
    $(".container-4 .row .col-md-3 #ima").mouseleave(function(){
        $(".container-4 .row .col-md-3 #second").hide();
    })
    $(".container-4 .row .col-md-3 #imag").mouseenter(function(){
        $(".container-4 .row .col-md-3 #third").show();
    })
    $(".container-4 .row .col-md-3 #imag").mouseleave(function(){
            $(".container-4 .row .col-md-3 #third").hide();
     })
    $(".container-4 .row .col-md-3 #imagi").mouseenter(function(){
            $(".container-4 .row .col-md-3 #fourth").show();
    })
    $(".container-4 .row .col-md-3 #imagi").mouseleave(function(){
    $(".container-4 .row .col-md-3 #fourth").hide();
    })
  })
  // toggle function the second line 
  $("document").ready(function(){  
  $(".container-5 .row .col-md-3 #wo").mouseenter(function(){
    $(".container-5 .row .col-md-3 #fifth").show();
  })
  $(".container-5 .row .col-md-3 #wo").mouseleave(function(){
    $(".container-5 .row .col-md-3 #fifth").hide();
  });
  $(".container-5 .row .col-md-3 #wor").mouseenter(function(){
    $(".container-5 .row .col-md-3 #sixth").show();
  })
  $(".container-5 .row .col-md-3 #wor").mouseleave(function(){
    $(".container-5 .row .col-md-3 #sixth").hide();
  })
  $(".container-5 .row .col-md-3 #work").mouseenter(function(){
    $(".container-5 .row .col-md-3 #seventh").show();
  })
    $(".container-5 .row .col-md-3 #work").mouseleave(function(){
     $(".container-5 .row .col-md-3 #seventh").hide();
    })
    $(".container-5 .row .col-md-3 #worki").mouseenter(function(){
        $(".container-5 .row .col-md-3 #none").show();
    })
    $(".container-5 .row .col-md-3 #worki").mouseleave(function(){
        $(".container-5 .row .col-md-3 #none").hide();
    })
});






// user interface
  $("#button").click(function () {
      event.preventDefault()
     var name= $("#name").val();
     var email= $("#email").val();
      var message=$("#textarea").val();
      if(name==="" || email==="" || message===""){
          alert("Kindly key in your information in the output below!");
         
      }
      else{
          alert("Good work we have received your information and we are on progress!");
    
      }

  });

