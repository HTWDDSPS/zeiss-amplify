import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import '@aws-amplify/ui-react/styles.css';

const initialFormState = { name: '', description: '' }


function App() {

  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  
  useEffect(() => {
    fetchNotes();
    //fetchMeasures();
  }, []);
  
  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  };
  
  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }
  
  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }
/*
  async function fetchMeasures() {
    const apiData = await Storage.get(listMeasures);
    setMeasures(apiData.data.listMeasures.items);
  };
  */


  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Zeiss Thingkathon</h1>
      </header>
      <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>


          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Note name"
            value={formData.name}
          />
          <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
            placeholder="Note description"
            value={formData.description}
          />
          <button onClick={createNote}>Create Note</button>
          <div style={{marginBottom: 30}}>
            {
              notes.map(note => (
                <div key={note.id || note.name}>
                  <h2>{note.name}</h2>
                  <p>{note.description}</p>
                  <button onClick={() => deleteNote(note)}>Delete note</button>
                </div>
              ))
            }


          </div>

          
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
    </div>
  );
}

export default App;