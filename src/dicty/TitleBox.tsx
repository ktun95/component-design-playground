import { Grid, Typography, makeStyles } from "@material-ui/core"
import { ReactElement } from "react"

const useTitleBoxStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  title: {
    fontWeight: "normal",
  },
}))

type TitleBoxProperties = {
  icon: ReactElement
  content: string
}

const TitleBox = ({ icon, content }: TitleBoxProperties) => {
  const { title, container } = useTitleBoxStyles()
  return (
    <Grid
      container
      spacing={1}
      className={container}
      justifyContent="center"
      alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography className={title}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  )
}

export { TitleBox }
