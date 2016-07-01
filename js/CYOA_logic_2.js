//Options for Cozumel file 

$(document).ready (function(){

San_Juan_Intro = {
html: '<div id="San_Juan_Intro"><p>You decide to take the flight to San Juan. <br> Although you’ve boarded on time, the heavy knot persists in your stomach.<br>A young man sits in the seat beside you and introduces himself with a smile.</p><p class="transient">You’re in no mood for conversation, but he begins speaking to you as if you had known each other for years.<br> You find this strange, and respond with one-word answers. <br> Clearly unable to take a hint, the man continues on.</p><p class="transient">"So, what brings you to Puerto Rico?" he asks.<br> For a moment, you consider asking for help, but then remember what the recording said. <br> Do you <a href="#Player_Loses_San_Juan">ask for help</a> or <a href="#Player_Wins_San_Juan">keep to yourself?</a></p>'};

Keep_Quiet = {
    html: '<div id="Keep_Quiet"><p>You will not take any chances on the life of your loved one.<br> With a forced smile, you reply "I am going on vacation." <br> Eventually, he leaves you alone.<br>Throughout the 10 hour flight, you anxiously wonder what will happen once you arrive to Puerto Rico.</p><p>After a 10 hour flight, the plane finally descends. <br> As you approach the terminal, the phone rings, displaying a blocked number.<br> Another recording of she same voice says, Meet us at Castillo San Felipe del Morro."</p>\ <p>You exit the terminal, rent a car and drive to the castle of El Morro.<br>The black, 500-year-old fortress gives you an uneasy feeling. <br> Suddenly, you remember that it was a prison and many have died there.</p>\ <p>As you purchase your ticket, the security gaurd hands you a map with two spots marked. <br> One is the cementary, the other is the tunnels. <br> "We were expecting you. The fortress closes in one hour.", he whispers <br> Do you go to <a href="#Player_Wins_San_Juan"> the tunnels</a> or <a href="#Player_Wins_San_Juan"> the cementary</a>?</p></div>'
};

Ask_For_Help={
    html: '<div id="Ask_For_Help"><p>Even though you do not trust strangers, an intense feeling of desperation causes you to ask for help.\ On a napkin, you write out “I’m in danger.”\ You look at the man closely in an effort to communicate your fear, then you slide the napkin onto his tray.</p>He reads it over, but you see no change in his expression.</p><p>He responds “I know, (your name). You should not have done this. We will regret it.”\ You then remember seeing him in the terminal before boarding, and realize that he’s been following you all along.</p></div>'
};


Tunnels={
    html: '<div id="Tunnels"><p>You head toward the tunnels. As you walk through them, the lights dim. <br> A figure approaches you and asks for the phone you had recieved earlier."</p></div'
};

Player_Wins_San_Juan = {
    html: '<div id="Player_Wins_San_Juan"><p> As he opens the back and pulls out the memory card, your loved one comes running from around a corner, into your arms. <br> "You have found me! Lets get out of here.</p></div>'
};

Cementary = {
    html: '<div id="Cementary"><p>You go to the cementary: As you enter the cementary, you read a sign that says "Many have entered, none have left." A man approaches you. As he comes closer, you see that he is the man from the airplane. As he pulls a concealed weapon from his belt, he says "You have failed." and shoots you.</p></div>'};

Player_Loses_San_Juan={
   html:'<div id="Player_Loses_San_Juan"><p>Suddenly, a blow to the opposite side of the plane sends you flying into the seat in front of you. You heart sinks to your knees and you become frozen in your seat as the pilots trembling voice says "We have been hit by a drone".</p>'};


var b = [];
b.push(San_Juan_Intro);
b.push(Keep_Quiet);
b.push(Ask_For_Help);
b.push(Tunnels);
b.push(Player_Wins_San_Juan);
b.push(Cementary);
b.push(Player_Loses_San_Juan);

for (var i = 0; i < b.length; i++) {

$("body").append(b[i].html);
}


$("div").hide();

$("#San_Juan_Intro").show();


$("#Keep_Quiet_Link").click(function(){
    $("#San_Juan_Intro").hide();
    $("#Keep_Quiet").show();
});

$("#Ask_For_Help_Link").click(function(){
    $("#San_Juan_Intro").hide();
    $("#Ask_For_Help").show();
});

$("#Tunnels_Link").click(function(){
    $("#Keep_Quiet").hide();
     $("#Player_Wins_San_Juan").show();
});

$("#Cementary_Link").click(function(){
    $("#Keep_Quiet").hide();
     $("#Player_Loses_San_Juan").show();
});

$("#Final_Dive_Link").click(function(){
    $("#Follow_Turtle").hide();
    $("#Player_Wins_Cozumel").show();
});


/*$("#show").click(function(){
    $("p").show();
});*/


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
});