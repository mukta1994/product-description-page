const fetch = require('node-fetch');
const {ProductService,UgcService,MetaService} = require('../../config');


const getProduct = async() => {
  const res = await fetch(`${ProductService.host}/product`)
  const json = res.json();
  return json;
}

//get variant info and which can be used when fetching all product variant data
const getProductVariant = async(args) => {
  const res = await fetch(`${ProductService.host}/product/${args.id}/${args.variantid}/${args.title}`)
  const json = res.json();
  return json;
} 

//get all variant info of a product
const getVariant = async(args) => {
  const product = await getProductVariant(args) 
  const productdata = await getProduct()
  const getPro = (productdata.features.attributes.find(p => p.color == product.color))
  return {
    product:product,
    images : getPro.images,
    description : getPro.description,
    description_title : getPro.description_title,
    availableSizes : getPro.availableSizes,
  };
}

//get all metadatas 
const getMetadatas = async() => {
  const res = await fetch(`${MetaService.host}/metadatas`)
  const data = res.json()
  return data
}

//get metadata by product id
const getMetadata = async(args) => {
  const res = await fetch(`${MetaService.host}/metadata/${args.pid}`)
  const metadata = res.json()
  return metadata
}

//get ugc by product id
const getUgc = async(args) => {
  const res = await fetch(`${UgcService.host}/ugc/${args.id}`)
  if(!res){
    var err = new Error("Something went wrong");
    next(err)
  }
  return res.json()
}

module.exports = {
  getProduct,
  getMetadata,
  getProductVariant,
  getMetadatas,
  getVariant,
  getUgc
}