$(document).ready(function() {
  $('.btn-collapse-sidebar').click(function(){
    $(this).toggleClass('click');
    $('.side-navbar').toggleClass('show');
    $('.content-area').toggleClass('content-show');
    $('.left-side-bar').toggleClass('left-show');
    $('p').toggleClass('p-show');
  });
  $('.pages-btn').click(function(){
    $('.option-list .pages-show').toggleClass('show')
    $('.option-list .first').toggleClass('rotate')
  });
  $('.gotcha-btn').click(function(){
    $('.option-list .gotcha-show').toggleClass('show1')
    $('.option-list .second').toggleClass('rotate')
  })
  $('.list').click(function(){
    $(".list").removeClass("active");
    $(this).addClass("active")
  })
});