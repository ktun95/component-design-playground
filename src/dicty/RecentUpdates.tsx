import {
  Container,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core"
import { TitleBox } from "./TitleBox"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useRecentUpdateStyles = makeStyles((theme) => ({
  catalogName: {},
}))

const RecentUpdates = () => {
  return (
    <Container>
      <TitleBox content="DICTY STOCK CENTER" icon={<ShoppingCartIcon />}/>
      <Typography variant="h3"> New Strains </Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBS0236123 </Typography>
        </Grid>
        <Grid item>
          <Typography> HAD186 </Typography>
        </Grid>
        <Grid item>
          <Typography> 1 day ago </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBS0236124 </Typography>
        </Grid>
        <Grid item>
          <Typography> RAD213 </Typography>
        </Grid>
        <Grid item>
          <Typography> 3 days ago </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBS0236126 </Typography>
        </Grid>
        <Grid item>
          <Typography> TUN404 </Typography>
        </Grid>
        <Grid item>
          <Typography> 2 weeks ago </Typography>
        </Grid>
      </Grid>
      <Typography> New Plasmids </Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBP0001090 </Typography>
        </Grid>
        <Grid item>
          <Typography> pCpnA-GFP </Typography>
        </Grid>
        <Grid item>
          <Typography> 1 day ago </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBP0001091 </Typography>
        </Grid>
        <Grid item>
          <Typography> pCpnA-ABC </Typography>
        </Grid>
        <Grid item>
          <Typography> 3 weeks ago </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography> DBP0002024 </Typography>
        </Grid>
        <Grid item>
          <Typography> pCpnA-XYZ </Typography>
        </Grid>
        <Grid item>
          <Typography> 3 weeks ago </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export { RecentUpdates }
