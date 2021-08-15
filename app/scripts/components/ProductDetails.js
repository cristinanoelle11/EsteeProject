/**
 * This file renders the product details
 *
 */
import React from 'react';
import Tabs from "./Tabs";
import ReactPlayer from "react-player"


const ProductDetails = ({description}) => {

        return (
	
            <div className="elc-product-details">
                 <h2>Product Details</h2>
   
					<Tabs className = "tab1"> 
						<div label="ONE BOTTLE"> 
							<div dangerouslySetInnerHTML={{__html: "<ul><li>Skin feels firmer. 89% of women agreed.<SUP>(1)</SUP></li><li>Skin looks healthy, has a new bounce and vitality.</li></ul>Plus, over time, pores look diminished.<BR><BR>"}}></div>
					   </div> 
						<div label="THREE WEEKS"> 
							<div dangerouslySetInnerHTML={{__html: "<UL><LI>Lines and wrinkles appear reduced.</LI><LI>88% of women said skin looked more youthful.<SUP>(1)</SUP></LI></UL><BR><BR>"}}></div>
					   </div>
					   <div label="ONE DROPPER"> 
							<div dangerouslySetInnerHTML={{__html: "<UL><LI>Skin looks radiant and plumped with hydration—all the way through till morning.</LI><LI>8-hour anti-oxidant power.</LI><LI>72-hour hydration (includes Hyaluronic Acid).</LI><LI>Strengthens skin barrier in just 4 hours.</LI><LI>Oil-free texture.</LI></UL><BR>"}}></div>
					   </div> 
					   <div label = "EVERY DAY">
							<div dangerouslySetInnerHTML={{__html: "During the day, this serum helps protect skin from environmental assaults&shy;—a key part of skin’s own daily rhythm. Helps defend skin against the visible effects of free radical damage from environmental sources like pollution, ozone, blue light, infrared and micro dust. Provides 8-hour anti-oxidant protection to provide all-day defense against environmental assaults, and help keep skin looking younger, longer.<BR><BR>"}}></div>
					   </div> 
						<div label="EVERY NIGHT"> 
							<div dangerouslySetInnerHTML={{__html: "While you sleep, it helps ignite skin’s natural nightly repair process. Fast. A high level of Hyaluronic Acid helps lock in moisture for 72 hours. This helps create the perfect environment to optimize skin’s natural repair process.<BR><BR>Our exclusive Chronolux™ Power Signal Technology helps increase skin’s natural ability for visible self-repair, with in vitro testing showing it promotes skin’s natural renewal of vital new cells and boosts its natural production of collagen.<BR><BR>"}}></div>
					   </div> 
					 </Tabs> 
					 <ReactPlayer className='react-player' url="https://youtu.be/iPwoOgKKKbY"   playing={true} loop={true} controls={true} muted={true} fluid={false} />
					<div className ="textand">
						 <div className = "moreDescription1" dangerouslySetInnerHTML={{ __html: "<B>Fast Visible Repair and Youth-Generating Power.</B><BR><BR>Experience the next generation of our revolutionary formula—the most comprehensive Advanced Night Repair serum ever. Patented until 2033.<BR><BR>Now with Chronolux™ Power Signal Technology, this deep- and fast-penetrating face serum reduces the look of multiple signs of aging caused by the environmental assaults of modern life. Skin looks smoother and less lined, younger, more radiant and even toned.<BR><BR>" }}></div>
						 <div className = "moreDescription2" dangerouslySetInnerHTML={{ __html: "<B>THE #1 SERUM IN THE U.S.*</B><BR><BR>Proven effective for all skintones. This is the high performance face serum beautiful skin can’t live without.<BR><BR>Advanced Night Repair harnesses the restorative power of night to deliver visible renewal. It works night and day to help skin maximize its overall natural rhythm of repair and protection.<BR><BR><SUP>*Source: The NPD Group, Inc. / U.S. Prestige Beauty Total Department/Specialty, Skincare Product Layer Unit Sales, 12 months ending May 2021.<BR>(1) Consumer testing on 543 women.<BR>(2) 1.7 oz./50ml. bottle.<BR></SUP><BR><BR><BR>" }}></div>
					</div>
				
				
			</div>
			

        );

}

// Export out the React Component
export default ProductDetails;