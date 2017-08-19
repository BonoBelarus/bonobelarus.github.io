document.addEventListener('DOMContentLoaded', function(){
  var newsContent = document.querySelectorAll('.news-brief .txt');
  var size = 250

  for(var i = 0; i < newsContent.length; i++){
    var newsText = newsContent[i].innerText;
    
    if(newsText.length > size){
      newsContent[i].innerText = newsText.slice(0, size) + ' ...'
    }
  }
  
  
});