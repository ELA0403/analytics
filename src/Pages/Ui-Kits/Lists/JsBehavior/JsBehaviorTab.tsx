import { Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const JsBehaviorTab = ({ tabId }: { tabId: string }) => {
  return (
    <>
        <div className="tab-content" id="nav-tabContent">
            <div className={`tab-pane fade list-behaviors ${tabId === "1" ? "show active" : "" }`} id="list-home" >
                <div className="d-flex mb-xl-4 list-behavior-1">
                    <div className="flex-shrink-0">
                        <Image className="tab-img image-fluid" src={dynamicImage("blog/img.png")} alt="home" />
                    </div>
                    <div className="flex-grow-1">
                        <P className="mb-xl-0 mb-sm-4">{"We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively."}</P>
                    </div>
                </div>
                <div className="d-xl-flex list-behavior-2">
                    <div className="flex-grow-1">
                        <P className="mb-0">{"When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value, and guiding visitors to the next step all depend on a page's design."}</P>
                    </div>
                    <div className="flex-shrink-0"> 
                        <Image className="tab-img img-fluid" src={dynamicImage("blog/blog.jpg")} alt="home" />
                    </div>
                </div>
            </div>
            <div className={`tab-pane fade ${tabId === "2" ? "show active" : "" }`} id="list-profile">
                <div className="flex-space align-items-center list-light-dark contact-profile">
                    <Image className="tab-img" src={dynamicImage("avtar/3.jpg")} alt="profile" />
                    <UL className="d-flex flex-column gap-2 simple-list">
                        <LI><strong>Visit Us: </strong>	2600 Hollywood Blvd,Florida, United States-	33020</LI>
                        <LI><strong>Mail Us:</strong>contact@us@gmail.com</LI>
                        <LI><strong>Contact Number: </strong>(954) 357-7760</LI>
                    </UL>
                </div>
            </div>
            <div className={`tab-pane fade ${tabId === "3" ? "show active" : "" }`}  id="list-messages">
                <UL className="d-flex flex-column gap-1 simple-list">
                    <LI>{"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}</LI>
                    <LI> <strong>Visit Us: </strong>2600 Hollywood Blvd,Florida, United States-	33020</LI>
                    <LI> <strong>Mail Us:</strong>contact@us@gmail.com</LI>
                    <LI><strong>Contact Number: </strong>(954) 357-7760</LI>
                </UL>
            </div>
            <div className={`tab-pane fade ${tabId === "4" ? "show active" : "" }`} id="list-settings">
                <UL className="d-flex flex-column gap-2 simple-list">
                    <LI><strong>Available pages in Theme: </strong></LI>
                    <LI>
                        {'-->'} {" Typography: Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appeaLIng to the reader."}
                    </LI>
                    <LI>
                        {'-->'} {"Tooltip: A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). "}
                    </LI>
                </UL>
            </div>
        </div>
    </>
  )
}

export default JsBehaviorTab