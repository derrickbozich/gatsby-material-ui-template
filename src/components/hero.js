import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box } from "@mui/material"

export function Hero({children}) {

    const boxStyles = {
        // transform: 'translateY(-50%)'
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%',
        position: 'absolute'
    }
  

    return (
      <Box position='relative' >
        <StaticImage
          src="../images/favicon.png"
          loading="eager"
          layout='fullWidth'
          alt="Shimmy Disc"
        />
        <Box sx={{...boxStyles}}>
            {children}
        </Box>
      </Box>
    )
}

Hero.propTypes = {
    image: PropTypes.object,
}

// Hero.defaultProps = {
//     image: `home`,
// }