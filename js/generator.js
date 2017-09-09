window.onload = function(){

genWrap(function*(){
  var font = yield $.get("http://fonts.googleapis.com/css?family=Open+Sans:400,700,300");
  var style = yield $.get("../css/style.min.css");

});

function genWrap(generator){

  var gen = generator();

  function handle(yielded){
    if(!yielded.done){
      yielded.value.then(function(data){
        return handle(gen.next(data));
      })
    }
  }

  return handle(gen.next());
}


}