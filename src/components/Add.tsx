import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack'

import axios from 'axios';
import App from '../App';

let endpoint = "http://localhost:8080";

function Add() {
    const [content, setContent] = React.useState<string>('');

    const handleChange = (e: any) => {
        setContent(e.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post(endpoint + '/todolist/create', { content })
            .then(response => {
                console.log(response);
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <Stack direction="row" spacing={8}>
            <TextField onChange={handleChange} sx={{ width: "90%" }} value={content} id="standard-basic" label="Content" variant="outlined" />
            <Button onClick={handleSubmit} variant="outlined" startIcon={<SaveIcon />}>SAVE</Button>
        </Stack>
    )
}

export default Add;