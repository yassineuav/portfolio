/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

const infoTable = ({ info }) => {
  return (
    <Box sx={styles.infoTable} >
      <Box sx={styles.header} > 
        <Text as="span" sx={styles.recomLabel} style={{backgroundColor: info.backgroundColor}}>
            {info.icon} &nbsp; &nbsp;{info.title}
        </Text>
      </Box>
      <Box as="ul" sx={styles.list}>
        {info?.info?.map((item, index) => (
          <li key={index}>
              <span sx={{color: info.backgroundColor}}>
                {item.icon}
              </span>
              <Heading as="h4" sx={styles.title}>
                {item.link ? 
                  <a href={item.title} target="_blank" >{item.title}</a> 
                  : item.title }
              </Heading>

              { item.date && <span sx={styles.date}>{item.date}</span>}
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default infoTable;

const styles = {
  infoTable: {
    background: 'white',
    borderRadius: 10,
    position: 'relative',
    padding:'1em',
    m:'1em',
    boxShadow: '0px 15px 20px rgb(91, 132, 193, 0.31)',
  },
  recomLabel: {
    fontWeight: 70,
    fontSize: [1, 2, 4],
    lineHeight: 2,
    borderRadius: '8px 8px 0px 0px',
    position: 'absolute',
    left: 0,
    mt: '-35px',
    right: 0,
    minHeight: [30, 35],
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    mt:2,
    fontSize: [1, null, null, 3],
    lineHeight: 1.5,
    overflowWrap:'break-word',
    hyphens: 'auto',
  },
  date: {
    flex:2,
    mr:'auto',
    textAlign:'end',
    mt:2,
    fontSize: [1, null, null, 3],
    lineHeight: 1.5,
  },
  subtitle: {
    color: '#343D48',
    fontSize: 1.5,
    lineHeight: 0.62,
    mt: '8px',
  },
  list: {
    listStyle: 'none',
    padding: 1,
    mt:10,
    li: {
      m:'auto',
      display: 'flex',
      alignItems: 'flex',
      svg: {
        height: [30, null, null, 40],
        width: [30, null, null, 40],
      },
      'span:first-of-type': {
        mr: '13px',
        mt: '5px',
      },
    }, 
  }
};
