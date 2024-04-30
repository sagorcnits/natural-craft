import { useEffect, useState } from "react";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands";
import CategoriCard from "../../components/CategoriCard";
import CraftCard from "../../components/CraftCard";
import Banner from "./Banner";
import ReviewSlider from "./ReviewSlider";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const itemsData = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // console.log(theme)

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Banner></Banner>
      </div>
      <section className="my-16 max-w-6xl mx-auto ">
        <Fade>
          <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
            Our Best <span className="text-orange">Femous Craft</span>
          </h1>
        </Fade>
        <div className="divider-text"></div>
        <Fade direction="left">
          <p className="poppins-paragraph text-center py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            a! Distinctio alias, <br /> delectus debitis in nesciunt optio
            impedit, quasi perspiciatis animi commodi
          </p>
        </Fade>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {itemsData.slice(0, 6).map((item, id) => (
            <Zoom direction="right">
              <CraftCard key={id} item={item}></CraftCard>
            </Zoom>
          ))}
        </div>
      </section>
      <section className="my-4  max-w-6xl mx-auto border-b border-dashed">
        <Fade>
          <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
            <span className="text-orange">Featured</span> Categories
          </h1>
        </Fade>
        <div className="divider-text"></div>
        <Bounce>
          <p className="poppins-paragraph text-center py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            a! Distinctio alias, <br /> delectus debitis in nesciunt optio
            impedit, quasi perspiciatis animi commodi
          </p>
        </Bounce>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-10">
          {categories.map((categorie, id) => (
            <Fade direction="up">
              <CategoriCard key={id} categorie={categorie}></CategoriCard>
            </Fade>
          ))}
        </div>
      </section>
      <section className="my-14">
        <Zoom>
        <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold py-3">
          Most Puppoler <span className="text-orange"> Brands</span>
        </h1>
        </Zoom>
        <div className="divider-text"></div>
        <Bounce>
        <p className="poppins-paragraph text-center py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a!
          Distinctio alias, <br /> delectus debitis in nesciunt optio impedit,
          quasi perspiciatis animi commodi
        </p>
        </Bounce>
        <Brands></Brands>
      </section>
     <section className="max-w-6xl mx-auto border-t border-dashed">
        <Bounce>
        <h1 className="text-center text-[30px] md:text-[40px] poppins-font font-bold pb-2 pt-10 py-3">
          <span className="text-orange">What Our </span> Clients Saying
        </h1>
        <div className="divider-text"></div>
        </Bounce>
     <Zoom direction="up">
        <div className="my-14">
          <ReviewSlider></ReviewSlider>
        </div>
     </Zoom>
      </section>
    </div>
  );
};

export default Home;
