var random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_no]);

var sketch_name=quick_draw_data_set[random_no];

document.getElementById("drawn").innerHTML="Sketch to be drawn :"+ sketch_name;

var timer_check="";
var timer_counter=0;
var drawn_sketch="";
var answer_holder="";
var score=0;

