/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
// import { GoArrowDown } from "react-icons/go"
import LoaderImg from "../img/pagebgs/DSCF3580_fix.jpg"
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import CasePanels from "../components/casepanels"
import { ImPlay } from "react-icons/im"
import styled from "styled-components"
import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 9
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`




const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    const { iconimage } = useSiteMetadata()


    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" >You need a new browser</object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      
      // url={[
      //   iframeUrl,
      //   YoutuberSuggestion1,
      //   YoutuberSuggestion2,
      //   YoutuberSuggestion3
      // ]}
      width="100%"
      height="100%"
 
      config={{
        youtube: {
          playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
      playing
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'30%', border:'0px solid red', width:'100vw', height:'100%', background:'transparent', color:'#fff', fontSize:'14px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>

    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto 0 auto'}}>
      

      {/* <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
<img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div> */}
  
      <div style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'20px'}}>Click To Play</div>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'40px'}} />
      </div>
      </button>}
        light="../assets/transparent.png"
      />
    )
  }

  


  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage vidsock triple" />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }

      />
      
      




        <div name="container21" className="container21" style={{height:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}






      </div>
  </article>
</section>




) : (
  ""
)}
{/* end show feature */}




<br />

{/* show Info */}
{ShowInfo ? (
            
       


            <section style={{ display:'', height:'', overflow:'', position:'', zIndex:'', top:''}}>
              {/* <section style={{ display:'', height:'', overflow:'', position:'relative', zIndex:'1', top:'-70vh'}}> */}
              <article>
            <div className="flexbutt" style={{display:'flex', gap:'30px', padding:'0 '}}>

            <ScrollAnimation className="" animateIn="bounceInLeft" delay={110} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>

                  <div className="flexcheek " style={{padding:'0 2rem', maxHeight:'90vh', width:'100%'}}>
            
            
                      <h1 className="title1" style={{fontWeight:'bold', fontSize:''}}><strong>{frontmatter.title}</strong></h1>
                      
                      <br /><br />
            
                      <div
                      style={{}}
                        className="description"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
              
              {/* <br />
                      <Link
                        to={frontmatter.cta.ctaLink}
                        className="button fire actionJackson"
                        style={{
                          cursor:'pointer',
                          width:'80%',
                          maxWidth:'600px',
                          margin:'0 auto',
                          display:'flex',
                          alignSelf:'center',
                          color:'#ccc'
                        }}
                      >
                        {frontmatter.cta.ctaText}
                        <span className="icon -right">
                          <RiArrowRightSLine />
                        </span>
            
                        
                      </Link> */}
                  </div>
            </ScrollAnimation>
            
            
                    
            
                  <ScrollAnimation className="" animateIn="bounceInRight" delay={110} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>

                  <div className="flexcheek" style={{position:'relative', maxHeight:'70vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
             
             
            
            
             <div style={{margin:'0 30px', zIndex:'', width:'100%', margin:'0 auto', minWidth:'400px',  borderRadius:'12px', maxHeight:'70vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
               
            
            
            
            
            {/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
                       {SecondaryImage ? (
                        // <GatsbyImage
                        //   image={SecondaryImage}
                        //   alt={frontmatter.title + " - Featured image"}
                        //   className="post-card"
                        //   style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
                        // />
                        ""
                      ) : (
                        ""
                      )}
            {/* </div> */}
            
            
            
            
            <div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
              <Newsignup />
              </div>
            

            </div>
            
                  

                  </div> </ScrollAnimation>
            </div>
            </article>
            </section>
            
            
            ) : (
              ""
            )}
            {/* end show Info */}




            <ScrollAnimation className="" animateIn="bounceInUp" delay={110} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
<div className="flexbutt featurebox" style={{display:'flex', margin:'20px 8%', padding:'', gap:'20px'}}>



<div className="flexcheek txtshadow" style={{color:'#fff', width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">About Blacklidge</h3>
<p>With more than 80 years in the road construction business, we are proud of our rich history, long-lasting client relationships, deep regional knowledge and, most importantly, the people we employ and serve. Learn more about who we are and why Blacklidge is one of the best places to work.</p>
</div>

<div className="flexcheek txtshadow" style={{color:'#fff', width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Technology</h3>
<p>Innovation drives all that we do at Blacklidge. Our team are experts in the materials and processes used in road construction; this helps us anticipate the needs of the market with cutting-edge solutions. Our products are powered by technology platforms that ensure performance and reliability in every application.</p>
</div>

<div className="flexcheek txtshadow" style={{color:'#fff', width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">Who We Serve</h3>
<p>At Blacklidge, we partner with contractors, D.O.T.’s, municipalities/cities and counties to build better roads. Our commitment to our clients can be seen in the superior quality of our products. Discover the stories of our clients here.</p>
</div>

</div>
</ScrollAnimation>

<br /><br /><br /><br />

<ScrollAnimation className="" animateIn="bounceInUp" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <div
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem',
    background:'#edad3d',
    width:'70vw',
    margin:'0 auto',
    borderRadius:'12px 12px 0 0',
  }}
>
<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'', borderRadius:'12px 12px 0 0', marginTop:'-80px', position:'relative', width:'100%', margin:'0 auto', display:'flex', justifyContent:'center', textShadow:'2px 1px 1px #222', filter:'drop-shadow(0px 0px 10px #edad3d)', border:'1px 1px 0 0 solid #000', fontSize:'40px', color:'#fff' }}>Product  Spotlight</span></div>




<CasePanels />
</ScrollAnimation>








<ScrollAnimation className="" animateIn="bounceInUp" delay={110} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>

<div
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'2rem 0 10px 0',
    padding:'0',
    fontSize:'1.7rem',
    background:'#edad3d',
    width:'70vw',
    margin:'0 auto',
    borderRadius:'12px 12px 0 0',
  }}
>
<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'', borderRadius:'12px 12px 0 0', marginTop:'', position:'relative', width:'100%', margin:'2rem auto 0 auto', display:'flex', justifyContent:'center', textShadow:'2px 1px 1px #222', filter:'drop-shadow(0px 0px 10px #edad3d)', border:'1px 1px 0 0 solid #000', fontSize:'40px', color:'#fff' }}>Meet Blacklidge</span></div>

<div className="flexbutt" style={{display:'flex', margin:'0 4%', padding:'', gap:'20px', background:'#edad3d', borderRadius:'12px' }}>


<div className="flexcheek" style={{width:'50%', padding:'2rem 0', padding:'1rem 2rem ', borderRadius:'12px', textAlign:'', alignSelf:'', }}>

{/* <h3 className="vartext">Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? VidSocks have social sharing built-in, just switch it on or off for <strong className="highlight">FREE</strong>.</p> */}

<blockquote className="frontquote" style={{width:'100%', fontSize:'150%', margin:'2rem auto', textShadow:'0px 1px 2px #fff',}}>
<p>Longer lasting roads benefit the industry, budgets, taxpayers and the environment. We are committed to lead the charge through continual innovation in all parts of our business.</p>

<div style={{textAlign:'right', marginRight:'20%', marginTop:'20px'}}> – Brit Blacklidge<br />President and CEO
</div></blockquote>

</div>

<div className="flexcheek" style={{width:'50%', padding:'2rem 2rem 0 0', justifyContent:'center', display:'', overflow:'hidden'  }}>


<div style={{overflow:'hidden', borderRadius:'12px'}}>
<ReactPlayer
              className='react-player661'
              url="https://www.youtube.com/embed/X_9vNTKuZ80"
              // url={[
              //   iframeUrl,
              //   YoutuberSuggestion1,
              //   YoutuberSuggestion2,
              //   YoutuberSuggestion3
              // ]}
              width="100%"
              height="400px"
              style={{background:'transparent', width:'500px', borderRadius:'12px'}}
              config={{
                youtube: {
                  playerVars: { showinfo:0, controls:1, start:'', end:'', mute:0  }
                },
              }}
              loop
              
              playsinline
    //           playIcon={
    //             <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
    //         <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
              
    
    //           <div style={{position:'relative', maxWidth:'', margin:'10% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important', overflow:'hidden'}}>
    //   <img className="homepage-bg" src={LoaderImg} width="" height="" alt="VidSock" style={{ width:'', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
    // </div>
          
    //           <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    //   <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
    //           </div>
    //           </button>}
    //             light={LoaderImg}
              />

</div>  





<br />

</div>



</div>
</ScrollAnimation>


{/* end show Posts */}
{ShowPosts ? (

<ScrollAnimation className="" animateIn="bounceInUp" delay={100} initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
<div id="posts" name="posts">

<div
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem',
    background:'#edad3d',
    width:'70vw',
    margin:'0 auto',
    borderRadius:'12px 12px 0 0',
  }}
>
<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'', borderRadius:'12px 12px 0 0', marginTop:'-80px', position:'relative', width:'100%', margin:'0 auto', display:'flex', justifyContent:'center', textShadow:'2px 1px 1px #222', filter:'drop-shadow(0px 0px 10px #edad3d)', border:'1px 1px 0 0 solid #000', fontSize:'40px', color:'#fff' }}>Latest Posts</span></div>
        <BlogListHome data={posts} />



        <section style={{height:'auto'}}>
  <Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>
</ScrollAnimation>
  

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}

      
      




    </Layout>
    </CustomBox>
  )
}

export default HomePage