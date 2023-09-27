import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "../Header/Banner";


const Home = () => {
 const categories =useLoaderData()



    return (
        <div>
          <Banner></Banner>
          <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;