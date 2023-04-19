import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
// import {makeStyles} from '@mui/styles'

// const drawerWidth = 240

// const useStyles = makeStyles({
//     pages:{
//        background: '#f9f9f9',            classes.pages
//        width: '100%'
//     },
    //    drawer:{
    //     width: drawerWidth               classes.drawer
    //    },
    //    drawerPaper:{
    //     width: drawerWidth               classes.drawerPaper
    //    },
    //    root:{
    //     display: 'flex'                  classes.root
    //    }
// })


const Layout = ({children}) => {

    // const classes = useStyles()

  return (
    <div style={{display: 'flex'}}>

        <Drawer variant='permanent' anchor='left' style={{width: 240}} >
            <div>
                <Typography variant='h5'>
                    Ninja notes
                </Typography>
            </div>
        </Drawer>

        <div style={{background: '#f9f9f9', width: '100%'}}>
            {children}
        </div>
    </div>
  )
}

export default Layout