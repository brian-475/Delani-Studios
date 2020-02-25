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
    $(".container-4 .row .col-md-3 #imaging").mouseenter(function(){
        $(".container-4 .row .col-md-3 #first").show();
    })
    $(".container-4 .row .col-md-3 #imaging").mouseleave(function(){
        $(".container-4 .row .col-md-3 #first").hide();
    });
    $(".container-4 .row .col-md-3 #imaging").mouseenter(function(){
        $(".container-4 .row .col-md-3 #second").show();
    })
    $(".container-4 .row .col-md-3 #imaging").mouseleave(function(){
        $(".container-4 .row .col-md-3 #second").hide();
    })
    $(".container-4 .row .col-md-3 #imaging").mouseenter(function(){
        $(".container-4 .row .col-md-3 #third").show();
    })
    $(".container-4 .row .col-md-3 #imaging").mouseleave(function(){
            $(".container-4 .row .col-md-3 #third").hide();
     })
    $(".container-4 .row .col-md-3 #imaging").mouseenter(function(){
            $(".container-4 .row .col-md-3 #fourth").show();
    })
    $(".container-4 .row .col-md-3 #imaging").mouseleave(function(){
    $(".container-4 .row .col-md-3 #fourth").hide();
    })
  })
  // toggle function the second line 
  $("document").ready(function(){  
  $(".container-5 .row .col-md-3 #working").mouseenter(function(){
    $(".container-5 .row .col-md-3 #fifth").show();
  })
  $(".container-5 .row .col-md-3 #working").mouseleave(function(){
    $(".container-5 .row .col-md-3 #fifth").hide();
  });
})