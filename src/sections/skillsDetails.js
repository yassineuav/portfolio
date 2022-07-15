import { Box, Grid } from 'theme-ui';
import SkillTable from 'components/cards/skills-table';

const SkillsDetails = ({data}) => {

  return (
    <Box as="section" id="details_skills" sx={styles.section}>
      <Grid gap={2} columns={[1, 2, 2, 3, 3, 4]}>
          {data?.map((skill, index) => (
              <SkillTable 
                skills={skill} 
                key={index} />
          ))}
      </Grid>
    </Box>
  );
};

export default SkillsDetails;

const styles = {
  section: {
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
