import React, {useEffect} from 'react'
import Banner from './pagebanner/Banner'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Me';
  }, []);
  return (
    
  <Banner heading="Contact" coheading="Get in Touch"/>
  )
}

export default Contact