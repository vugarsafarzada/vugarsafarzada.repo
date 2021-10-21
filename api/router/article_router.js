const Articles = require("../articles");
const express = require("express");
const article_router = express.Router();

article_router.post('/', (req, res) => {
  Articles.Create(
    "Kotlin Break Continue ve Label",
    "Break continue genel olarak tüm yazılım dillerinde olan bir komuttur ve döngü içinde belli koşullarda döngüden çıkmaya ve ya döngüde belli kosullar da bir step atlamaya yarar. Yani belli bir koşulda döngüyü tamamen sonlandırabilir ve ya o adımı atlayıp bir sonraki adımdan devam etmemize yarar. Break komutu döngüyü tamamen sonlandırmak için kullanılır. Yani bir döngü çalışırken break komutu ile karşılaşırsa ondan sonra gelen kodları çalıştırmaz ve döngüyü sonlandırır. Nasıl olduğunu aşağıdaki kodda daha iyi anlayacağınızı düşünüyorum.Break komutunu nerde kullanabiliriz diyorsanız basit bir örnek vereyim. Elinizde uzunluğu 100 olan bir array var ve içinde 1 den 100 e kadar olan sayılar sırasız bir şekilde dizilmiş. İçinde 50 yi bulmaya çalışıyorsunuz. Bulduğunuz an artık daha döngünün dönmesine gerek yok. Bu durumda break komutu ile döngüden çıkıyorsunuz.",
    `${new Date()}`,
    "mascot-kotlin_androidhead.png",
  );
  res.json({message: "Successful"});
});

article_router.post('/update', (req, res) => {
  Articles.Update(
    "61701cf342daca4fc5812483",
    {title: "Vüqar Səfərzadə"}
  );
  res.json({message: "Update Successful"});
});

article_router.get('/:article_url', (req, res) => {
  Articles.Data({url: req.params.article_url})
    .then(function (result) {
      res.json(result);
    });
});

article_router.get('/', (req, res) => {
  Articles.Data({})
    .then(function (result) {
      res.json(result);
    });
});

module.exports = article_router;
