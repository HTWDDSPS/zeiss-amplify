import { Flex, View, Image, Badge, Heading, Text, Button, Card, Placeholder, Divider, Table, TableHead, TableCell, TableRow, TableBody, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react';
import Amplify, { Auth, API, graphqlOperation, auth0SignInButton } from 'aws-amplify';
import * as AWS from "@aws-sdk/client-iotsitewise";
import componentImg from '../images/ComAgent.png';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';
import { objectLessAttributes } from '@aws-amplify/core';
const client = new AWS.IoTSiteWise({ region: "EU-WEST-1" });

const initialFormState = { name: '', description: '' }


const Shop = () => {
  const { tokens } = useTheme();
  const [components, setComponents] = useState([]);
  const apiName = 'SobaApi';
  useEffect(() => {
    fetchComponents();
  }, []);
  
  async function fetchComponents(asset) {
    var token = await Auth.currentSession()
    var tokenized = "Bearer " + token.getIdToken().getJwtToken()
    var path = '/components'; 
    const myInit =  
    {
      headers : {
          Authorization: tokenized 
        }
    }
        
    API.get(apiName, path, myInit)
        .then(response => {
          const obj = JSON.parse(response.body);
          setComponents(obj)
          console.log(obj);       
    // Add your code here""
        })
        .catch(error => {
    console.log(error);
});
}
    return (    
      <div className='pageBody'>        
        <h1>Marktplace</h1>
          <Flex direction="row" alignItems="flex-start" wrap="wrap">
            {
              components.map(comp => (
                <React.Fragment key={comp.id}>
                <View width="49%" backgroundColor={tokens.colors.background.secondary} 
                  border="1px solid var(--amplify-colors-black)"
                  boxShadow="1px 1px 3px 4px var(--amplify-colors-neutral-60)"
                  borderRadius="3px"
                  padding="1rm">   
                <Card>
                    <Flex direction="row" alignItems="flex-start">
                      <Image
                        alt="component Image"
                        src={componentImg}
                        width="10%"
                      />
                      <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                      >
                        <Heading level={5}>
                          {comp.componentName.replace("com.example.", "")}
                        </Heading>
                        <Flex>
                          Used By: <Badge size="small" variation='success'>191
                          </Badge>
                        </Flex>
                        <Table
                            highlightOnHover={true}
                            size="small"
                            variation="striped"
                            textAlign="left"
                            width="100%"
                            >
                            <TableHead>
                                <TableRow>
                                <TableCell as="th">Value</TableCell>
                                <TableCell as="th">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                <TableCell>Comment</TableCell>
                                <TableCell>{comp.latestVersion.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Version</TableCell>
                                <TableCell>{comp.latestVersion.componentVersion}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Publisher</TableCell>
                                <TableCell>{comp.latestVersion.publisher}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Updated</TableCell>
                                <TableCell> {comp.latestVersion.creationTimestamp}</TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                        <Button variation="primary">Buy</Button>
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

export default Shop;

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