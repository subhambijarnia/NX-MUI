import { IconButton } from "@mui/material"
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Action from "./action"


function appbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={'center'} variant="h4">
        suBm
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Action matches={matches} />
    </AppbarContainer>
  )
}

export default appbarMobile