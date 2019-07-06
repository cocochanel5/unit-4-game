var random;
var lost = 0;
var win = 0;
var crystalnum = 0;

var startandreset = function () {

    $(".crystaldiv").empty();

    var crystalimages = [
        "./assets/images/darkbluegem.png", 
        "./assets/images/greengem.png", 
        "./assets/images/purplegem.png", 
        "./assets/images/redgem.png"
    ]

    random = Math.floor(Math.random() * 101 ) + 19;

    $(".textarea").html(random);

        for (var i = 0; i < 4; i++) {
            
            var randomNum = Math.floor(Math.random() * 11) + 1;
            
            var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-randomNum": randomNum
            });

            crystal.css({
                "background-image":"url('" + crystalimages[i] + "')",
                "background-size":"cover"
            });

            $(".crystaldiv").append(crystal);
        }
    $(".last").html("Your total score is: " + crystalnum);

}


startandreset ();


$(document).on("click", ".crystal", function () {


    var num = parseInt($(this).attr("data-randomNum"));
    crystalnum  += num;

    $(".last").html("Your total score is: " + crystalnum);

    console.log(crystalnum)

    if(crystalnum > random) {
        lost++;

        $(".lost").html("Losses: " + lost);

        crystalnum = 0;

        startandreset();
    }

    else if(crystalnum === random) {
        win++;

        $(".win").html("Wins: " + win);

        crystalnum = 0;

        startandreset();
    }

});