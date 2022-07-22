import { Box, Typography, Container } from "@mui/material"
import * as React from "react"
import { Hero } from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const boxStyles = {
    bgcolor: "weirdGreen",
    py: "8rem",
    // textAlign: "center",
  }

  return (
    <Layout>
      <Seo title="Home" />

      {/* <Container maxWidth={false}>
        <Box {...boxStyles}></Box>
      </Container> */}

      <Hero>
        <Typography variant="h1" color='white'>YOOOOOOO</Typography>
        <Typography variant="p" color="weirdGreen">
          YOOOOOOO
        </Typography>
      </Hero>
    </Layout>
  )
}

export default IndexPage
