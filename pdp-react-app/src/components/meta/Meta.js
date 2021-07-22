// import { Helmet } from "react-helmet"
// import {
//   useQuery,
// } from "@apollo/client";
// import { Metadata } from '../../query/query'



// const Meta = (props) => {

//   const { loading, error, data } = useQuery(Metadata,{variables:{pid:parseInt(props.id)}});
//   const [metaData,setMetaData] = useState("")
//   if(data)
//     setMetaData(data)

 
//     return <Helmet>
//       <meta charSet="utf-8" />
//       <title>{data.metadata.page_title}</title>
//       <meta
//         name="description"
//         content={data.metadata.description}
//       />
//       <meta name="keywords" content={data.metadata.keywords}></meta>
//     </Helmet>

// }

// export default Meta;

import { useState , useEffect} from 'react'
import { Helmet } from "react-helmet"
import {
  useQuery,
} from "@apollo/client";
import { Metadata } from '../../query/query'



const Meta = (props) => {

  const { loading, error, data } = useQuery(Metadata,{variables:{pid:parseInt(props.id)}});
  const [loadeddata,setLoadedData] = useState({metadata:{page_title:"Adidas shoes new",keywords:"sports",description:"Best suits while playing and running"}})

  useEffect(() => {
    if(data)
    setLoadedData(data)
  }, [])
  
 
    return <Helmet>
      <meta charSet="utf-8" />
      <title>{loadeddata.metadata.page_title}</title>
      <meta
        name="description"
        content={loadeddata.metadata.description}
      />
      <meta name="keywords" content={loadeddata.metadata.keywords}></meta>
    </Helmet>

}

export default Meta;