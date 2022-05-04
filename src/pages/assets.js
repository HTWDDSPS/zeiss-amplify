import { Flex, View, Image, Badge, Heading, Text, Button, Card, Placeholder, Divider, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react';
import Amplify, { Auth, API, graphqlOperation, auth0SignInButton } from 'aws-amplify';
import * as AWS from "@aws-sdk/client-iotsitewise";
import flushNgap from '../images/MachineAgent.png';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';
import { objectLessAttributes } from '@aws-amplify/core';
const client = new AWS.IoTSiteWise({ region: "EU-WEST-1" });

const initialFormState = { name: '', description: '' }


const Assets = () => {

  const { tokens } = useTheme();
  const [assets, setAssets] = useState([]);
  const [alarms, setAlarms] = useState([]);
  const apiName = 'SobaApi';
  useEffect(() => {
    fetchAssets();
    //fetchMeasures();
  }, []);

  async function command(asset) {
    var token = await Auth.currentSession()
    var tokenized = "Bearer " + token.getIdToken().getJwtToken()
    var path = '/command'; 
    const myInit =  
    {
      headers : {
          Authorization: tokenized },
      body : {
        assetId : asset,
        user : Auth.currentUserInfo
      }
    }
        
    API.post(apiName, path, myInit)
        .then(response => {
            //var obj = JSON.parse(response);
            console.log(response);
            let element = document.getElementById(asset)
            element.textContent="Claimed"
            // + Auth.currentSession.user.name
            element.disabled = true
    // Add your code here""
        })
        .catch(error => {
    console.log(error);
});
}
  async function fetchAssets() {
        var token = await Auth.currentSession()
        var tokenized = "Bearer " + token.getIdToken().getJwtToken()
        var assetPath = '/assets'; 
        var alarmPath = '/alarms'
        const myInit =  
        {
          headers : {
               Authorization: tokenized }    
        }
            
        API.get(apiName, assetPath, myInit)
            .then(response => {
                const obj = JSON.parse(response.body);
                setAssets(obj);
                console.log(obj);
            })
            .catch(error => {
        console.log(error);
        });

        API.get(apiName, alarmPath, myInit)
            .then(response => {
                const obj = JSON.parse(response.body);
                const alarmResponse = [];
                for (const [key , value] of Object.entries(obj)) {
                  if(value[0] !== undefined)
                  { 
                    if(value[0].stateName === "ACTIVE")
                      alarmResponse.push(value)
                  }
                }
                setAlarms(alarmResponse)
                console.log(alarms)
            })
            .catch(error => {
        console.log(error);
        });
  }
    
 
    return (    
      <div className='pageBody'>        
          
          <Flex direction="row" alignItems="flex-start" wrap="wrap">
            {
              assets.map(asset => (
                <React.Fragment key={asset.id}>
                <View width="450px" backgroundColor={tokens.colors.background.secondary} 
                  border="1px solid var(--amplify-colors-black)"
                  boxShadow="1px 1px 3px 4px var(--amplify-colors-neutral-60)"
                  borderRadius="3px"
                  padding="1rm">   
                <Card>
                    <Flex direction="row" alignItems="flex-start">
                      <Image
                        alt="Flush n Gap"
                        src={flushNgap}
                        width="10%"
                      />
                      <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                      >
                        <Heading level={5}>
                          {asset.name}
                        </Heading>
                        <Flex>
                          Status : <Badge size="small" variation={asset.status.state === 'ACTIVE' ? 'success' : 'error'}>
                            {asset.status.state}
                          </Badge>
                          Alarms
                          <Badge size="small" className={asset.assetModelId !== "013041fc-0dcb-4540-b53c-4457a77bff5f" ? 'flaggedGod' : 'flaggedBad'}>
                            {
                            // Dirty way
                            }
                            {asset.assetModelId === "013041fc-0dcb-4540-b53c-4457a77bff5f" ? 
                              alarms.length : 0
                            }
                          </Badge>
                        </Flex>
                        <Text as="span">
                          Last Updated : {asset.lastUpdateDate}
                        </Text>
                        <Button variation="primary" id={asset.assetModelId} 
                                disabled={asset.assetModelId !== "013041fc-0dcb-4540-b53c-4457a77bff5f"}
                                onClick={() => command(asset.assetModelId)}
                                >Claim</Button>
                      </Flex>
                    </Flex>
                  </Card>
                  </View>
                  </React.Fragment>
              ))

            }
            </Flex>  
          </div>
        
        ); 
}

export default Assets;

/* 
           <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Asset name"
            value={formData.name}
            />
            <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
            placeholder="Asset description"
            value={formData.description}
            />
            <button onClick={createAsset}>Create Asset</button>
            <div style={{marginBottom: 30}}>
            {
            assets.map(asset => (
                <div key={asset.id || asset.name}>
                <h2>{asset.name}</h2>
                <p>{asset.description} / {asset.id} / 
                <button onClick={() => {
                    deleteAsset(asset)}
                }>Delete note</button> / 
                <button onClick={() => {
                    updateAsset(asset)}
                }>Update note</button> </p>
                </div>
            ))

            }
*/