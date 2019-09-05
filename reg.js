function read_data( form ){
    var obj = {};

    var elements = form.querySelectorAll( "input, select, textarea" );

    for(var i = 0; i < elements.length; ++i ){
      var form = elements[i];
      var name = form.name;
      var value = form.value;

      if( name ){
        obj[name] = value;
      }
    }

    return JSON.stringify(obj);
  }


  function post_request( data ){
      const Http = new XMLHttpRequest();
      //const url = "server_url.com";
      Http.open("POST", url);
      Http.setRequestHeader("Content-Type", "application/json");
      Http.setRequestHeader("Access-Control-Allow-Origin", "*");
      Http.send(data);
  }

  document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById( "userData");
    var output = document.getElementById( "output" );
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var json = read_data(this);
      output.innerHTML = json;
      post_request(json);
    })
  })