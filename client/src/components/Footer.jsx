import React, { useContext } from 'react'
import { AppBar } from '@material-ui/core'

import { StyleContext } from '../context/StyleContext'
import rey from '../assets/rey.jpg'
import travis from '../assets/trav.jpg'
import './footer.css'

const Footer = () => {
    const { useStyle } = useContext(StyleContext)
    const classes = useStyle();

    return (
        <>
        <AppBar square className={classes.footer}>
            <div className="footer">
                <h1>L O G O.</h1>

                <div className="footer-self">
                    <h1></h1>
                    <div>
                        <img src={rey} />
                        <h1>Rey</h1>
                    </div>
                    <div>
                        <img src={travis}/>
                        <h1>Travis</h1>
                    </div>
                </div>

                <ul className="footer-sitemap">
                    <li> <a>About       </a> </li>
                    <li> <a>Newsletter  </a> </li>
                    
                </ul>

                

            </div>
        </AppBar>
        </>
    )
}

export default Footer
