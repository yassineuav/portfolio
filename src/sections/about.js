import InfoTable from 'components/cards/info-tabe';
import BlockTitle from 'components/block-title';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';

// person info icons
import { IoIosInformationCircleOutline, IoIosPerson,
     IoIosMail, IoIosPhonePortrait, IoIosPin } from 'react-icons/io';
// dev icon
import { IoLogoIonitron, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io' 
// education icon 
import { IoIosSchool, IoIosBook, IoIosGlobe, IoIosCodeWorking} from 'react-icons/io'
// experience icon
import { IoIosBriefcase, IoIosBusiness } from 'react-icons/io'


const data = [
    {
      title:"Personal Info",
      icon:<IoIosInformationCircleOutline/>,
      backgroundColor: '#52ACFF',
      info:[ 
        {icon:<IoIosPerson/>, title:"Yassine Khaidouch", link:false},
        {icon:<IoIosMail />, title:"khaidouchyassine@gmail.com",link:false},
        {icon:<IoIosPhonePortrait />, title:"(510)332-5539",link:false},
        {icon:<IoIosPin />, title:"Fremont/California",link:false},
      ],
    }, 
    {
      title:"Dev Accounts",
      backgroundColor: '#A96353',
      icon:<IoLogoIonitron/>,
      info:[ 
        {icon:<IoLogoGithub/>, title:"https://github.com/yassineuav", link:true},
        {icon:<IoLogoLinkedin/>, title:"https://www.linkedin.com/in/yassine-khaidouch-375423155/", link:true},
      ],
    },
    
    {
      title:"Education & Certificates",
      backgroundColor: '#52F',
      icon:<IoIosSchool/>,
      info:[ 
        {icon:<IoIosSchool/>, title:"High School Deploma", link:false, date:"2016" },
        {icon:<IoIosSchool/>, title:"Associate Degree in Computer Science & Networking", link:false, date:"2016-2018" },
        {icon:<IoIosGlobe />, title:"Networking CCNA", link:false, date:"2017-2018" },
        {icon:<IoIosCodeWorking />, title:"Android Development", link:false, date:"2018-current" },
        {icon:<IoIosCodeWorking />, title:"Web App Development", link:false, date:"2020-current" },
      ],
    },
    {
      title:"Experiences",
      backgroundColor: '#6495ED',
      icon:<IoIosBriefcase/>,
      info:[ 
        {icon:<IoIosBusiness />, title:"As Freelancer", link:false, date:"2018-current"},
      ],
    },
    
]


const about = () => {
  return (
    <Box sx={styles.about} id="about">
        <Container>
            <BlockTitle
                slogan="info"
                title="About Me &amp; Info"
                styles={styles.blockTitle}/>
            
            <Box sx={styles.section}>
                <Grid gap={2} columns={[1, 1, 2, 2]}>
                    {data?.map((item, index) => (
                    <InfoTable 
                        info={item} 
                        key={index} />
                    ))}
                </Grid>
            </Box>

        </Container>
    </Box>
  )
}

export default about

const styles = {
    blockTitle: {
        textAlign: 'center',
    },
    about:{
        mt:'5%'
    },
    section: {
        marginTop: '3%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}
