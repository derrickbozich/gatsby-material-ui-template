import * as React from "react"
import PropTypes from "prop-types"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TransitionLink from 'gatsby-plugin-transition-link';
import { StaticImage } from "gatsby-plugin-image"
import MailingList from '../MailingList'
import NavItems from '../NavItems'
import Social from '../Social'

const Footer = ({ siteTitle, currentPage }) => {
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
            to: 'https://soundofceres.bandcamp.com/music',
            title: "Shop",
            type: "standard",
            variant: "small"
        },
    ];

    return (
        <footer className={currentPage}>
            <Container maxWidth={false}>

                
                    <div className="top">
                        <NavItems items={rightItems} />
                    </div>

                    <div className="bottom">
                        < Social />
                    </div>

               
            </Container>
        </footer>
    )
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
