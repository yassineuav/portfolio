import React from 'react'
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';


const worksBanner = () => {
  return (
    <Box as="section" id="works" sx={styles.works}>
    <Container>
      <BlockTitle
        slogan="Projects"
        title="My Recent Works"
        styles={styles.blockTitle}
      />
    </Container>
  </Box>
  
  )
}

export default worksBanner

const styles = {
    works: {
      pt: ['65px', '80px', '170px'],
      '.blockTitle': {
        textAlign: 'center',
        marginBottom: ['25px', '50px'],
      },   
    }
}
  