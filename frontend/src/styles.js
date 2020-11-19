import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme)=>({
   appBar:{
       margin:'30px 0',
       borderRadius:'15px',
       display:'flex',
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center'
   }, 
   heading:{}, 
   image:{
        marginLeft:'15px'
   },
   [theme.breakpoints.down("sm")]:{
       mainContainer:{
           flexDirection:'column-reverse'
       }
   } 
}))