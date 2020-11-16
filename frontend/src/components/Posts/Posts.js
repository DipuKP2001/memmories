import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

import useStyles from './styles.js'

const Posts = ()=>{
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles()
    return (        
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container>
                {posts.map((post) => (
                    <Grid key={post._id} item>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )         
    )
}

export default Posts