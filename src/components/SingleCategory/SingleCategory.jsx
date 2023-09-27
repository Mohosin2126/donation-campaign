import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonDetails from "./DonDetails";

const SingleCategory = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  const allCategory = useLoaderData();

  useEffect(() => {
   
    const categoryId = parseInt(id, 10);

    const findCategory = allCategory.find((category) => category.id === categoryId);
    setCategory(findCategory);
  }, [id, allCategory]);

  return (
    <div>
      <DonDetails category={category} />
    </div>
  );
};

export default SingleCategory;
