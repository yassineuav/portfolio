
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import About from 'sections/about';
import Skills from 'sections/Skills';
import WorksBanner from 'sections/worksBanner';
import RecentWorks from 'sections/recentWorks';

import CustomerSupport from 'sections/customer-support';
import Partner from 'sections/partner';
import SkillDetails from 'sections/skillsDetails';


import { client } from '../client';

export default function IndexPage({works, skills}) {

  return (
    
  <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="android developer, software engineer, mobile developer, web developer" />
          <Banner />
          <About />
          <Skills />          
          <WorksBanner />

          {works.map((item, index) => (
            <RecentWorks
              key={index} 
              data = {item}
            />))}

          <Partner />

          <SkillDetails 
            data={skills}
          />

          <CustomerSupport />
       
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const workQuery = '*[_type == "works"]';
  const skillQuery = '*[_type == "skills"]';

  const works = await client.fetch(workQuery)
  const skills = await client.fetch(skillQuery)
  
  return {
    props: {
      works,
      skills
    }, 
  }
}
