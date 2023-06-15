/*
* scroll
*/

$(function () {
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function () {
		// スクロールの速度
		var speed = 300; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

  $('.js-has-subnav01').mouseover(function () {
		$('.subnav01').addClass('is-megamenu-show');
	})
  $('.js-has-subnav01').mouseleave(function () {
		$('.subnav01').removeClass('is-megamenu-show');
	})
  $('.js-has-subnav02').mouseover(function () {
		$('.subnav02').addClass('is-megamenu-show');
	})
	$('.js-has-subnav02').mouseleave(function () {
		$('.subnav02').removeClass('is-megamenu-show');
	})


  //スマホ時fixヘッダー
	$(window).scroll(function () {
		// windowの高さ取得
		let scroll = $(this).scrollTop();
		//スクロール位置が100以上、フッター未満
		if (100 < scroll) {
			$('.icon_nav_sp').addClass('is-icon-nav-fixed');
		} 
    else {
			$('.icon_nav_sp').removeClass('is-icon-nav-fixed');
		}
	});


  //ハンバーガーメニュー
  $('.hambager').on('click', function () {
		navOpen();
	});
  let navFlg = false;
  function navOpen() {
    if (!navFlg) {
      $('.hambager-content').addClass('is-ham-open');
      $('.mega-menu_sp').addClass('is-megamenu-open');
      $('.head-nav').addClass('is-sp_headnav-fixed');
      $('.c-ham-txt').text('CLOSE');
      navFlg = true;
    } else {
      $('.hambager-content').removeClass('is-ham-open');
      $('.mega-menu_sp').removeClass('is-megamenu-open');
      $('.head-nav').removeClass('is-sp_headnav-fixed');
      $('.c-ham-txt').text('');
      navFlg = false;
    }
  }


  //アコーディオンをクリックした時の動作
  $('.title').on('click', function() {//タイトル要素をクリックしたら
    $('.box').slideUp(300);//クラス名.boxがついたすべてのアコーディオンを閉じる
      
    var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去    
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
  });


  //スクロールフェードイン
  const fadeIn = document.querySelectorAll(".fadeIn");
  const options = {
    rootMargin: '0px',
    threshold: 0.5
  };
  const observer = new IntersectionObserver(showElement, options);
  fadeIn.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });
  function showElement(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }


});