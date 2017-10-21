$(function(){
	/*tab切换*/
$('.l_content li').click(function() {
           var i = $('.l_content li').index(this);
            $(this).addClass('act').siblings().removeClass('act');           
            $('.m_right_link span').eq(i).show().siblings().hide();
            $('.m_right_mian .tab_change').eq(i).show().siblings().hide();
   });
/*返回处理*/
$('.m_right_link span b').click(function(){
		$('.tag_chang').show();
		 $('.m_right_title a').html('');
		$('.sed_tab_change').hide();
		
});
/*链接维护tab切换*/
$('#link_info .tag_chang').click(function() {
        var i = $('#link_info .tag_chang').index(this);
        $(this).addClass('sed_act').siblings().removeClass('sed_act');                  
        $('.m_right_mian .sed_tab_change').eq(i).show().siblings().hide();
        /*获取当前标题*/
       var title= $(this).html();
      $('.m_right_title a').html(' - '+title);
       	
});

$('.Lins').click(function(){
	$('.tag_chang').show();
	 $('.m_right_title a').html('');
	$('.sed_tab_change').hide();
})

/*人员搜索*/
$('.saic_search').on('click',function(){
  alert();
  /*select value值*/
  var s_val=$('.search select').val();
  /*alert(s_val);*/
  /*人员搜索 input值*/
   var in_val=$('.search input').val();
  /* alert(in_val);*/
})

/*二维码点击切换*/
$('.two_code').on('mouseover',function(){
  $('.Scan').hide();

  $('.changeCode').show();
})
$('.two_code').on('mouseout',function(){
  $('.Scan').show();

  $('.changeCode').hide();
})
})