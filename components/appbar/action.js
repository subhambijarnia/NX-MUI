import { Divider, ListItemButton, ListItemIcon } from "@mui/material"
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { MyList, ActionIconsContainerMobile, ActionIconsContainerDesktop } from "../../styles/appbar"
import { Colors } from "../../styles/theme"


function Action({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type='row'>
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              // display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
          >
            <ShoppingCardIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              // display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              // display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>

      </MyList>
    </Component>
  )
}

export default Action