import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack'

export default function Add() {
    const [content, setContent] = React.useState<string>('');

    const handleChange = (e:any) => {
        setContent(e.target.value);
    }

    const handleSubmit = () => {
        
    }

    return (
        <Stack direction="row" spacing={8}>
            <TextField onChange={handleChange} sx={{width: "90%"}} value={content} id="standard-basic" label="Content" variant="outlined" />
            <Button onClick={handleSubmit} variant="outlined" startIcon={<SaveIcon />}>SAVE</Button>
        </Stack>
    )
}
