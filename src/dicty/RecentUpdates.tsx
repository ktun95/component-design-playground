import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@material-ui/core"
import { TitleBox } from "./TitleBox"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const useRecentUpdateStyles = makeStyles((theme) => ({
  main: {
    borderRadius: "5px",
    backgroundColor: "white",
  },
}))

const RecentUpdates = () => {
  const { main } = useRecentUpdateStyles()
  return (
    <Container disableGutters className={main}>
      <TableContainer>
        <TitleBox content="Dicty Stock Center" icon={<ShoppingCartIcon />} />
        <Container>
          <Typography variant="caption"> NEW STRAINS </Typography>
        </Container>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell> HAD186 </TableCell>
              <TableCell align="right">
                <i> 1 day ago </i>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> RAD213 </TableCell>
              <TableCell align="right"> 3 days ago </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> HAD186 </TableCell>
              <TableCell align="right"> 1 day ago </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> HAD186 </TableCell>
              <TableCell align="right"> 1 day ago </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* 
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
      */}
    </Container>
  )
}

export { RecentUpdates }
