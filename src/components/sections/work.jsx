import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import { gsap, Power3 } from "gsap";

const Work = () => {

    useEffect(() => {
        gsap.timeline({ scrollTrigger: {
            // markers: true,
            trigger: "#work",
            start: "center center",
            end: "center center",
            toggleActions: "play none reverse none"
        }})
        .from(".card", {
            duration: 0.5,
            ease: Power3.easeOut,
            stagger: {
                amount: 0.3,
                from: "end"
            },
            scale: 0.8,
            yPercent: 60,
            autoAlpha: 0
        })
        .from(".card .details .title p", {
            duration: 0.5,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.2,
            },
            yPercent: 100,
            autoAlpha: 0,
        }, "<0.35")

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

    return (
        <>
            <div className="divider" id="work"/>
            <section className="work">
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[1].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">
                                <p>Embedded </p>
                                <p>System</p>
                            </div>
                            <div className="content">
                                <p>I used to be working in the controlling filed. Design and assemble the printed circuit board based on the requirement, flash the control program into the chips and finally integrate it with the system.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image image2">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[0].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">
                                <p>System </p>
                                <p>Monitoring</p>
                            </div>
                            <div className="content">
                                <p>Programming the monitoring system has a plenty of fun. And this is when I start to equip myself with web developing knowledge and end up with making my mind to become a full-stack developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="image">
                            <Img className="gatsbyImage" draggable={false} fluid={data.images.edges[2].node.childImageSharp.fluid}/>
                        </div>
                        <div className="details">
                            <div className="title">
                                <p>Trading </p>
                                <p>Advisory</p>
                            </div>
                            <div className="content">
                                <p>Understand more about the MERN full-stack development by implementing and maintaining an customizable dashboard web application and supporting our data scientist team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="workSectionCover"/>
        </>
    )
}

export default Work
