import { RecentUpdates } from "./dicty/RecentUpdates"
import { Container, ThemeProvider, Box } from "@material-ui/core"
import { dictyTheme } from "./dicty/dictyTheme"

function App() {
  return (
    <Container>
      <Box>
        <ThemeProvider theme={dictyTheme}>
          <RecentUpdates />
        </ThemeProvider>
      </Box>
    </Container>
  )
}

export default App
