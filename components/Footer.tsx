import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dim text-darkwhite py-4">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>Potted Plants</div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <Link href="/about" className="hover:text-darkblue dark:hover:text-lightblue">
              About
            </Link>
            <Link href="/features" className="hover:text-darkblue dark:hover:text-lightblue">
              Features
            </Link>
            <Link href="/contact" className="hover:text-darkblue dark:hover:text-lightblue">
              Contact
            </Link>
            <Link href="/" className="hover:text-darkblue dark:hover:text-lightblue">
              go to home
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Popular</h4>
            <Link href="/features" className="hover:text-darkblue dark:hover:text-lightblue">
              Product Features
            </Link>
            <Link href="/features" className="hover:text-darkblue dark:hover:text-lightblue">
              Benefits
            </Link>
            <Link href="/features" className="hover:text-darkblue dark:hover:text-lightblue">
              How To Use
            </Link>
            <Link href="/features" className="hover:text-darkblue dark:hover:text-lightblue">
              privacy policy
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Contact us</h4>
            <p>cashivo24@gmail.com</p>
            <p>
              Visit our headoffice: <br /> AVe, Texas city, USA
            </p>
            <div className="flex flex-col gap-2">
              <p>Follow our socials:</p>
              <div className="flex gap-x-6 text-xl text-darkwhite">
                <FaFacebook className="hover:text-darkblue dark:hover:text-lightblue" />
                <FaInstagramSquare className="hover:text-darkblue dark:hover:text-lightblue" />
                <FaSquareXTwitter className="hover:text-darkblue dark:hover:text-lightblue" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>All rights reserved</p>
          <small>
            <a href="https://www.vecteezy.com/free-photos/online">Online Stock photos by Vecteezy</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
