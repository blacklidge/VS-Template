/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
// import { GoArrowDown } from "react-icons/go"
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
            <div className="flexbutt" style={{display:'flex', gap:'30px'}}>
                  <div className="flexcheek " style={{padding:'0 2rem', maxHeight:'90vh',}}>
            
            
                      <h1 className="title1" style={{fontWeight:'bold', fontSize:''}}><strong>{frontmatter.title}</strong></h1>
                      
                      <h2
                        className="tagline1"
                        sx={{
                          color: "",
                        }}
                      >
                        {frontmatter.tagline}
                      </h2>
            
                      <div
                      style={{}}
                        className="description"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
              
              <br />
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
            
                        
                      </Link>
                  </div>
            
            
            
                    
            
            
                  <div className="flexcheek" style={{position:'relative', maxHeight:'70vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
             
             
            
            
             <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'70vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
               
            
            
            
            
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
            
            
            
            <ScrollAnimation className="" animateIn="bounceInUp" delay={550} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'', margin:'', padding:'',  width:'', zIndex:'', textAlign:'',}}>
            <div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
              <Newsignup />
              </div>
            </ScrollAnimation>

            </div>
            
                  

                  </div> 
            </div>
            </article>
            </section>
            
            
            ) : (
              ""
            )}
            {/* end show Info */}




<CasePanels />




{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts">
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>

  

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