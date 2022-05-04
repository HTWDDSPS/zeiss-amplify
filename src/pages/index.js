import React, { useEffect, useState } from 'react';
import * as AWS from "@aws-sdk/client-iotsitewise";
const client = new AWS.IoTSiteWise({ region: "EU-WEST-1" });

const Home = () => {

  const [data, setData] = useState(null);
  const [fetchData, setFetch] = useState(false);

  function connect() {

    client.listAssets(params => {}, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  }
  return (
    <div>
      <h1>Welcome to Zeiss Thingkathon</h1>
      <h1>{data}</h1>
      <button onClick={() => connect()}>Fetch Data</button>
    </div>
  );
};
  
export default Home;