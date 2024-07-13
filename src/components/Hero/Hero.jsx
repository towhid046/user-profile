import heroBgImg from "../../assets/images/hero/banner.svg";
const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-36"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    ></section>
  );
};

export default Hero;
