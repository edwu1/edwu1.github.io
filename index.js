
var YofSectionOne = $(".skills-heading").offset().top * 1.1;
var bottomOfSkillsHeading = $(".skills-heading").offset().top + $(".skills-heading").outerHeight()*2;
var listHeight = $(".section-list").css( "height" );


// Setting the top of sections 1, 2, 3 & 4 for different screen sizes.
$(document).ready(function(){
    $("section:nth-of-type(2)").css("top", bottomOfSkillsHeading); //Same for each device.

    $("section:nth-of-type(3)").css("top", bottomOfSkillsHeading + 1.1 * $(window).height());
    $("section:nth-of-type(4)").css("top", bottomOfSkillsHeading  + 2 * 1.1 * $(window).height());
    $("section:nth-of-type(5)").css("top", bottomOfSkillsHeading  + 3 * 1.1 * $(window).height());
    $("#footer").css("top", bottomOfSkillsHeading + 4 * 1.1 * $(window).height());
});

window.addEventListener("scroll", function() {

    // Change background-color effect.
    if (window.scrollY > YofSectionOne) {
        $("body").addClass("style-black");
    } else {
        $("body").removeClass("style-black");
    }
});

