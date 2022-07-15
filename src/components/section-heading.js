import { Box, Heading, Text, Image } from 'theme-ui';

const SectionHeading = ({ title, slogan, description, emoji, ...props }) => {
  return (
    
    <Box sx={styles.heading} {...props}>
      <Text as="p" sx={styles.slogan}>
        {slogan}
      </Text>
      
      <Heading as="h3" sx={styles.title}>
        <span>{title}</span>
        <Image src={emoji} alt="emoji" />
      </Heading>
      
        <Text as="p" sx={styles.description}>
          {description}
        </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: '0 auto 50px',
  },
  slogan: {
    color: 'primary',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 2.5,
  },
  title: {
    color: 'heading',
    fontWeight: 600,
    fontSize: [4, null, null, 6],
    lineHeight: [1.33, 1.33, 1.5],
    letterSpacing: [null, null, null, 'heading'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
      maxWidth: [25, null, null, '100%'],
    },
  },

};
