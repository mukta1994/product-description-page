
const PRODUCT_HOST = process.env.PRODUCT_HOST || 'http://localhost:5001';
const META_HOST = process.env.META_HOST || 'http://localhost:5003';
const UGC_HOST = process.env.UGC_HOST || 'http://localhost:5002';
const AUTHTOKEN =  {headers :{
  Authorization:"Bearer 123456789" // token
}
}
module.exports = {
    ProductService: {
      host: PRODUCT_HOST
    },
    MetaService: {
        host: META_HOST
    },
    UgcService: {
        host: UGC_HOST 
    },
    authtoken: {
      token: AUTHTOKEN
    }
  };
  