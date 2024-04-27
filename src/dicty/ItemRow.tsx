import { Grid } from "@material-ui/core"

type ItemRowProperties = {
  name: string
  created_at: string
}

const ItemRow = () => {
  return (
    <Grid container>
      <Grid lg={1} item> name </Grid>
      <Grid lg={1} item> 3 days ago </Grid>
    </Grid>
  )
}

export { ItemRow }
