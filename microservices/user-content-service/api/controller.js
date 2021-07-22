'use strict';

const content = [{
    product_id: 1,
    name: "OZWEEGO SHOES",
    reviewCount:25,
    averageRating:"4.5",
    uploaded:[{src:"https://z2photorankmedia-a.akamaihd.net/media/d/h/x/dhx2ny4/normal.jpg",alt: "ozweego shoes", text: "img1"},
              {src:"https://photorankmedia-a.akamaihd.net/media/f/z/2/fz2m7x4/normal.jpg", alt: "ozweego shoes", text: "img2"},
              {src:"https://photorankmedia-a.akamaihd.net/media/o/7/n/o7nr2t4/normal.jpg", alt: "ozweego shoes", text: "img3"}],
    reviews:[{rating:"4", review_title: "Lovely shoes", review_content:"Wonderfully comfortable shoes that also look good."},
            {rating:"5", review_title: "Ozweegos are my faves", review_content:"The shoe is very comfortable, and are very useful for sports"}]
}]

var controllers = {
  //get user generated content by product id
  getContent: async (req, res, next) => {
      if(!content){
        var err = new Error("Something went wrong");
        next(err)
      }
     return await res.json(content.find(p=> p.product_id==req.params.productid));
  }
  
};

module.exports = controllers;