import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack'

export default function Add() {
    return (
        <Stack direction="row" spacing={5}>
            <TextField sx={{width: "90%"}} id="standard-basic" label="Content" variant="outlined" />
            <Button variant="outlined" startIcon={<SaveIcon />}>SAVE</Button>
        </Stack>
    )
}
