const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} = require('graphql');

const {
  getProduct,
  getMetadata,
  getMetadatas,
  getVariant,
  getUgc
} = require('./controller');

//Below are the schemas created for product, meta data and user-generated content

//This schema is created by referring product service data
const productType = new GraphQLObjectType({
  name: 'Product',
  description: 'A product',
  fields: () => ({
    product_id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of Product.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the Product.',
    },
    variants: {
      type: new GraphQLList(subproductType),
      description: 'The variants of product.',
    },
    features: {
      type: featuresType
    }
  })
});


//This schema is created by referring metadata service data
const metaType = new GraphQLObjectType({
  name: 'Metadata',
  description: 'A metadata',
  fields: () => ({
    pid: {
      type: GraphQLInt,
      description: 'The product id of Review.',
    },
    page_title: {
      type: GraphQLString,
      description: 'The title of the metadata.',
    },
    description: {
      type: GraphQLString,
      description: 'The desc of the metadata.',
    },
    keywords: {
      type: GraphQLString,
      description: 'The desc of the metadata.',
    }
  })
})

//This schema is created by referring ugc service data
const UgcContentType =  new GraphQLObjectType({
  name: 'UgcContent',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    reviewCount: { type: GraphQLInt },
    averageRating: { type: GraphQLString },
    uploaded: { type: new GraphQLList(imgType) },
    reviews: { type: new GraphQLList(reviewType) },
  })
})


const featuresType = new GraphQLObjectType({
  name: "Features",
  fields: () => ({
    attributes: { type: new GraphQLList(attrbuteType) },
  })
})

const attrbuteType = new GraphQLObjectType({
  name: 'Attribute',
  fields: () => ({
    color: { type: GraphQLString },
    description_title: { type: GraphQLString },
    description: { type: GraphQLString },
    images: { type: new GraphQLList(imgType) },
    availableSizes:{type: new GraphQLList(sizesType)},
    url: { type: GraphQLString },

  })
})

const subproductType = new GraphQLObjectType({
  name: 'Subproducts',
  fields: () => ({
    variant_id: { type: GraphQLInt },
    title: { type: GraphQLString },
    desc: { type: GraphQLString },
    size: { type: GraphQLString },
    price: { type: GraphQLInt },
    color: { type: GraphQLString },
    discount: { type: GraphQLInt },
  })
})

const VariantType = new GraphQLObjectType({
  name: 'Variant',
  fields: () => ({
    product: { type: subproductType },
    images: { type: new GraphQLList(imgType) },
    description: { type: GraphQLString },
    description_title: { type: GraphQLString },
    availableSizes:{type: new GraphQLList(sizesType)},
  })
})

const imgType = new GraphQLObjectType({
  name: 'Images',
  fields: () => ({
    src: { type: GraphQLString },
    alt: { type: GraphQLString },

  })
})

const sizesType = new GraphQLObjectType({
  name: 'Sizes',
  fields: () => ({
    size: { type: GraphQLInt },
    quantity: { type: GraphQLString },
  })
})

const reviewType = new GraphQLObjectType({
  name: 'reviewContent',
  fields: () => ({
    rating: { type: GraphQLString },
    review_title: { type: GraphQLString },
    review_content: { type: GraphQLString },
  })
})

//By this query you can get details about product,metadata, ugc
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    product: {
      type: productType,
      resolve: (root) => getProduct(),
    },
    variant: {
      type: VariantType,
      args: {
        id: { type: GraphQLInt },
        variantid: { type: GraphQLInt },
        title: { type: GraphQLString }
      },
      resolve: (root, args) => getVariant(args)
    },
    metadatas: {
      type: new GraphQLList(metaType),
      resolve: (root) => getMetadatas(),
    },
    metadata: {
      type: metaType,
      args: {
        pid: { type: GraphQLInt },
      },
      resolve: (root, args) => getMetadata(args),
    },
    ugc:{
      type: UgcContentType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (root,args) => getUgc(args),
    }

  }),
});

module.exports = new GraphQLSchema({
  query: queryType,
  types: [productType, metaType, featuresType, VariantType,UgcContentType],
});