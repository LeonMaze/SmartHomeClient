import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useCreateHomeMutation } from '../../../store/services/HomeService'


const AddHomeModal = ({ open, setOpen }) => {

    const [home, setHome] = useState({ name: "" })

    const [createHome] = useCreateHomeMutation();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        createHome(home)
        setOpen(false)
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add home</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Home"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    <Button variant="outlined" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddHomeModal