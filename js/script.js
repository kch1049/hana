$(()=>{                       
    $('.btn-nav').click(()=>{
        $('header nav').fadeToggle(300);
    })
    $('#na-num').change(()=>{
        let naNum = $('#na-num').val();
        $('.lang img').attr('src','./images/flag_'+naNum+'.svg');
    })
    $(window).scroll(()=>{
        if($(window).scrollTop()>=500) {
            $('#header').css('position','fixed').css('background','white');
        }else{
            $('#header').css('position','absolute').css('background','transparent');
        }
    })
})