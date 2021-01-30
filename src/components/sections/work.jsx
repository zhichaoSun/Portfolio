import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import { gsap, Power3 } from "gsap";

import TransitionLink from "gatsby-plugin-transition-link";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";

const Work = ({scrollTo}) => {

    useEffect(() => {
        gsap.from(".work .scrollUpIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".work .scrollUpIndicator .third svg",
                start: "bottom bottom",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 0,
                // once: true
            },
            opacity: 0,
            y: "-10vh"
        })
        gsap.to(".work .scrollDownIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".work .scrollDownIndicator .third svg",
                start: "bottom bottom",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 0,
                // once: true
            },
            opacity: 0,
            y: "10vh"
        })
    }, [])

    const data = useStaticQuery(graphql`
    {
      images: allFile(filter: {extension: {eq: "jpg"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

    console.log(JSON.stringify(data, null, 4))

    return (
        <>
            <div className="divider" id="work"></div>
            <section className="work">
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[2].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">Embedded System</div>
                            <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima officiis illo architecto quam, corrupti ipsa minus maiores placeat vitae maxime similique commodi nihil voluptate.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image image2">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[0].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">System Monitoring</div>
                            <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam, temporibus mollitia iste possimus unde. Qui tenetur minus rerum ullam, deleniti ipsa exercitationem aperiam sapiente.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[1].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">Trading Advisory</div>
                            <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magnam totam laboriosam esse reiciendis commodi officiis voluptatum autem beatae sunt itaque, accusamus perferendis.</div>
                        </div>
                    </div>
                </div>
                    
                <div className="scrollUpIndicator" onClick={()=>scrollTo("about")}>
                    <div className="icon first"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon second"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon third"><BsCaretUpFill size="2rem"/></div>
                </div>
                <div className="scrollRightIndicator">
                    <TransitionLink 
                        to="/toys"
                        exit={{
                            length: 0.8,
                            trigger: ({node}) => (
                                gsap.timeline()
                                .to(node.querySelector(".workSectionCover"), {
                                    duration: 0.8, 
                                    xPercent: -101, 
                                    ease: Power3.easeIn,
                                })
                            )
                        }}
                        entry={{
                            delay: 0.8,
                            length: 0.8,
                            trigger: ({node}) => (
                                gsap.timeline()
                                .from(node.querySelector(".toyPageCover"), {
                                    xPercent: 100,
                                    duration: 0.8, 
                                    ease: Power3.easeOut
                                })
                            )
                        }}
                    >
                        <FaHandPointRight />
                    </TransitionLink>
                </div>
                <div className="scrollDownIndicator" onClick={()=>scrollTo("contact")}>
                    <div className="icon first"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon second"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon third"><BsCaretDownFill size="2rem"/></div>
                </div>
            </section>
            <div className="workSectionCover"></div>
        </>
    )
}

export default Work
