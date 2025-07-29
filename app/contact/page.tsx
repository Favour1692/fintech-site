import { FaAddressCard, FaPhoneAlt, FaClock, FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="pt-[6%] bg-darkwhite dark:bg-graphite">
      {/* contact information */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase">contact information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2">
                <FaAddressCard />
                <h3 className="capitalize">office address</h3>
              </div>
              <p className="capitalize">4567 horizon plaza, san francisco</p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2">
                <FaPhoneAlt />
                <h3 className="capitalize">phone</h3>
              </div>
              <p>+1 234 5678</p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2">
                <MdEmail />
                <h3 className="capitalize">email</h3>
              </div>
              <p>4567 horizon plaza, san francisco</p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2">
                <FaClock />
                <h3 className="capitalize">working hours</h3>
              </div>
              <p>Mondays to Fridays: 9:00 AM - 5:00 PM (EST)</p>
              <p>Closed on weekends and federal holidays</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="py-8 px-4 bg-dim text-darkwhite">
        <div className="w-full lg:w-[70%] mx-auto">
          <h2 className="uppercase mb-4">contact form</h2>
          <form action="" className="pt-8 pb-6 my-8 px-4 bg-darkwhite text-graphite dark:bg-graphite dark:text-darkwhite">
            <div className="flex flex-col gap-4 px-4 w-full md:w-[80%] mx-auto">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="">
                  Full Name:
                </label>
                <input type="text" placeholder="Enter full name*" id="name" autoComplete="on" required className="py-4 w-full border-2 border-dim" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input type="email" placeholder="Enter email address*" id="email" autoComplete="on" required className="py-4 w-full border-2 border-dim" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="">
                  Phone number
                </label>
                <input type="tel" placeholder="Enter phone number*" id="phone" autoComplete="on" required className="py-4 w-full border-2 border-dim" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="">
                  Message
                </label>
                <textarea placeholder="Your Message or query..." id="message" autoComplete="on" required className="w-full h-auto border-2 border-dim"></textarea>
              </div>
            </div>
            <div className="flex flex-col place-content-center pt-6">
              <button type="submit" className="bg-darkblue dark:bg-lightblue hover:bg-dim hover:text-darkwhite py-3 px-8 mx-auto">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* help and support */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase">need help? we're here for you</h2>
          <div className="flex flex-col gap-4">
            <p>From quick question to in-depth assistance, our support team is ready to help. We believe in clear answers, fast responses and making sure you never feel stuck.</p>
            <p>Not sure where to start, our FAQ sectio covers the most common questions. If you still need help, reach out to us using the contact form above.</p>
            <div className="text-left">
              <Button variant="outline" className="font-semibold bg-lightblue hover:bg-ivory dark:bg-darkblue dark:hover:bg-darkwhite dark:hover:text-graphite mx-auto">
                Visit FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* social handles */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div className="flex flex-col gap-2 items-center">
              <h2 className="uppercase">connect with us instantly</h2>
              <p>Reach out to us on any of our social handles</p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <FaInstagramSquare />
                  <h3 className="capitalize">cashivo_app</h3>
                </div>
                <div className="flex gap-2">
                  <BsTwitterX />
                  <h3 className="capitalize">cashivo24</h3>
                </div>
                <div className="flex gap-2">
                  <FaFacebook />
                  <h3 className="capitalize">Cashivo</h3>
                </div>
                <div className="flex gap-2">
                  <FaLinkedin />
                  <h3 className="capitalize">Cashivo</h3>
                </div>
              </div>
            </div>
            {/* image */}
            <div>
              <Image src="/contact1.webp" alt="social icons cluster" width={400} height={225} className="rounded-2xl"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
