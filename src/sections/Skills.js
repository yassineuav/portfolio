import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import androidIcon from 'assets/icons/android-icon.svg';
import reactIcon from 'assets/icons/react-icon.svg';
import pythonDjangoIcon from 'assets/icons/django-python-icon.svg';
import aiIcon from 'assets/icons/artificial-intelligence-icon.svg';
import networkIcon from 'assets/icons/network-server-icon.svg';

const SERVICES_DATA = [
  {
    icon: androidIcon,
    title: 'Android Development',
    text:
      'Developing Android Applications with Java and/or Kotlin using the latest tech and components to enhance and reach customers\' needs. As App Architecture Components to perform the App lifecycle including Room, ViewModel, LiveData, coroutine and WorkManager. and Jetpack Compose for building and designing an Android UI.',
  },
  {
    icon: reactIcon,
    title: 'Web App',
    text:
      'Developing Web Applications using React Js or Next Js and Designs with Bootstrap, Material UI, or Tailwind Also using other technology like Syncfusion, GraphQL, and Charts Graph to Simplify and consume the data for a high level of customer experience.',
  },
  {
    icon: pythonDjangoIcon,
    title: 'Python Django',
    text:
      'For Backend development, I am using Django REST Framework with MySql for production, and to more powerful control the data I have used Firebase and Express with MongoDB But Django Gives more accessibility, and more power to handle and secure the DATA for Production. and Customers\' needs. ',
  },
  {
    icon: aiIcon,
    title: 'Artificial Intelligence',
    text:
    'The goal is to reach the best performance and profit in a short time by using AI and ML in Production. using Tensor Flow Python to show the customers what the most recommended interesting products are and compare them with others on e-commerce.',
  },
  {
    icon: networkIcon,
    title: 'Networking & Server Administration',
    text:
      'I have Experience with configuring and managing servers, routers, and switchers. also, I have a little experience with penetration testing. I prefer using Linux Debian (Kali) for that. I HAVE a CCNA and an Associate  Degree. I have been studying the Networking & Server Administration and Programming Language for 2 years in an Associate School.',
  }
];


const Skills = () => {
  return (
    <Box sx={styles.skills} id="skills">
      <Container>
        <BlockTitle
          slogan="Skills &amp; Abilities"
          title="My Expertise and Specialties"
          styles={styles.blockTitle}
        />
 
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`} >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export default Skills;

const styles = {
  skills: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #FFD9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #DD44ff 5.17%, rgba(8, 152, 231, 0.5) 42.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #AA9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
