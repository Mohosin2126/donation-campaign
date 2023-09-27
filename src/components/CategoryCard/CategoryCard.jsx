

const CategoryCard = ({ category }) => {
  const { id, Picture, Price, Title, Category, Description, Card_bg, Category_bg, Text_button_bg } = category;

  return (
    <div className=" mt-10 w-90 lg:w-full gap-5">
      <div className="flex items-center gap-5 " style={{ backgroundColor: Card_bg }}>
        <div>
          <img src={Picture} className="rounded-lg shadow-2xl w-56 h-52" alt={Title} />
        </div>
        <div>
          <button style={{ backgroundColor: Category_bg, color: Text_button_bg }} className="py-1 px-2 border-1 rounded">
            {Category}
          </button>
          <p  className="ml-2 mt-1 text-xl font-semibold">
            {Title}
          </p>
          <p style={{ color: Text_button_bg }}>{Price}</p>
          <button className="btn-sm mt-4 text-white" style={{ backgroundColor: Text_button_bg }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
