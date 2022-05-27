$(function(){
  // #back内のaタグがクリックされた時の処理
  $('#back a').on('click',function(event){
    // $('#id名 要素名')
    // id="back"内のaタグがクリックされたとき
    // イベント発生時に行われる処理
    $('body,html').animate({
      scrollTop:0
    },800);
    // $('セレクタ名').animate({
    //   変化対象のプロパティ名:変化値
    // },アニメーションの動作時間);
    event.preventDefault();
  });
});