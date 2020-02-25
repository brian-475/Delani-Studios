$("document").ready(function(){     //first image toggle
    $("#desn").click(function(){
        $(".twelve").toggle();
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
$("document").ready(function(){
    $(".imaging").mouseenter(function(){
        $(".firstimg").hide();
    })
    $(".imaging").mouseenter(function(){
        (".firstimg").show();
    });
})
/*$("document").ready(function(){
    $("#contact-2").submit(function(event){
        var name = $("#name").val();
        var   email= $("#email").val();
        var myComment=$("#textarea").val();
        if(name==='' || email==='' || myComment===''){
        alert("please fill in the form");
        }
        else {
            alert(name+"Your information has been successfully submitted");
        }
        event.preventDefault();
        $("name").val();
        $("email").val();
        $("#textarea").val();
    });*/