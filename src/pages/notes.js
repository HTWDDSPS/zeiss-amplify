import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Flex, View, Image, Badge, Heading, Text, Button, Card, Placeholder, Divider, Table, TableHead, TableCell, TableRow, TableBody, useTheme } from '@aws-amplify/ui-react';
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
        <div className='pageBody'>
          <h1>Discribe your Alert and how did you solve it.</h1>
            <Table
              highlightOnHover={true}
              size="small"
              variation="striped"
              textAlign="left"
              >
              <TableHead>
                  <TableRow>
                  <TableCell as="th">Name</TableCell>
                  <TableCell as="th">Description</TableCell>
                  <TableCell as="th" textAlign="right">Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell><input onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                              placeholder="Note name" value={formData.name}/></TableCell>
                  <TableCell><input onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                              placeholder="Note description" value={formData.description}/></TableCell>
                  <TableCell textAlign="right"><button onClick={createNote}>Create Note</button></TableCell>
                </TableRow>
              {
              notes.map(note => (  
                <TableRow key={note.id || note.name}>
                  <TableCell>{note.name}</TableCell>
                  <TableCell>{note.description}</TableCell>
                  <TableCell textAlign="right"><button onClick={() => {deleteNote(note)}}>Delete note</button>&nbsp; 
                  <button onClick={() => {updateNote(note)}}>Update note</button></TableCell>
                </TableRow>
              ))

              }
              </TableBody>
              </Table>
        </div>
        ); 
}

export default Notes;