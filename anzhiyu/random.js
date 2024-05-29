var posts=["2024/04/30/hello-world/","2024/05/30/2024.5.10/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };