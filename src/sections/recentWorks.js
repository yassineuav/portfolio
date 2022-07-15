import React from 'react';
import { Box, Container, Grid, Flex, Heading, Text, Button, Badge } from 'theme-ui';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaAngleRight, FaGithub, FaGooglePlay } from 'react-icons/fa';

import { urlFor } from '../client';

const RecentWorks = ({data}) => {  
  return (
    <Box sx={styles.boostAgencies} mt={4}>
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  {data.projectName}
                </Heading>
                <Text as="p">
                  {data.description}
                </Text>
              </Box>
  
             <Box as="ul" sx={styles.list}>
                {data && data?.features?.map( (feature, index) => (
                  <Text 
                    as="li" 
                    key={index}>
                    <IoIosCheckmarkCircle color={feature.color}/>
                    {feature.title}
                  </Text>
                ))}
              </Box>
              
              <Grid mt={4} mb={4} gap={2} columns={[2, 3, 4, 4]} >  
                {data && data.tags.map((item, index) => (
                  <Badge 
                    style={{textAlign: 'center'}}
                    variant="outline"  
                    bg="muted" 
                    key={index} >
                      {item.tag}
                  </Badge>  
                ))}
              </Grid>
              
              <a href={`${data.projectLink}`} 
                  target="_blank"
                  style={{color:"#f34", fontSize:'1.3em', display: "inline-block", fontWeight: 'bold' }}
                  >More Info ...<FaAngleRight />
              </a>
              <Flex mt={4}>
                <Button sx={styles.button} ><a href={`${data.githubLink}`} target="_blank"><FaGithub /> Source Code</a></Button>
                { !data.isWebApp &&  
                 <Button sx={styles.button} ><a href={`${data.playStoreLink}`} target="_blank"><FaGooglePlay /> Download App</a></Button>
                }
              </Flex>
            </Box>
          </Flex>

          <Flex sx={styles.col}>
            <Image src={urlFor(data.imgUrl)} sx={styles.image} alt="" />
          </Flex>
          
        </Box>
      </Container>
    </Box>
  );
};

export default RecentWorks;

const styles = {
  boostAgencies: {
    pt: ['70px', null, null, '80px', '120px', null, '130px'],
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, 'row-reverse'],
  },
  col: {
    flex: ['0 0 100%', null, null, '0 0 50%'],
  },
  image: {
    mt: ['5em', null, null, '0'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'flex-start'],
    marginLeft: 'auto',
    marginRight: 'auto',
    height: ['385px', null, null, 'auto'],
    position: 'relative',
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    ml: ['25px', null, null, '0'],
    mb: ['10px'],
    mt: ['30px'],
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-start', null, null, null, null, 'flex-start'],
      fontSize: [1, null, 2, null, '18px'],
      color: 'text_secondary',
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: '#DADADA',
        borderRadius: '50%',
        marginRight: ['10px'],
      },
    },
  },
  titleBox: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'black',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      lineHeight: [1.6, null, null, '1.5'],
      fontWeight: 'bold',
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
    },
    p: {
      fontSize: [0, null, 2, null, '21px'],
      color: 'text_secondary',
      opacity: '.6',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      padding: ['0 20px', null, null, '0'],
      mt: ['15px'],
    },
  },
  content: {
    width: '100%',
    textAlign: ['left', null, null, null, 'left'],
    pt: [null, null, null, null, null, '100px'],
    pl: [null, '20px', '30px', '50px'],
  },
  button: {
    fontSize: 1,
    marginRight: '20px',
    text: '#000',
    background: '#07c',
    primary: '#4fe',
  }
};
