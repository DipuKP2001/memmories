import React, { useState } from 'react'

import { Paper, TextField, Typography, Button } from "@material-ui/core";

import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";

import useStyles from './styles.js'
import { createPost,updatePost } from "../../actions/posts";

function Form({ currentId,setCurrentId }){
    const [postData,setPostData] = useState({ creator:'',title:'',message:'',tags:'',selectedFile:'' })
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{
            dispatch(createPost(postData))
        }
    }
    const clear = ()=>{
        
    }
    return (
        <Paper>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Memmory</Typography>
                <TextField className={classes.fileInput} name="creator" variant="outlined" label="Creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField className={classes.fileInput} name="title" variant="outlined" label="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField className={classes.fileInput} name="message" variant="outlined" label="Message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField className={classes.fileInput} name="tags" variant="outlined" label="Tags" value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
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