// 划入显示
document.getElementById("vx").onmousemove=function(){
    document.getElementById("vx_tan").style.display="block"
}
document.getElementById("vx").onmouseout=function(){
    document.getElementById("vx_tan").style.display="none"
}
//点击对号
$('.cartype li.scar').click(function(){
    var cartypeCode = $(this).data('cartype');
    $('.btn-details').attr('data-code',cartypeCode);
    $('.cartype li').removeClass('on');
    $('.cartype li .unselected').removeClass('selected');
    $(this).addClass('on');
    $(this).children('.unselected').addClass('selected');
});