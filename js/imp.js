import * as imp from './text-es.js';

$(document).ready(function() {
    $("#title1").text(imp.title1);
    $("#subtitle1").text(imp.subtitle1);
    $("#url1").attr("href", imp.url1);
    $("#logo").attr("src",imp.logo);
 });

var back_header = document.getElementById('header');
back_header.style = 'background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('+imp.url_background+') center center no-repeat; background-size: cover;';

