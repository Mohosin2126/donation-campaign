
import swal from "sweetalert";

const DonDetails = ({ category }) => {
  const { id, Picture, Price, Title, Description,Text_button_bg } = category;

  const handleDonate = () => {
    const donationItems = JSON.parse(localStorage.getItem("Donation")) || [];
    const addedDonationArray = [...donationItems];

    
    const categoryId = parseInt(id, 12);
    const isExist = addedDonationArray.some((item) => item.id === categoryId);

    if (!isExist) {
      addedDonationArray.push(category);
      localStorage.setItem("Donation", JSON.stringify(addedDonationArray));
      swal("Good job!", "Thank you for donating", "success");
    } else {
      swal("Sorry", "Already donated", "error");
    }
  };

  return (
    <div>
      <div className="relative m-2">
        <img src={Picture} className="w-full " alt="" /> 
        <div className="bg-black bg-opacity-80 text-white h-16 w-full absolute bottom-0 lg:bottom-0 lg:h-32"> 
          <button className="btn  ml-4 w-24 lg:w-36 mt-2 lg:mt-12" style={{ backgroundColor: Text_button_bg ,}} onClick={handleDonate}> 
            Donate {Price}
          </button>
        </div>
      </div>
      <h1 className="text-black text-2xl font-semibold mt-5">{Title}</h1> 
      <h3 className="text-black text-base font-normal">{Description}</h3> 
    </div>
  );
};

export default DonDetails;
