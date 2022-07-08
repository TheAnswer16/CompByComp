
$('#mb-nav').hide();

function toggleMobileNav(){
    console.log("kk")
    $('#mb-nav').animate(
        {
            width:"toggle"
        }, 500
    )

    $('.open-mode').fadeToggle(500);
}


