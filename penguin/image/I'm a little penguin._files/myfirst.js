
$(function() {
	
	//ロード or スクロールされると実行
	$(window).on('load scroll', function(){
		
		//ヘッダーの高さ分(80px)スクロールするとfixedクラスを追加
		if ($(window).scrollTop() > 80) {
			$('nav').addClass('fixed');
		} else {
			//80px以下だとfixedクラスを削除
			$('nav').removeClass('fixed');
		}
		
	});
	
});