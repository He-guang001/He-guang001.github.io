var posts=["2024/04/30/hello-world/","2024/05/02/记2024五一假期（一）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };