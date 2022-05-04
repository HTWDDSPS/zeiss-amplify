import React, { useEffect, useState } from 'react';
import * as AWS from "@aws-sdk/client-iotsitewise";
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
const client = new AWS.IoTSiteWise({ region: "EU-WEST-1" });

const Home = () => {

  const [data, setData] = useState(null);
  const [fetchData, setFetch] = useState(false);

  const apiName = 'RestSidewise';
  const path = '/assets'; 
  const myInit = {} /* { // OPTIONAL
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {  // OPTIONAL
          name: 'param',
      },
  };
*/

  function connect2() {
        API.get(apiName, path, myInit)
            .then(response => {
                console.log(response);
        // Add your code here
            })
            .catch(error => {
        console.log(error.response);
    });
  }


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
      <button onClick={() => connect2()}>Fetch Data</button>
    </div>
  );
};
  
export default Home;