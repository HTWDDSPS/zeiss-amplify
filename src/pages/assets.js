import { Flex, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listAssets } from '../graphql/queries';
import * as mutations from '../graphql/mutations';

const initialFormState = { name: '', description: '' }



const Assets = () => {

    const [assets, setAssets] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    useEffect(() => {
      fetchAssets();
      //fetchMeasures();
    }, []);
    
    async function fetchAssets() {
      const apiData = await API.graphql({ query: listAssets });
      setAssets(apiData.data.listAssets.items);
    };
    
    async function createAsset() {
      if (!formData.name || !formData.description) return;
      await API.graphql({ query: mutations.createAsset, variables: { input: formData } });
      setAssets([ ...assets, formData ]);
      setFormData(initialFormState);
    }
    
    async function deleteAsset(asset) {
      var newArray = assets.filter(n => n.id !== asset.id);
      setAssets(newArray);
      const item = {
        id: asset.id
      };
      const result = await API.graphql({ query: mutations.deleteAsset, variables: { input: item }});
    }

    async function updateAsset(asset) {
        const item = {
            id: asset.id,
            name: asset.name,
            description: "Some Crazy Update 2!"
          };
        const result = await API.graphql({ query: mutations.updateNote, variables: { input: item }});
        fetchAssets() // should be updated without polling from DB again, but inline doesnt update the list... this works for now
      }

    return (    
        <div>
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
            </div>
        </div>
        ); 
}

export default Assets;