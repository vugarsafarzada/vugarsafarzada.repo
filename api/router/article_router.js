const Articles = require("../articles");
const express = require("express");
const article_router = express.Router();

article_router.post('/', (req, res) => {
  Articles.Create(
    "The Idea in Practice",
    "Ives got his start as a printer’s apprentice in Ithaca, New York. After two years of learning the ins and outs of the printing process, he began managing the photographic laboratory at nearby Cornell University. He spent the rest of the decade experimenting with new photography techniques and learning about cameras, printers, and optics. Ives quickly translated his vision into reality and patented his printing approach in 1881. He spent the remainder of the decade improving upon it. By 1885, he had developed a simplified process that delivered even better results. The Ives Process, as it came to be known, reduced the cost of printing images by 15x and remained the standard printing technique for the next 80 years. “While operating my photostereotype process in Ithaca, I studied the problem of halftone process,” Ives said. “I went to bed one night in a state of brain fog over the problem, and the instant I woke in the morning saw before me, apparently projected on the ceiling, the completely worked out process and equipment in operation. Third, Ives stepped away from the problem. In this case, he went to sleep for a few hours before his flash of insight. Letting creative challenges sit for longer periods of time can work as well. Regardless of how long you step away, you need to do something that interests you and takes your mind off of the problem. Fourth, his idea returned to him. Ives awoke with the solution to his problem laid out before him. (On a personal note, I often find creative ideas hit me just as I am lying down for sleep. Once I give my brain permission to stop working for the day, the solution appears easily.) Finally, Ives continued to revise his idea for years. In fact, he improved so many aspects of the process he filed a second patent. This is a critical point and is often overlooked. It can be easy to fall in love with the initial version of your idea, but great ideas always evolve.",
    `${new Date()}`,
    "vs.gif",
  );
  res.json({message: "Successful"});
});

article_router.post('/update', (req, res) => {
  Articles.Update(
    "61701c44afa1008952bb9a1b",
    {date: "Wed Oct 20 2021 17:40:20"}
  );
  res.json({message: "Update Successful"});
});

article_router.get('/', (req, res) => {
  Articles.Data({})
    .then(function (result) {
      res.json(result);
    });
});

module.exports = article_router;
