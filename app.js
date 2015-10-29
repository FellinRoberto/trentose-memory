/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    
    var index=1;
    for(var i=0;i<data.length;i++){
        $(".cards").append(" <li id=\""+data[i]+"\" class=\"done\">"+
                "<h3>"+data[i]+"</h3>"+
                "</li> ");
        console.log(data[i]);
    }
    
    $(".opt-start").click(function(){
        $(".done").addClass("hidden").removeClass("done"); 
        
        $(".hidden").click(function(){
            
            var c=parseInt($(this).children().text());
            
            $(this).addClass("done").removeClass("hidden"); 
       
            if(c!==index){
                alert("ha perso");
                location.reload();
            }
            else if(index===data.length){
                alert("ha vinto");
                location.reload();
            }
            index++;
            
        });
        
    });



});


