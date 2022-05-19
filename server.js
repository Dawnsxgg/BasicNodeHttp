// Http Modülünü Ekledik
var http =require ("http");
//Burada HTTP serverimizi Oluşturduk
http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
  }).listen("8080");
  // sondaki ".listen" diye başlayan ifade ise http serverimizin hangi portu dinleyeceğini gösterir
  //8080 portunu dinliyecek
