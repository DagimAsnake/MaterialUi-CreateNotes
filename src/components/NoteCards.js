import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const NoteCards = ({note, handleDelete}) => {
  return (
    <div>
         <Card elevation={1}>
            <CardHeader
                action={
                <IconButton onClick={() => handleDelete(note.id) }>
                    <DeleteOutlineIcon />
                </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSeconary'>
                    {note.detail}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCards