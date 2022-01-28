
$(window).on('load', ()=>{
    $("body").css("visibility", "visible")
    $("body").css("opacity", "1")
})
  

var sidebar_size = 0
var sidebar_expanded = true

function toggle_menu() {
    $(".sidebar").toggle("slide",{ direction: "left" })
}

function expand_menu() {
    if (sidebar_size == 0) {
        sidebar_size = $(".sidebar").outerWidth()
    }
    if (sidebar_expanded) {
        $(".sidebar").animate({
            width: '70px'
        }, 300);
        $(".text").fadeToggle(300);
        sidebar_expanded = false
    } else {
        $(".sidebar").animate({
            width: sidebar_size+'px'
        }, 300);
        $(".text").fadeToggle(300);
        sidebar_expanded = true
    }
}

$("#menu-toggle").click((e) => {    
    if (window.matchMedia('(max-width: 768px)').matches){
        toggle_menu()
    } else {
        expand_menu()
    }
})