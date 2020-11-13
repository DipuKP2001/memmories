import React, { useState } from 'react'

import { Paper, TextField, Typography, Button } from "@material-ui/core";

import FileBase from 'react-file-base64'

import useStyles from './styles.js'

function Form(){
    const [postData,setPostData] = useState({ creator:'',title:'',message:'',tags:'',selectedFile:'' })
    const classes = useStyles()
    const handleSubmit = ()=>{

    }
    const clear = ()=>{
        
    }
    return (
        <Paper>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Memmory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false}
                        onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    ) 
}

export default Form