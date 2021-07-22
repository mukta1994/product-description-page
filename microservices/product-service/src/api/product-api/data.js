
const features = {
  attributes: [{
    color: "White",
    description_title: "OFF-WHITE SNEAKERS WITH A 90S VIBE, UPDATED WITH DETAILS INSPIRED BY DISNEY'S URSULA.",
    description: `From a nostalgic collection in honor of The Little Mermaid. Only the OZWEEGO shoes can represent such a striking character as Disney's Ursula. She may be a little villainous, but she makes a good point with her quote on the woven label: "life is full of tough choices, in'it?". The chunky sole with Adiprene support delivers superior cushioning. Patent 3-Stripes create a shiny wet look straight from the sea. From an exclusive collection, only available on adidas.nl and in store.`,
    availableSizes:[{size:36, quantity:0},{size:34, quantity:10},{size:40, quantity:5}],
    url:"1/2/OZWEEGO SHOES White",
    images: [
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/26957f977ecf4119879caa7600ff0f1b_9366/OZWEEGO_Schoenen_Wit_EE6464_01_standard.jpg", alt: "white shoe1", text: "img1" },
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/db706df17193440288cfac3700b32b56_9366/OZWEEGO_Schoenen_Wit_EE6464_HM1_hover.jpg", alt: "white shoe1", text: "img2" },
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f98899a2f60e471b94d6ac3700c99e75_9366/OZWEEGO_Schoenen_Wit_EE6464_HM2.jpg", alt: "white shoe1", text: "img3" },
    ],
  }, {
    color: "Green",
    description_title: "ULTRA-COMFORTABLE SHOES FOR GREAT VIBES.",
    description: `The maverick approach to fashion defined the 90s. Holy houses? Kick it. Grow them. Create new palaces. The adidas OZWEEGO shoe used to do that and this modern version just carries on with it full of energy. Striking midsole lines pay tribute to the icon. The luxurious multi-material upper rests on soft cushioning to keep you moving comfortably all day long.`,
    availableSizes:[{size:36, quantity:5},{size:38, quantity:1},{size:42, quantity:5}],
    url:"1/1/OZWEEGO SHOES Green",
    images: [
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/769cff15ad0d49f59d77acae00995cd3_9366/OZWEEGO_Schoenen_Groen_GW2543_01_standard.jpg", alt: "green shoe1", text: "img1" },
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3f0175b581454146bf7aacae00b3f306_9366/OZWEEGO_Schoenen_Groen_GW2543_012_hover_standard.jpg", alt: "green shoe1", text: "img2" },
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/61618bf9cbc24599a567acae00996349_9366/OZWEEGO_Schoenen_Groen_GW2543_06_standard.jpg", alt: "green shoe1", text: "img2" },
      { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aec0789b4d024942a607acae009984f1_9366/OZWEEGO_Schoenen_Groen_GW2543_41_detail.jpg", alt: "green shoe1", text: "img2" },
    ],
  }]
}

const product = {
  product_id: 1,
  name: "OZWEEGO SHOES",
  features: features,
  variants: [{
    variant_id: 1,
    title: "OZWEEGO SHOES Green",
    price: 100,
    discount: 20,
    color: "Green",
  }, {
    variant_id: 2,
    title: "OZWEEGO SHOES White",
    price: 160,
    discount: 20,
    color: "White"
  }
]
}
  module.exports =Object.freeze( {
    product
  })