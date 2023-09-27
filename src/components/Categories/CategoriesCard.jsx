/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CategoriesCard = ({category}) => {
        
const {id,Picture,Title,Category,Text_button_bg,Description,Price,Category_bg,Card_bg
}=category 
    return (
        <div>
            <Link to={`/Donation-Details-page/${id}`} ><div style={{ backgroundColor: Card_bg }}  className="card card-compact gap-2   ">
  <figure><img className="h-48" src={Picture} alt="Shoes" /></figure>
  <div>
    <button  style={{ backgroundColor:Category_bg ,color:Text_button_bg} }className=" py-1 px-2 border-1 rounded text-lg ml-2" >{Category}</button>
    <p style={{ color:Text_button_bg} } className="ml-2 mt-1 text-base font-semibold">{Title}</p>
    
  </div>
</div></Link>
        </div>
    );
};

export default CategoriesCard;