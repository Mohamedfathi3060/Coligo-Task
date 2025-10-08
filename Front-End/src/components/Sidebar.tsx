import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from 'react-router-dom';

import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SchoolIcon from '@mui/icons-material/School';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

/////////////////////////////
const drawerW = 240;
interface Props {
  window?: () => Window;
}
export default function Sidebar(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const navigator = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={() => navigator('/')}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const sides = [
    {
      text: 'Dashboard',
      href: 'dashboard',
      icon: <HomeIcon sx={{ fontSize: '30px' }} />,
    },
    {
      text: 'Schedule',
      href: 'schedule',
      icon: <CalendarMonthIcon sx={{ fontSize: '30px' }} />,
    },
    {
      text: 'Courses',
      href: 'courses',
      icon: <BookIcon sx={{ fontSize: '30px' }} />,
    },
    {
      text: 'Gradebook',
      href: 'gradebook',
      icon: <SchoolIcon sx={{ fontSize: '30px' }} />,
    },

    {
      text: 'Performance',
      href: 'performance',
      icon: <QueryStatsIcon sx={{ fontSize: '30px' }} />,
    },
    {
      text: 'Announcement',
      href: 'announcement',
      icon: <CampaignIcon sx={{ fontSize: '30px' }} />,
    },
  ];
  const drawer = (
    <div>
      <Typography variant='h4' sx={{ m: 3, fontFamily: 'monospace' }}>
        Coligo
      </Typography>
      <List>
        {sides.map((el) => {
          const isActive = location.pathname === `/${el.href}`;
          return (
            <ListItem
              key={el.text}
              disablePadding
              sx={{
                mb: 2,
                '&:hover': {
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  '& *': { color: '#002356ff' },
                },
                backgroundColor: isActive ? '#fff' : 'transparent',
                '& *': {
                  color: isActive ? '#002356ff' : '#fff',
                },
              }}
            >
              <ListItemButton
                onClick={() => {
                  navigate(`/${el.href}`);
                  handleDrawerToggle();
                }}
                selected={isActive}
                sx={{
                  padding: '20px',
                  backgroundColor: 'transparent !important',
                  '&:hover': {
                    backgroundColor: 'transparent !important',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'transparent !important',
                    '&:hover': {
                      backgroundColor: 'transparent !important',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? '#002356ff' : '#fff',
                  }}
                >
                  {el.icon}
                </ListItemIcon>
                <ListItemText
                  primary={el.text}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerW}px)` },
            ml: { sm: `${drawerW}px` },
            py: '12px',
            boxShadow: 'none',
            color: '#1976d2',
            backgroundColor: '#fff',
          }}
          color='primary'
        >
          <Toolbar>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  xs: 'block',
                  lg: 'none',
                },
                mr: 2,
                color: '#1976d2', // optional
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h4'
              noWrap
              component='div'
              sx={{ display: { xs: 'block', sm: 'block' }, color: '#808885ff' }}
            >
              Welcome Talia,
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                  border: '1px solid #77777755',
                  borderRadius: '30px',
                  paddingLeft: '8px',
                }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size='large'
                aria-label='show 1 new mails'
                color='inherit'
              >
                <Badge badgeContent={1} color='primary'>
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={4} color='primary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box
        component='nav'
        sx={{ width: { sm: drawerW }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: 'linear-gradient(to bottom, #002356ff, #75bdf7ff)',
              width: drawerW,
              color: '#fff',
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: 'linear-gradient(to bottom, #002356ff, #75bdf7ff)',
              width: drawerW,
              color: '#fff',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
