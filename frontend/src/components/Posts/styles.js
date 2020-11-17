import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    mainContainer:{
        dispay:'flex',
        alignItems:'center'
    },
    smMargin:{
        margin:theme.spacing(1)
    },
    actionDiv:{
        textAlign:'center'
    }
}))