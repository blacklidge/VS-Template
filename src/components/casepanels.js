import * as React from "react"
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
import { RiSendPlane2Line } from "react-icons/ri"
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
// import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'


// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'
// import "../styles/nft.css"
const CustomBox = styled.div`

// caras





`

const CaseStudyPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden', height:'70vh'}}>
    





  <div className="slidepanel">
  








  <div className="outerpanel" style={{borderLeft:'none', height:'', display:'flex', flexDirection:'', alignItems:'center', justifyItems:'center', justifyContent:'center',}}>

{/* <span className="headline">UltraFuse®</span> */}
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', height:''}}>
          
  
          <h2 className="letter" style={{fontSize:'3vw', margin:'2rem 0 2rem 0'}}>UltraFuse® <br /><span style={{fontSize:'80%'}}>The Strongest Bond</span></h2>

          <p className="letter">UltraFuse® is a monolithic bond coat used to adhere thin asphalt mixes that are intended to be placed over asphalt or concrete surfaces.</p>

<p className="letter">Formulated with Blacklidge’s proprietary HiMod® Technology, UltraFuse results in a specially engineered, asphalt-based bond coat. A unique blend of additives and polymers greatly enhances bond strength, thus extending pavement performance.</p>

<p className="letter">UltraFuse’s strong bonding characteristics — combined with its rapid-curing, water-resistant and non-tracking capabilities — creates the industry’s strongest bond for the most demanding paving applications, including OGFCs/PFCs, SMAs and thin HMA applications.</p>


<div style={{textAlign:'center', padding:'0', margin:'10px 0 4rem 0'}}>
              <a
              className="button"
              sx={{
                cursor:'pointer',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href=""
            >Learn More about UltraFuse®</a>
  </div>

        </div>
    </div>
    <StaticImage src="../img/pagebgs/ultrafuse-ext-compressed.jpg" alt="UltraFuse®" className="pop" />
 </div>















 <div className="outerpanel" style={{borderLeft:'2px'}}>

{/* <span className="headline">UltraTack®</span> */}
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1'}}>

<h2 className="letter" style={{fontSize:'3vw', margin:'2rem 0 2rem 0'}}>UltraTack®<br /><span style={{fontSize:'80%'}}>The Original Trackless Tack®</span></h2>

          <p className="letter">Fifteen years ago, Blacklidge developed UltraTack to deliver longer-lasting, better bonding pavements enabling faster construction times and cleaner job sites. Experience for yourself why the original is always the better road.
</p>


<h3 className="letter">No tracking means a better bond.</h3>
<p className="letter">Tracking creates poorly bonded pavements that could cause delamination, potentially resulting in cracking, slipping, and shoving the pavement. UltraTack’s fast curing time means your tack coat stays where it’s supposed to, providing the superior interlayer bond needed to keep the road lasting longer.</p>


<div style={{textAlign:'center', padding:'0', margin:'10px 0 4rem 0'}}>
<a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href=""
            >Learn More</a>
  </div>

        </div>

    </div>
    <StaticImage src="../img/pagebgs/IMG_4926.jpg" alt="UltraTack®" className="pop" />
 </div>












 <div className="outerpanel" style={{borderLeft:'none'}}>

 {/* <span className="headline">ReGen®</span> */}
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1'}}>

<h2 className="letter" style={{fontSize:'3vw', margin:'2rem 0 2rem 0'}}>ReGen®<br /><span style={{fontSize:'80%'}}>Truly ReGenerating Reclaimed Asphalt</span></h2>

          <p className="letter">ReGen® is a high-performance asphalt binder rejuvenator by Blacklidge that restores characteristically flawed asphalt binder, such as RAP and RAS, to a highly durable and age-resistant state.</p>

          <p className="letter">ReGen is formulated to chemically bond with and disperse existing asphaltene molecular clusters to create an optimum balance of chemical fractions, leading to improved field aging performance. The resulting high-performance mixture provides better constructability and reliability with superior age-resistance as compared to untreated RAP mixtures.</p>


<div style={{textAlign:'center', padding:'0', margin:'10px 0 4rem 0'}}>
<a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href=""
            >Learn More</a>
  </div>

        </div> 
    </div>
    <StaticImage src="../img/pagebgs/regen-1.jpg" alt="ReGen®" className="pop" />
 </div>







    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default CaseStudyPanels