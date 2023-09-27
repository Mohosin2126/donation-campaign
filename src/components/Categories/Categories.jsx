/* eslint-disable react/prop-types */
import CategoriesCard from "./CategoriesCard";


const Categories = ({categories}) => {  
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            categories?.map(category=><CategoriesCard key={category.id} category={category}></CategoriesCard>)
          }
        </div>
    );
};

export default Categories;