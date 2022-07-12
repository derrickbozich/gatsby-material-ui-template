import * as React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";


const NavItems = ({ items }) => {

    return (
        <Box
            as='ul'
            display='flex'
            gap='30px'
        >
            {items.map((item, index) => {
                // External Links
                if (item.to.indexOf('https://') > -1) {
                    return (
                        <li key={index}>
                            <a
                                href={item.to}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.type === "standard" ? (
                                    <>
                                        <Typography variant="nav" component="p" color="primary.dark">
                                            {item.title}
                                        </Typography>
                                    </>
                                ) : (
                                    <Button type='link' variant={item.variant}>
                                        <Typography component="p" variant="button" color="primary.dark">
                                            {item.title}
                                        </Typography>
                                    </Button>
                                )}
                            </a>

                        </li>

                    )

                } else {
                    // Internal Links
                    return (
                        <li key={index}>
                            <Link to={item.to} className={item.type}>
                                {item.type === "standard" ? (
                                    <>
                                        <Typography component="p" variant="nav" color="primary.dark">
                                            {item.title}
                                        </Typography>
                                    </>
                                ) : (
                                    <Button type='link' variant={item.variant}>
                                        <Typography component="p" variant="button" color="primary.dark">
                                            {item.title}
                                        </Typography>
                                    </Button>
                                )}
                            </Link>
                        </li>
                    )
                }
            })}
        </Box>


    )
}

NavItems.propTypes = {
    items: PropTypes.array.isRequired
}

// Header.defaultProps = {
//     siteTitle: ``,
// }

export default NavItems
