import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import {makeStyles} from '@mui/styles'


// const useStyles = makeStyles({
//     field:{
//         marginBottom: 20,
//         marginTop: 20,
//         display: 'block'
//     }
// })

const Create = () => {

    // const classes = useStyles()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [titErorr, setTitErorr] = useState(false)
    const [detError, setDetErorr] = useState(false)
    const [category, setCategory] = useState('todos')

    const submitHandler = (e) => {
        e.preventDefault()
        setTitErorr(false)
        setDetErorr(false)

        if(title === ''){
            setTitErorr(true)
        }

        if(detail === ''){
            setDetErorr(true)
        }

        if(title && detail){
            fetch('http://localhost:8000/notes', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, detail, category })
            }).then(() => navigate('/'))
        }
    }

  return (
    <Container maxWidth='xl'>
        <Typography variant="h6" component='h2' color='textSecondary' gutterBottom>
            Create a New Note
        </Typography>
        <form noValidate autoComplete='off' onSubmit={submitHandler}>
            <TextField style={ {marginBottom: 20, marginTop: 20, display: 'block'}} onChange={(e) => setTitle(e.target.value)} value={title} label='Notes Title' variant='outlined' color='secondary' fullWidth required error={titErorr} />
            
            <TextField style={ {marginBottom: 20, marginTop: 20, display: 'block'}} onChange={(e) => setDetail(e.target.value)} value={detail} label='Details' variant='outlined' color='secondary' fullWidth required multiline rows={4} error={detError} />
            
            <FormControl style={ {marginBottom: 20, marginTop: 20, display: 'block'}}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="work" />
                </RadioGroup>
            </FormControl>
            
            <Button variant="contained" color='secondary' type='submit' endIcon={<ArrowForwardIosIcon />}>Submit</Button>
        </form>
     </Container>
  )
}

export default Create