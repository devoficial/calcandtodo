//markoff the list items 

$("ul").on("click","li",function(){
       $(this).toggleClass("done");
    });

// Removes the list items

$("ul").on("click","span",function(event){
        $(this).parent().fadeOut(600,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });


// calculator button handler

$("#cal").on("click",()=>{
    $("#mainc").toggle().attr("placeholder","calculate");
    $("#maint").hide();
    $(".head").slideUp(1000);
    $("div .jumbotron .tod").hide();
    $("div .jumbotron .cal").slideToggle(1000);
    
});

// todo list button handler

$("#tod").on("click",()=>{
    $("#maint").toggle().attr("placeholder","Add a new todo");
    $("#mainc").hide()
    $(".head").slideUp(1000);
    $("div .jumbotron .cal").hide();
    $("div .jumbotron .tod").slideToggle(1000);
});

// Input handler for adding todos 

$("#maint").on("keypress",function(event){
              

    if(event.which ===13){
        let $value = $("#maint").val(); 

        $(this).val("");

        let $list = $("<li class='item'><span>"+"\n"+
        "<i class='fas fa-trash'></i></span>"
        +$value+"</li>");

        $(".todl").append($list);            
    }

     
});

// input handler for calculator 
var $text = "";


$(".data").on("click keypress", function(event){

    if($(this).text() === "="){
       $output = eval($text);
       $("#mainc").val($output);
       $text = "";
              
    }else if ($(this).text()==="c"){
        $("#mainc").val("");
        $text = "";
    }else{
        $text += $(this).text();
        $("#mainc").val($text);
    }

    
})

// using keyboard numbers

var $text2 = "";
 
$("#mainc").on("keypress",function(event){
    
    if($("#mainc").val() !=="" && event.which == 13){
        var $result = eval($("#mainc").val());
        $("#mainc").val($result);
    }
})

