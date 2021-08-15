/**
 * This file renders the product attributes
 *
 */
import React from 'react';


const ProductAttributes = ({ attributes }) => {

    return (
        <div className="elc-product-attributes">
            {attributes.map(attribute => {
                return (
                    <div className="product-attribute" key={attribute.label1}>
					

						<div className ="fourAttributes">
							<h3 className ="first">{attribute.label1}</h3>
							<p className = "wordsAttribute" dangerouslySetInnerHTML={{ __html: attribute.content1 }}></p>
						</div>
						<div className ="fourAttributes">
							<h3 className ="second">{attribute.label2}</h3>
							<p className = "wordsAttribute" dangerouslySetInnerHTML={{ __html: attribute.content2 }}></p>
						</div>
						<div className ="fourAttributes">
							<h3 className ="third">{attribute.label3}</h3>
							<p className = "wordsAttribute" dangerouslySetInnerHTML={{ __html: attribute.content3 }}></p>
						</div>
						<div className ="fourAttributes">
							<h3 className ="fourth">{attribute.label4}</h3>
							<p className = "wordsAttribute" dangerouslySetInnerHTML={{ __html: attribute.content4 }}></p>
						</div>
					
                    </div>
                )
            })}
			
        </div>
    );



}

// Export out the React Component
export default ProductAttributes;
