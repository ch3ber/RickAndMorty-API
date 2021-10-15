import React from 'react';
const API = process.env.API;

function getData() {
   const [data, setData] = React.useState();
   const [dataLoading, setDataLoading] = React.useState(true);

   React.useEffect(() => {
      (async () => {
         const json = await fetch(`${API}/api/character`);
         const data = await json.json();
         setData(data);
         setDataLoading(false);
      })();
   }, [])

   return {
      data,
      dataLoading
   };
}

export {getData};
