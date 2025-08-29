import {
  FaAddressCard,
  FaPhoneAlt,
  FaClock,
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import AnimatedBtn from "@/components/AnimatedBtn";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="pt-[5vh] lg:pt-8 bg-darkwhite dark:bg-graphite overflow-x-hidden">
      {/* contact information */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase" data-aos="fade-up">
            contact information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center py-4">
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2 items-center">
                <FaAddressCard data-aos="fade-left" data-aos-delay="100" />
                <h3
                  className="capitalize"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  office address
                </h3>
              </div>
              <p className="capitalize" data-aos="fade-up">
                4567 horizon plaza, san francisco
              </p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2 items-center">
                <FaPhoneAlt data-aos="fade-left" data-aos-delay="100" />
                <p
                  className="capitalize"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  phone
                </p>
              </div>
              <p data-aos="fade-up">+1 234 5678</p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2 items-center">
                <MdEmail data-aos="fade-left" data-aos-delay="100" />
                <p
                  className="capitalize"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  email
                </p>
              </div>
              <p data-aos="fade-up">4567 horizon plaza, san francisco</p>
            </div>
            <div className="flex flex-col gap-2 xl:items-center">
              <div className="flex gap-2 items-center">
                <FaClock data-aos="fade-left" data-aos-delay="100" />
                <h3
                  className="capitalize"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  working hours
                </h3>
              </div>
              <p data-aos="fade-up">
                Mondays to Fridays: 9:00 AM - 5:00 PM (EST)
              </p>
              <p data-aos="fade-up">Closed on weekends and federal holidays</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-dim text-darkwhite">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase mb-4" data-aos="fade-up">
            contact form
          </h2>
          <form
            action=""
            className="pt-8 pb-6 my-8 px-4 bg-darkwhite text-graphite dark:bg-graphite dark:text-darkwhite"
            data-aos="zoom-in"
          >
            <div className="flex flex-col gap-4 px-4 w-full md:w-[80%] mx-auto">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="" data-aos="fade-up">
                  Full Name:
                </label>
                <Input
                  type="text"
                  placeholder="Enter full name*"
                  id="name"
                  autoComplete="on"
                  required
                  className="py-4 w-full border-2 border-contrast dark:border-dim"
                  data-aos="fade-left"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="" data-aos="fade-up">
                  Email address
                </label>
                <Input
                  type="email"
                  placeholder="Enter email address*"
                  id="email"
                  autoComplete="on"
                  required
                  className="py-4 w-full border-2 border-contrast dark:border-dim"
                  data-aos="fade-left"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="" data-aos="fade-up">
                  Phone number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter phone number*"
                  id="phone"
                  autoComplete="on"
                  required
                  className="py-4 w-full border-2 border-contrast dark:border-dim"
                  data-aos="fade-left"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="" data-aos="fade-up">
                  Message
                </label>
                <Textarea
                  placeholder="Your Message or query..."
                  id="message"
                  autoComplete="on"
                  required
                  className="w-full h-auto border-2 border-contrast dark:border-dim"
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div className="flex flex-col place-content-center pt-6">
              <button
                type="submit"
                className="bg-darkblue dark:bg-lightblue hover:bg-dim dark:hover:bg-dim hover:text-darkwhite py-2 px-8 mx-auto rounded-lg"
                data-aos="fade-left"
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* help and support */}
      <div className="pt-16 pb-10 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase" data-aos="fade-up">
            need help? we&apos;re here for you
          </h2>
          <div className="flex flex-col gap-4">
            <p data-aos="fade-up" data-aos-delay="100">
              From quick question to in-depth assistance, our support team is
              ready to help. We believe in clear answers, fast responses and
              making sure you never feel stuck.
            </p>
            <p data-aos="fade-up" data-aos-delay="150">
              Not sure where to start, our FAQ sectio covers the most common
              questions. If you still need help, reach out to us using the
              contact form above.
            </p>
            <div className="text-left">
              <Link href="/features#faq">
                <AnimatedBtn data-aos="fade-right">Visit FAQ</AnimatedBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* social handles */}
      <div className="pt-10 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:items-center">
            {/* text */}
            <div className="flex flex-col gap-2 items-start lg:items-center">
              <h2 className="uppercase" data-aos="fade-up">
                connect with us instantly
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Reach out to us on any of our social handles
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <FaInstagramSquare data-aos="fade-up" />
                  <p className="capitalize" data-aos="fade-up">
                    cashivo_app
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <BsTwitterX data-aos="fade-up" />
                  <p className="capitalize" data-aos="fade-up">
                    cashivo24
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaFacebook data-aos="fade-up" />
                  <p className="capitalize" data-aos="fade-up">
                    Cashivo
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaLinkedin data-aos="fade-up" />
                  <p className="capitalize" data-aos="fade-up">
                    Cashivo
                  </p>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image
                src="/contact1.webp"
                alt="social icons cluster"
                width={400}
                height={225}
                className="rounded-2xl"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
