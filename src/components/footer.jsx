import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ScrollAnimation from 'react-animate-on-scroll'
import Theme from "../components/theme"
import Consent from "../components/Consent"
import Install from "../components/Install-footer"
import Icons from "../util/socialmedia.json"
import { FaHandPointDown } from "react-icons/fa"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"
import { Link } from "gatsby"

import {
  footerStyle,
  // links,
  blurb,
  // logos,
} from "./footer.module.css"




const sIcons = Icons.socialIcons.map((icons, index) => {




  return (


    <div key={"social icons" + index}>
      {icons.icon === "facebook" ? (
        <a aria-label="Link to Facebook" title="Facebook" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiFacebookBoxFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "twitter" ? (
        <a aria-label="Link to Twitter" title="Twitter" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiTwitterFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "linkedin" ? (
        <a aria-label="Link to LinkIn" title="LinkedIn" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiLinkedinBoxFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "youtube" ? (
        <a aria-label="Link to YouTube" title="YouTube" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiYoutubeFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "instagram" ? (
        <a aria-label="Link to Instagram" title="Instgram" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiInstagramFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "rss" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiRssFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "github" ? (
        <a aria-label="Link to GitHub" title="GitHub" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiGithubFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "telegram" ? (
        <a aria-label="Link to Telegram" title="Telegram" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiTelegramFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "pinterest" ? (
        <a aria-label="Link to Pinterest" title="Pinterest" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiPinterestFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "snapchat" ? (
        <a aria-label="Link to SnapChat" title="SnapChat" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiSnapchatFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "skype" ? (
        <a aria-label="Link to Skype" title="Skype" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiSkypeFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "wordpress" ? (
        <a aria-label="Link to WordPress" title="WordPress" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <FaWordpress />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "dribbble" ? (
        <a aria-label="Link to Dribble" title="Dribble" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiDribbbleFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "medium" ? (
        <a aria-label="Link to Medium" title="Medium" href={icons.url} rel="noreferrer" target="_blank">
          <RiMediumFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "behance" ? (
        <a aria-label="Link to Behance" title="Behance" href={icons.url} rel="noreferrer" target="_blank">
          <RiBehanceFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "vk" ? (
        <a aria-label="Link to VK" title="VK" className="social" href={icons.url} rel="noreferrer" target="_blank">
          <FaVk />
        </a>
      ) : (
        ""
      )}
    </div>

  )
})









export function Footer() {
  const { siteUrl } = useSiteMetadata();

  const speedIt = "https://googlechrome.github.io/lighthouse/viewer/?psiurl=" + siteUrl + "%2F&amp;strategy=mobile&amp;category=performance&amp;category=accessibility&amp;category=best-practices&amp;category=seo&amp;category=pwa&amp;utm_source=lh-chrome-ext"






  const { companyname } = useSiteMetadata()
 


  const { showfooter } = useSiteMetadata()







  return (


    showfooter ? (
  
<>


<ScrollAnimation className="" animateIn="zoomInUp" delay={50} initiallyVisible={false} animateOnce={false} animatePreScroll={false}>

{/* <ScrollAnimation className="" animateIn="bounce" delay={10} initiallyVisible={true} animateOnce={false} animatePreScroll={true}> */}

{/* </ScrollAnimation> */}

    <footer className={footerStyle} style={{padding:'1rem 0', marginTop:'2rem', position:'relative'}}>

    {/* <FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', position:'absolute', top:'-80px', margin:'1rem auto', color:'#fff',}} /> */}
    <Consent />

    
      <div className={blurb}>


        <Link state={{modal: true}} to="/contact/" className="navbar-item  button fire" style={{margin:'10px 2rem 2rem 2rem', textDecoration:'none'}}>Got Questions?</Link>



        <Install />

 <div >
     

        { !sIcons ? (
    ""

  ) : (
    <div className="social-icons" style={{textAlign:'center', justifyContent:'center', display:'flex', alignItems:'center'}}>
       <div className="socialtext" style={{fontSize:'14px',}}>Social<br />Links</div> {sIcons}
        </div>
  )}
  
        
        </div>

        
      </div>
      <nav className="footerlinks" aria-label="footer">
      <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem', textDecoration:'none'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>
  

<div style={{textAlign: 'center', margin: '0 0 2rem 0', justifyContent: 'center', fontSize: '.75rem'}}>Copyright &copy; {(new Date().getFullYear())} {companyname}</div>

<div style={{textAlign: 'center', margin: '0 0 2rem 0', justifyContent: 'center', fontSize: '.75rem', position:'relative', right:'', top:'10px'}}>
<Theme  style={{display:'flex', alignSelf:'center',}} />

{/* <br />
<br />

<a href="https://vidsock.com" target="_blank" rel="noreferrer">Web App by VidSock</a> &nbsp; | &nbsp; <a href={speedIt} target="_blank" rel="noreferrer">Our Site Report Card</a> */}
</div>



<br />
<br />
      </nav>
   
    </footer>
    </ScrollAnimation>
</>
    ) : (
      ""
    )



    
  )
}


