import React from 'react';
import Tabs from "./Tabs";

class HowTo extends React.Component {
	  constructor(props) {
        super(props);

        
    }
showHideIngre(e){
	var inbar = document.getElementById("inbar");
	var chkk = document.getElementById("checkboxIn");
	var chklabelIN = document.getElementById("chkboxinid");
	if (chkk.checked){
			 inbar.classList.add("up");
             inbar.classList.remove("down");
			 chklabelIN.classList.add("in-icon-minus");
			 chklabelIN.classList.remove("in-icon-plus");
		} else {
			inbar.classList.remove("up");
            inbar.classList.add("down");
			 chklabelIN.classList.add("in-icon-plus");
			 chklabelIN.classList.remove("in-icon-minus");
		}
	
}
 showHideHowTo(e) {
        var howbar = document.getElementById("howbar");
        var chkboxx = document.getElementById("checkboxHow");
		var chklabel = document.getElementById("chkboxhowid");
		
 
		
//        navbar.style.display = chkbox.checked ? "flex" : "none";

        if (chkboxx.checked) {
             howbar.classList.add("on");
             howbar.classList.remove("off");
			 chklabel.classList.add("how-icon-minus");
			 chklabel.classList.remove("how-icon-plus");
        } else {
             howbar.classList.remove("on");
             howbar.classList.add("off");
			 chklabel.classList.add("how-icon-plus");
			 chklabel.classList.remove("how-icon-minus");
        }
    }
	render() {
		const { how_to_use } = this.props;
		
			return (
				 <div className="elc-howTo">
				 <div className = "howContainer">
				 <h2 className = "titles"> How to Use </h2>
					<input type="checkbox" id="checkboxHow" onClick={(e) => this.showHideHowTo(e)}/>
						<label htmlFor="checkboxHow">
							<i id="chkboxhowid" className="how-icon-plus"></i>
						</label>
						<div className="off" id="howbar">
							<div dangerouslySetInnerHTML={{ __html: how_to_use }}></div>
						</div>
						</div>
						<div className = "ingredientsContatiner">
			   <h2 className = "titles"> Ingredients </h2>
					<input type="checkbox" id="checkboxIn" onClick={(e) => this.showHideIngre(e)}/>
						<label htmlFor="checkboxIn">
							<i id="chkboxinid" className="in-icon-plus"></i>
						</label>
						<div  className="off" id="inbar">
							<div dangerouslySetInnerHTML={{ __html: `Ingredients: Water\\\\Aqua\\\\Eau, Bifida Ferment Lysate, Peg-8, Propanediol, Bis-Peg-18 Methyl Ether Dimethyl Silane, Methyl Gluceth-20, Glycereth-26, Peg-75, Butylene Glycol, Adansonia Digitata Seed Extract, Tripeptide-32, Sodium Hyaluronate, Yeast Extract\\\\Faex\\\\Extrait De Levure, Lactobacillus Ferment, Cola Acuminata (Kola) Seed Extract, Anthemis Nobilis (Chamomile) Flower Extract, Hydrolyzed Algin, Pantethine, Caffeine, Lecithin, Sodium Rna, Bisabolol, Squalane, Glycerin, Oleth-3 Phosphate, Caprylyl Glycol, Oleth-3, Oleth-5, Choleth-24, Hydrogenated Lecithin, Jojoba Wax Peg-120 Esters, Ceteth-24, Tocopheryl Acetate, Carbomer, Triethanolamine, Tetrasodium Edta, Bht, Xanthan Gum, Potassium Sorbate, Disodium Edta, Phenoxyethanol, Red 4 (Ci 14700), Yellow 5 (Ci 19140) <ILN47580>` }}></div>
						</div> 
					
					</div>
				</div>
			);
        }
    
}
 
export default HowTo;
