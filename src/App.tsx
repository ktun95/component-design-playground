import { RecentUpdates } from "./dicty/RecentUpdates"
import { ThemeProvider, Box, Grid } from "@material-ui/core"
import { createTheme } from "@material-ui/core/styles"
import { dictyTheme } from "./dicty/dictyTheme"

const theme = createTheme(dictyTheme)

function App() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <ThemeProvider theme={theme}>
          <Box style={{ width: "40vw" }}>
            <RecentUpdates />
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}

export default App
