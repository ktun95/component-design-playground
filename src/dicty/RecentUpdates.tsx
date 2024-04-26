import { Container, Grid, Typography, makeStyles } from "@material-ui/core"

const useRecentUpdateStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    backgroundColor: theme.palette.primary.main
  }
}))

const RecentUpdates = () => {
  const { title } = useRecentUpdateStyles()
  return (
    <Container>
      <Typography className={title}> Dicty Stock Center </Typography>
    </Container>
  )
}

export { RecentUpdates }
