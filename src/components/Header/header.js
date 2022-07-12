import * as React from "react"
import PropTypes from "prop-types"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TransitionLink from 'gatsby-plugin-transition-link';
import NavItems from "../NavItems";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from "@mui/material";

const Header = ({ siteTitle, currentPage }) => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(!open);
  };

  const leftItems = [
    {
      to: '/',
      title: "Sound of Ceres",
      
      type: "standard",
    }
  ];
  const rightItems = [
    {
      to: '/tour',
      title: "Tour",
      type: "standard",
     
    },
    {
      to: '/music',
      title: "Music",
      type: "standard",

    },
    {
      to: '/video',
      title: "Video",
      type: "standard",
     
    },
    {
      to: '/bio',
      title: "Bio",
      type: "standard",
     
    },
 
    {
      to: '/contact',
      title: "Contact",
      type: "standard",
     
    },


    {
      // to: '/buy',
      to: 'https://soundofceres.bandcamp.com/music',
      title: "Shop",
      type: "standard",
      variant: "small",
    },
  ];

  const allItems = [...leftItems, ...rightItems].flat(0)

  const navItemStyle = {
    color: currentPage === 'home' ? 'white' : 'white',
  }
  return (
    <header
  
      id={`header`}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "6px",
        }}
      >

        <div className="left">
          {leftItems.map((item, index) => {
            return (
              <TransitionLink
                key={index}
                to={item.to}
                style={navItemStyle} >

                <Typography variant="brand" color="primary.light">
                  {item.title}
                </Typography>



              </TransitionLink>
            )
          })}
        </div>

        <div className="right" >
          <NavItems items={rightItems} />

          <Box display={['block', null, 'none']}>
            <Button className="toggle" onClick={toggleDrawer()}>
              < DragHandleIcon fontSize="large" />
            </Button>
            <SwipeableDrawer
              anchor={`left`}
              open={open}
              onClose={toggleDrawer()}
              onOpen={toggleDrawer()}
              disableScrollLock={true}
            >
              <button className={`exit`} onClick={toggleDrawer()}>
                <CancelIcon fontSize="large" color="primary.light" />
              </button>



              <NavItems items={allItems} currentPage={currentPage} />
            </SwipeableDrawer>  

          </Box>

          

        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
