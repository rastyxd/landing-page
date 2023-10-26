import "./Footer.css";
const Footer = ({ bg }) => {
  return (
    <>
      {" "}
      <footer className={`${bg} text-sm sm:text-md pt-10 pb-5
      justify-center flex content-between text-left`}>
        <div className="flex p-4">
          Home
        </div>
        <div className="thin bg-gray-300 mt-3"></div>
        <div className="flex p-4">
          Contact Us
        </div>
        <div className="thin bg-gray-300 mt-3"></div>
        <div className="flex p-4">
          Terms of service
        </div>
      </footer>{" "}
    </>
  );
};
export default Footer;
