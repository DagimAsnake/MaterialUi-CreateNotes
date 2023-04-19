import React, {useEffect, useState} from 'react'
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NoteCards from '../components/NoteCards';

const Note = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data =>  setNotes(data) )
        
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id,{
            method: "DELETE"
        })

        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)

    }

  return (
    <Container maxWidth='xl'>
         <Grid container spacing={3}>
            {notes.map((note) => {
                return(
                <Grid key={note.id} item xs={12} md={6} lg={4}>
                    <NoteCards note={note} handleDelete={handleDelete} />
                </Grid>
                )
            })}
        </Grid>
    </Container>
  )
}

export default Note