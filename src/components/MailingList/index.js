import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';

const MailingList = () => {
    const [input, setInput] = useState({})
    const [response, setResponse] = useState({})

    const handleInputChange = e =>
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        })

    const handleResponseChange = result => setResponse(result)

    // 2. via `async/await`
    const handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(input.email)
        handleResponseChange(result)
    }

    return (

        <div className="mailchimp-form">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <Typography variant="nav" color="primary.light" >
                            Join Our Mailing List
                        </Typography>
                    </label>
                    <input type="email" name="email" placeholder={`email`} onChange={handleInputChange} />{' '}
                    <input type="submit" value="Sign Up" style={{borderRadius: 0, minHeight: '47px'}} />
                </form>
                <Typography variant="body3" color="primary.light">
                    <div className="response" dangerouslySetInnerHTML={{ __html: response.msg }}></div>
                </Typography>
     
            </div>
        </div>
    )
}

export default MailingList
