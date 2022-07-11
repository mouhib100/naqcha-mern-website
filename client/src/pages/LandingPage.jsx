import React from 'react'
import { About } from '../Sections/about/index'
import { ContactUs } from '../Sections/contact/index'
import { Home } from '../Sections/home/index'
import { Training } from '../Sections/training/index'
import Headermain from "../header/index";



const LandingPage = (props) => {
    return (
        <div>
            <Headermain />
            <Home />
            <About />
            <Training />
            <ContactUs />
        </div>
    )
}

export default LandingPage
