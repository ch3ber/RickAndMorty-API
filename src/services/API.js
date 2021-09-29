import React from 'react';
const API = process.env.API;

function getData() {
   const [data, setData] = React.useState();

   React.useEffect(() => {
      (async () => {
         const json = await fetch(API);
         const data = await json.json();
         setData(data);
      })();
   }, [])

   return {
      data
   };
}

export {getData};
