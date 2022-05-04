import React, { useEffect, useState } from 'react';
import * as AWS from "@aws-sdk/client-iotsitewise";
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify';
import { Flex, View, Image, Badge, Heading, Text, Button, Card,Icon , Link, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { MdShoppingCart } from 'react-icons/md';
import awsLogo from '../images/aws-logo.png';

Amplify.configure(awsconfig);
const client = new AWS.IoTSiteWise({ region: "EU-WEST-1" });

const Home = () => {

  const [data, setData] = useState(null);
  const [fetchData, setFetch] = useState(false);
  const { tokens } = useTheme();
  const apiName = 'SobaApi';
  async function connect2() {
        var token = await Auth.currentSession()
        var tokenized = "Bearer " + token.getIdToken().getJwtToken()
        var path = '/assets'; 
        const myInit =  
        {
          headers : {
               Authorization: tokenized }    
        }
            
        API.get(apiName, path, myInit)
            .then(response => {
                var obj = JSON.parse(response.body);
                console.log(obj);
            // Add your code here
            })
            .catch(error => {
        console.log(error);
    });
  }

    async function command() {
      var token = await Auth.currentSession()
      var tokenized = "Bearer " + token.getIdToken().getJwtToken()
      var path = '/command'; 
      const myInit =  
      {
        headers : {
            Authorization: tokenized },
        body : {
          assetId : "someId",
          measure : "Measurepoint",
          ut : 3,
          lt : 1
        }
      }
          
      API.post(apiName, path, myInit)
          .then(response => {
              //var obj = JSON.parse(response);
              console.log(response);
      // Add your code here
          })
          .catch(error => {
      console.log(error);
  });
  }

  return (
    <div>
      <h1>SOBA - Thingkathon</h1>
      <div className='pageBody'>        
          <Flex direction="row" alignItems="flex-start" wrap="wrap">
                <View width="35%" backgroundColor={tokens.colors.background.secondary} 
                  border="1px solid var(--amplify-colors-black)"
                  boxShadow="1px 1px 3px 4px var(--amplify-colors-neutral-60)"
                  borderRadius="3px"
                  padding="1rm">   
                <Card>
                    <Flex direction="row" alignItems="flex-start">
                    <Text as="span" fontSize="50px">
                    <Image
                        alt="AWS Logo"
                        src={awsLogo}
                        width="150px"
                      />                    
                    </Text>
                      <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                      >
                        <Heading level={5}>
                          Marktplace
                        </Heading>
                        <Flex>
                          Status : <Badge size="small" variation='success'>Available</Badge>
                        </Flex>
                        <Text as="span" textAlign="left" >
                          Marktplace for Custom components, like Parsers, AI-Extentions, Mashine Comunication
                        </Text>
                        <Link href='/shop'><Button href="/shop" variation="primary" align="right">Go!</Button></Link>
                      </Flex>
                    </Flex>
                  </Card>
                  </View>
                  <View width="450px" backgroundColor={tokens.colors.background.secondary} 
                  border="1px solid var(--amplify-colors-black)"
                  boxShadow="1px 1px 3px 4px var(--amplify-colors-neutral-60)"
                  borderRadius="3px"
                  padding="1rm">   
                <Card>
                    <Flex direction="row" alignItems="flex-start">
                    <Text as="span" fontSize="50px">
                    <Icon ariaLabel="Javascript" as={MdShoppingCart} />                    
                    </Text>
                      <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                      >
                        <Heading level={5}>
                          IoT SiteWise
                        </Heading>
                        <Flex>
                          Status : <Badge size="small" variation='success'>
                            Online
                          </Badge>
                        </Flex>
                        <Text as="span" textAlign="left">
                          IoT Sitewise Dashboard to visualize whats happening on your shopfloor.
                        </Text>
                        <Link href="https://p-n4vdqy28.app.iotsitewise.aws/projects/6edb5fff-7a57-4489-9e8d-c6cee0c3cb46/dashboards/a0b8760b-b04b-45c7-9bbe-1ebf4ea097aa" isExternal={true}>
                          <Button variation="primary">Go!</Button>
                        </Link>
                      </Flex>
                    </Flex>
                  </Card>
                  </View>
                  
              
            </Flex>  
          </div>
    </div>
  );
};
  
export default Home;