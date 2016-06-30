//show next situation
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});



//Win & Lose alerts

$("#Player_Wins_Cozumel").on("click", function(){
        alert("You've won the game!");
    });


$("#Player_Wins_San_Juan").on("click", function(){
        alert("You've won the game!");
    });


$("#Player_Loses_Cozumel").on("click", function(){
        alert("You've lost the game!");
    });
   

$("#Player_Loses_San_Juan").on("click", function(){
        alert("You've lost the game!");
    });
