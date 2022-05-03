import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import * as mutations from '../graphql/mutations';

const initialFormState = { name: '', description: '' }

const Notes = () => {

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
      await API.graphql({ query: mutations.createNote, variables: { input: formData } });
      setNotes([ ...notes, formData ]);
      setFormData(initialFormState);
    }
    
    async function deleteNote(note) {
      var newNotesArray = notes.filter(n => n.id !== note.id);
      setNotes(newNotesArray);
      const noteItem = {
        id: note.id
      };
      const result = await API.graphql({ query: mutations.deleteNote, variables: { input: noteItem }});
    }

    async function updateNote(note) {
        const noteDetails = {
            id: note.id,
            name: note.name,
            description: "Some Crazy Update 2!"
          };
        const result = await API.graphql({ query: mutations.updateNote, variables: { input: noteDetails }});
        fetchNotes() // should be updated without polling from DB again, but inline doesnt update the list... this works for now
      }

    return (    
        <div>
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
                <p>{note.description} / {note.id} / 
                <button onClick={() => {
                    deleteNote(note)}
                }>Delete note</button> / 
                <button onClick={() => {
                    updateNote(note)}
                }>Update note</button> </p>
                </div>
            ))

            }
            </div>
        </div>
        ); 
}

export default Notes;