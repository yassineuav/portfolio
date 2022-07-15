/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const SkillsTable = ({ skills }) => {
  return (
    <Box sx={styles.skillTable} >
      <Box sx={styles.header} > 
        <Text as="span" sx={styles.recomLabel}>
            {skills.target}
        </Text>
      </Box>
      <Box as="ul" sx={styles.list}>
        {skills?.skills?.map((item, index) => (
          <li key={index}>
              <span>
                <IoMdCheckmarkCircle />
              </span>
              <Heading as="h4" sx={styles.title}>
                {item.title}
              </Heading>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsTable;

const styles = {
  skillTable: {
    background: 'white',
    borderRadius: 10,
    position: 'relative',
    padding:'1em',
    mt:'4em',
    ml:'2em',
    boxShadow: '0px 15px 20px rgb(91, 132, 193, 0.31)',
  },
  recomLabel: {
    fontWeight: 70,
    fontSize: [1, 2, 4],
    lineHeight: 1.29,
    backgroundColor: '#52ACFF',
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
    fontSize: 3,
    lineHeight: 1.5,
    letterSpacing: '-0.55px',
  },
  subtitle: {
    color: '#343D48',
    fontSize: 1.5,
    lineHeight: 0.62,
    mt: '8px',
  },
  list: {
    width:'250px',
    listStyle: 'none',
    padding: 0,
    mt:10,
  
    li: {
      overflowWrap:'break-word',
      hyphens: 'auto',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '1em',
      svg: {
        height: 23,
        width: 23,
        color: 'green'
      },
      'span:first-of-type': {
        mr: '13px',
        mt: '5px',
      },
    }, 
  }
};
