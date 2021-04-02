import React from 'react'
import {Button, Typography, Container} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles= makeStyles({
  btn:{
    backgroundColor:'violet',
    fontSize:60,
    '&:hover':{
      backgroundColor:'blue'
    }
  },
  title:{
    textDecoration:'underline',
    marginBottom:20
  }
})
export default function Create() {
  const classes = useStyles()
  return (
    <Container>
      <Typography
      className={classes.title}
      variant="h6"
      component="h2"
      color="textSecondary"
      gutterBottom
      >Create a new page</Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log("You Clicked Me")}
        type="Submit"
        variant="contained"
        color="secondary"
        endIcon={<KeyboardArrowRightIcon/>}
      >Submit</Button>
    </Container>
  )
}
