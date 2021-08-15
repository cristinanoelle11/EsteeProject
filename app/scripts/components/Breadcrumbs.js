/**
 * This file renders the breadcrumbs
 *
 */
import React from 'react';
 
const Breadcrumbs = () => {

    return (
        <div className="elc-breadcrumbs">
			<ol class="Breadcrumbs__BreadcrumbsList-sc-1tnxa7w-0 iXqFZS elc-breadcrumbs js-breadcrumbs">
				<li class="Breadcrumbs__Item-sc-1tnxa7w-2 bpLBUD elc-breadcrumbs-item">
					<span aria-label="Home" class="Breadcrumbs__Breadcrumb-sc-1tnxa7w-1 cZsCru">
						<a href="https://www.esteelauder.com" title="Home" class="Breadcrumbs__StyledAnchor-sc-1tnxa7w-3 iHSoNV">
							<p class="Typography__Body2-sc-1fbxrya-7 Breadcrumbs__AnchorText-sc-1tnxa7w-4 eBfePo elc-body--2">
								Home
							</p>
						</a>
					</span>
				</li>
				<p class="Typography__Body2-sc-1fbxrya-7 Breadcrumbs__Delimiter-sc-1tnxa7w-5 iBUrHG elc-breadcrumbs-delimiter elc-body--2">
					/
				</p>
				<li class="Breadcrumbs__Item-sc-1tnxa7w-2 bpLBUD elc-breadcrumbs-item">
					<span aria-label="Repair Serum" class="Breadcrumbs__Breadcrumb-sc-1tnxa7w-1 cZsCru">
					<a href="https://www.esteelauder.com/products/689/product-catalog/skin-care/repair-serum" title="Repair Serum" class="Breadcrumbs__StyledAnchor-sc-1tnxa7w-3 iHSoNV">
						<p class="Typography__Body2-sc-1fbxrya-7 Breadcrumbs__AnchorText-sc-1tnxa7w-4 eBfePo elc-body--2">
							Repair Serum</p>
						</a>
					</span>
				</li>
			</ol>
		</div>
    );

}
 
// Export out the React Component
export default Breadcrumbs;