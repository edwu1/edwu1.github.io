
var widthID = "zero";
var YofSectionOne = $(".skills-heading").offset().top * 1.1;
var bottomOfSkillsHeading = $(".skills-heading").offset().top + $(".skills-heading").outerHeight()*2;;



// Setting the top of sections 1, 2, 3 & 4 for different screen sizes.
$(document).ready(function(){
    $("section:nth-of-type(2)").css("top", bottomOfSkillsHeading); //Same for each device.


    if (window.matchMedia("(max-width: 575px)").matches){
        // alert("This is a mobile device.");
        $("section:nth-of-type(3)").css("top", bottomOfSkillsHeading + 1800);
        $("section:nth-of-type(4)").css("top", bottomOfSkillsHeading  + 2 * 1800);
        $("section:nth-of-type(5)").css("top", bottomOfSkillsHeading  + 2 * 1800 + 900);
        $("#footer").css("top", bottomOfSkillsHeading + 2.5 * 1800 + 600);
        widthID = "one";

        //debug for extremely small screens.
        window.addEventListener("scroll", function(){
            if ($(document).scrollTop() + $(window).height() > $("section:nth-of-type(4)").offset().top + $("section:nth-of-type(4)").height()) {
                $("section:nth-of-type(4) .section-list").css("position", "fixed");
                $("section:nth-of-type(4) .section-list").addClass("style-translation-debug");  //Since there is a variable width, there is a height configuration for each device.

                if ($(document).scrollTop() < $("section:nth-of-type(5)").offset().top) {
                    $("section:nth-of-type(5) .section-list").css("position", "fixed");
                } 
            } else if ($(document).scrollTop() > $("section:nth-of-type(4)").offset().top) {
                let tempTop = $("section:nth-of-type(4) .section-list").css("top"); //Gets the top position of the element.
                //Resets position.
                $("section:nth-of-type(4) .section-list").removeClass("style-translation-debug"); 
                $("section:nth-of-type(4) .section-list").css("position", "relative");
                $("section:nth-of-type(4) .section-list").css("top", tempTop); // For a smooth transition.
            } 
        });

    } else if(window.matchMedia("(max-width: 767px)").matches) {
        // alert("This is a bigger mobile device");
        $("section:nth-of-type(3)").css("top", bottomOfSkillsHeading + 1000);
        $("section:nth-of-type(4)").css("top", bottomOfSkillsHeading  + 2 * 1000);
        $("section:nth-of-type(5)").css("top", bottomOfSkillsHeading  + 2 * 1000 + 1.1 * $(window).height());
        $("#footer").css("top", bottomOfSkillsHeading + 2 * 1000 + 1.1 * $(window).height() + 600);
        widthID="two";

    } else if(window.matchMedia("(max-width: 991px)").matches) {
        // alert("This is a tablet");
        $("section:nth-of-type(3)").css("top", bottomOfSkillsHeading + 850);
        $("section:nth-of-type(4)").css("top", bottomOfSkillsHeading  + 2 * 850);
        $("section:nth-of-type(5)").css("top", bottomOfSkillsHeading  + 2 * 850 + 1.1 * $(window).height());
        $("#footer").css("top", bottomOfSkillsHeading + 2 * 850 + 1.1 * $(window).height() + 600);
        widthID="three";

    } else {
        $("section:nth-of-type(3)").css("top", bottomOfSkillsHeading + 1.1 * $(window).height());
        $("section:nth-of-type(4)").css("top", bottomOfSkillsHeading  + 2 * 1.1 * $(window).height());
        $("section:nth-of-type(5)").css("top", bottomOfSkillsHeading  + 3 * 1.1 * $(window).height());
        $("#footer").css("top", bottomOfSkillsHeading + 4 * 1.1 * $(window).height());
        //no need to debug for laptops.
    }
});

window.addEventListener("scroll", function() {

    // Change background-color effect.
    if (window.scrollY > YofSectionOne) {
        $("body").addClass("style-black");
    } else {
        $("body").removeClass("style-black");
    }

    // Static text and background change effect on devices smaller than a tablet. Loop incompatible with scroll.
    if ($(document).scrollTop() > $("section:nth-of-type(5)").offset().top) {
        let tempTop = $("section:nth-of-type(5) .section-list").css("top");
    
        $("section:nth-of-type(5) .section-list").css("position", "relative");
        $("section:nth-of-type(5) .section-list").css("top", tempTop);
    } else {
        $("section:nth-of-type(5) .section-list").css("position", "fixed");
    }
    
    if (window.matchMedia("(max-width: 991px)").matches) {
        if ($(document).scrollTop() + $(window).height() > $("section:nth-of-type(3)").offset().top + $("section:nth-of-type(3)").height()) {
            $("section:nth-of-type(3) .section-list").css("position", "fixed");
            $("section:nth-of-type(3) .section-list").addClass("style-translation-" + widthID); 
    
            if ($(document).scrollTop() < $("section:nth-of-type(4)").offset().top) {
                $("section:nth-of-type(4) .section-list").css("position", "fixed");
            } 
        } else if ($(document).scrollTop() > $("section:nth-of-type(3)").offset().top) {
            let tempTop = $("section:nth-of-type(3) .section-list").css("top");
    
            $("section:nth-of-type(3) .section-list").removeClass("style-translation-" + widthID);
            $("section:nth-of-type(3) .section-list").css("position", "relative");
            $("section:nth-of-type(3) .section-list").css("top", tempTop);
        } 
        
        else if ($(document).scrollTop() + $(window).height() > $("section:nth-of-type(2)").offset().top + $("section:nth-of-type(2)").height()) {
            $("section:nth-of-type(2) .section-list").css("position", "fixed");
            $("section:nth-of-type(2) .section-list").addClass("style-translation-" + widthID);
    
            if ($(document).scrollTop() < $("section:nth-of-type(3)").offset().top) {
                $("section:nth-of-type(3) .section-list").css("position", "fixed");
            } 
        } else if ($(document).scrollTop() > $("section:nth-of-type(2)").offset().top) {
            let tempTop = $("section:nth-of-type(2) .section-list").css("top");
    
            $("section:nth-of-type(2) .section-list").removeClass("style-translation-" + widthID);
            $("section:nth-of-type(2) .section-list").css("position", "relative");
            $("section:nth-of-type(2) .section-list").css("top", tempTop);
        } else {
            $("section:nth-of-type(2) .section-list").css("position", "fixed");
        }
    }
});

