import * as React from "react"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"


const Quote = ({ content, author }) => {
    return(
        <>
            <Typography variant="body1" component='p' color="primary.dark">
                "{content}"
            </Typography>
            <Typography variant="body2Bold" mb='50px' component='p' color="primary.dark">
                - {author}
            </Typography>
        </>
    )

}

Quote.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}



export default Quote

