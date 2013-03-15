"use strict";
$(document).ready(function() {
    $.getJSON('cv.json', function(cv) {
        $("body").css("background",cv.background);
        $(".profileimg div:first-child").css("background",cv.background);
        $("article").css("background",cv.foreground);
        $("header img").attr("src",cv.profileimage);
        $("header h1").html(cv.name);
        for(var i in cv.sections) {
            var ul = "<ul>";
            for(var j in cv.sections[i].ul ) {
                if(!$.isPlainObject(cv.sections[i].ul[j])) {
                    ul += "<li>"+cv.sections[i].ul[j]+"</li>";
                }
                else {
                    ul += "<li>";
                    ul += "<h2>"+cv.sections[i].ul[j].h2+"</h2>";
                    ul += "<h3>"+cv.sections[i].ul[j].h3+"</h3>";
                    ul += "<ul>";
                    for(var k in cv.sections[i].ul[j].ul){
                        ul += "<li>"+cv.sections[i].ul[j].ul[k]+"</li>";
                    }
                    ul += "</ul>";
                    ul += "</li>";
                }
            }
            ul += "</ul>";
            $("article").append("<section><h1>"+cv.sections[i].h1+"</h1>"+ul+"</section>");
        }
        $("section").wrapAll('<div/>');
        $( "article > div" ).accordion({
            header: "> section > h1",
            heightStyle: "content",
            collapsible: true
        });
        $("article").fadeIn("slow", function() {
            $('.profileimg img').animate({
                    top: '0',
                }, {
                duration: 2500,
                specialEasing: {
                    top: 'easeOutBounce'
                },
                complete: function() {
                    
                }
            });
        });
    });
});
/*
for(var i in cv.sections) {
            var ul = "<ul>";
            for(var j in cv.sections[i].ul ) {
                if(!$.isPlainObject(cv.sections[i].ul[j])) {
                    ul += "<li>"+cv.sections[i].ul[j]+"</li>";
                }
                else {
                    ul += "<li>";
                    ul += "<h2>"+cv.sections[i].ul[j].h2+"</h2>";
                    ul += "<h3>"+cv.sections[i].ul[j].h3+"</h3>";
                    ul += "<ul>";
                    for(var k in cv.sections[i].ul[j].ul){
                        ul += "<li>"+cv.sections[i].ul[j].ul[k]+"</li>";
                    }
                    ul += "</ul>";
                    ul += "</li>";
                }
            }
            ul += "</ul>";
            $("#accordion").append("<section><h1>"+cv.sections[i].h1+"</h1>"+ul+"</section>");
        }
*/