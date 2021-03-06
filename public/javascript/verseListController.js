$(document).ready(()=>{
  console.log("ready");

  $('button#delete').on('click',(e)=>{
    console.log('click');
    let targetId = $(e.target).attr('verseid');
    let item = e.target.parentNode.parentNode;
    console.log(item);
    $.ajax({
      url: `/verse/delete/${targetId}`,
      method: 'GET'
    }).then((response)=>{
      console.log(response);
      $(item).remove();
    }).catch((err)=> console.log(err));
  })

  $('button#play').on('click', (e)=>{
    console.log('click');
    let targetId = $(e.target).attr('verseid');
    console.log(`/verse/show/${targetId}`);
    window.location.replace(`/verse/show/${targetId}`);
  })

  $('button#share').on('click', (e)=>{
    let url = document.baseURI;
    let targetId = $(e.target).attr('verseid');
    url = url.replace('list', 'show/' + targetId);
    let tweet = `Me ha gustado este verso en #poetryGenerator : ${url}`;
    let twitterBaseURL = `https://twitter.com/home?status=${encodeURIComponent(tweet)}`;
    window.open(twitterBaseURL, '_blank');
  })
})
