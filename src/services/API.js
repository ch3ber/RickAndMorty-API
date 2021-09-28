import React from 'react';
const API = process.env.API;

function getData() {
   const [isLoading, setIsLoading] = React.useState(true);
   const [data, setData] = React.useState();
   const [results, setResults] = React.useState();

   React.useEffect(() => {
      (async () => {
         const json = await fetch(API);
         const data = await json.json();
         setResults(data.results[0])
         setIsLoading(false);
         setData(data);
      })();
   }, [])

   return {
      isLoading,
      data,
      results,
   };
}

export {getData};
