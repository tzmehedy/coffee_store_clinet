import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import icon from '../assets/images/more/logo1.png'
import { MdEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Footer = () => {
    return (
      <div className="p-10 bg-gray-200 mt-20 text-[#331A15] flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-5 w-1/2">
          <img className="w-20 h-20" src={icon} alt="" />
          <h1 className=" font-bold text-3xl">Espresso Emporium</h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex space-x-5">
            <FaFacebook className=" text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedin className=" text-2xl" />
          </div>
          <h1 className="font-bold text-xl">Get in Touch</h1>
          <div>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <MdEmail />
              info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <CiLocationOn />
              72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Contact US</h1>
          <div className="flex flex-col space-y-10 mt-2">
            <input
              type="text"
              className="p-2"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              type="email"
              className="p-2"
              name=""
              id=""
              placeholder="Email"
            />
            <textarea
              name="message"
              className="p-2"
              placeholder="Message"
              id=""
            ></textarea>
            <button className="border-2 border-[#331A15] rounded-lg font-bold p-2 ">Send Message</button>
          </div>
        </div>
      </div>
    );
};

export default Footer;