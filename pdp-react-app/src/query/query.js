import {
    gql
  } from "@apollo/client";
  

//query to get product details
export const Product = gql`
query Product($id:Int!,$variantid:Int!, $title: String!){
  variant(id:$id,variantid:$variantid,title:$title){
    product{
      variant_id
      title
      size
      color
      price
    }
    images{
      src
      alt
    }
    description
    description_title
    availableSizes{
      size
      quantity
  } 
  }
  product {
    product_id
    name
    features{
      attributes{
        color
        url
        images{
          src
          alt
        }
      }
    }
  }
}
`;

//query to get ugc details
export const ugc = gql`
query ugcdata($id:Int!){
  ugc(id:$id){
    averageRating
    uploaded{
      src
      alt
    }
    reviews{
      rating
      review_title
      review_content
    }
  }
}
`;

//query to get metadata details
export const Metadata = gql`
query metadata($pid:Int!){
  metadata(pid:$pid) {
    pid
    page_title
    description
    keywords
  }
  }
`;