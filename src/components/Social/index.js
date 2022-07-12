import * as React from "react"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faBandcamp } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from "@mui/material"

const Social = () => {
    const items = [
        {
            href: 'https://www.instagram.com/sound_of_ceres',
            title: "Instagram",
            icon: faInstagram,
        },
        {
            href: 'https://open.spotify.com/album/1PodHCmJgdcdWb70VvFdF3',
            title: "Spotify",
            icon: faSpotify,
        },
        {
            href: 'https://soundofceres.bandcamp.com/',
            title: "Bandcamp",
            icon: faBandcamp,
        },
        {
            href: 'https://www.youtube.com/watch?v=ZLyAtDBFCjI',
            title: "Youtube",
            icon: faYoutube,
        },
    ];

    return (
        <Box display="flex" gap='30px' >
            {items.map((item, index) => {
                return (
                    <a key={index} href={item.href} target="_blank" aria-label={item.title} rel="noreferrer">
                        <FontAwesomeIcon icon={item.icon} size="lg" />
                    </a>
                )
            })}
        </Box>
    )
}

// Footer.propTypes = {
//     siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//     siteTitle: ``,
// }

export default Social
