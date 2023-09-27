import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("Donation"));
        if (donationItems) {
            setDonations(donationItems);
        } else {
            setNoFound(
                <div className="text-center font-bold mt-48 text-2xl">
                  <p>  No Items Added</p>
                </div>
            );
        }
    }, []);

    return (
        <div>
            {noFound ? (<p>{noFound}</p>) : (<div>
                <div className="grid lg:grid-cols-2 gap-4">
                        {isShow? donations.map((category) => (<CategoryCard category={category} key={category.id}></CategoryCard> ))
                            : donations.slice(0, 4).map((category) => (<CategoryCard category={category} key={category.id}></CategoryCard>
                                ))}
                    </div>
                    {donations.length >= 4 && !isShow && ( <button
                            className="btn flex mx-auto mt-10 bg-green-500 text-white"
                            onClick={() => setIsShow(true)}
                        >
                            See All
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Donation;
