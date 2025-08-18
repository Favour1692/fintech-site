import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { overlay, features, background, grey } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import How from "@/components/How";
import AnimatedBtn from "@/components/AnimatedBtn";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-dim overflow-x-hidden">
      {/* hero section */}
      <div className="w-full h-screen bg-dim">
        <div className="w-full h-full" style={overlay}>
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-15 items-center">
              {/* text section */}
              <div className="w-full flex flex-col gap-3 text-ivory text-center xl:text-left justify-center" data-aos="fade-right">
                <small className="uppercase" data-aos="fade-up" data-aos-delay="100">
                  trusted by over a million people
                </small>
                <h1 className="capitalize" data-aos="fade-up" data-aos-delay="200">
                  smart tools for smart financial decisions all in one platform
                </h1>
                <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
                  Manage all your finances in one smart seamless platform. Suitable for both businesses and individual finances
                </p>
                <div className="flex gap-4 mt-2 mx-auto xl:mx-0 items-center">
                  <Link href="#playstore">
                    <AnimatedBtn data-aos="fade-right" data-aos-delay="400">
                      Start free
                    </AnimatedBtn>
                  </Link>
                  <Link href="/features">
                    <Button
                      className="font-semibold bg-darkwhite hover:bg-contrast dark:bg-darkwhite text-graphite dark:hover:bg-contrast py-4 shadow-none transition-shadow hover:shadow-xl hover:shadow-black duration-200"
                      data-aos="fade-right"
                      data-aos-delay="500">
                      <span>View features</span>
                      <FaArrowRightLong />
                    </Button>
                  </Link>
                </div>
              </div>
              {/* image section */}
              <div className="mx-auto hidden xl:flex">
                <Image src="/landing.webp" alt="phone, card and coins illustration" width={500} height={500} priority data-aos="zoom-in" className="select-none"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 w-full bg-darkwhite text-graphite dark:bg-graphite dark:text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div className="flex flex-col gap-4 items-center lg:items-start" data-aos="fade-right">
              <h2 data-aos="fade-up" data-aos-delay="200">
                the best solution for your business
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Say goodbye to outdated systems, spreadsheets and financial fog. Here&apos;s a smarter way to gain control, with the right tools, all in one platform, no complexity!
              </p>
              <div className="text-left">
                <Link href="/about">
                  <AnimatedBtn data-aos="fade-right" data-aos-delay="600">
                    Learn more
                  </AnimatedBtn>
                </Link>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image src="/home1.webp" alt="lady with phone" width={500} height={333} className="rounded-2xl" data-aos="zoom-in-left"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory text-graphite dark:bg-graphite dark:text-darkwhite">
        <div className="max-w-7xl mx-auto" data-aos="fade-right">
          <h2 className="capitalize" data-aos="fade-up" data-aos-delay="200">
            best solution for your business
          </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            our platform provides you with the right tools to streamline your business and personal finances
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4" data-aos="fade-up" data-aos-delay="600">
            {features.map((data) => (
              <Card key={data.id} className="h-auto md:h-[150px] hover:bg-lightblue dark:hover:bg-darkblue shadow-2xl shadow-black hover:text-ivory border-1-dim flex flex-col justify-center items-center" data-aos="fade-left" data-aos-delay="100">
                <CardContent className="flex flex-col gap-2 items-center">
                  <div className="text-2xl font-semibold">{data.icon}</div>
                  <p>{data.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-darkwhite dark:bg-graphite">
        <div className="max-w-7xl mx-auto text-graphite dark:text-darkwhite" data-aos="fade-up">
          <h2 className="capitalize text-contrast" data-aos="fade-up" data-aos-delay="200">
            how it works
          </h2>
          <div className="py-6" data-aos="fade-right" data-aos-delay="400">
            <How />
          </div>
        </div>
      </div>

      {/* who it&apos;s for */}
      <div style={background}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-graphite/50">
          <div className="max-w-7xl mx-auto text-darkwhite dark:text-ivory">
            <h2 className="capitalize text-contrast" data-aos="fade-up">
              your goals. your tools. your way.
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              FInancial clarity designed to support your business, lifestyle and future. Tailored tools for every ambition, from daily budgets to scaling businesses.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4 place-items-center">
              <div className="flex flex-col gap-3" data-aos="fade-right" data-aos-delay="400">
                <h3 className="capitalize" data-aos="fade-up" data-aos-delay="200">
                  for your business
                </h3>
                <ul className="list-disc pl-4 space-y-2" data-aos="fade-up" data-aos-delay="400">
                  <li data-aos="fade-up">Streamline cash flow across multiple accounts</li>
                  <li data-aos="fade-up">Automate recurring expenses and payroll</li>
                  <li data-aos="fade-up">Track performance, client payments, and financial health</li>
                  <li data-aos="fade-up">Collaborate with your team securely and efficiently</li>
                  <li data-aos="fade-up">Make confident decisions backed by real-time insights</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3" data-aos="fade-left" data-aos-delay="400">
                <h3 className="capitalize" data-aos="fade-up" data-aos-delay="200">
                  for your personal life
                </h3>
                <ul className="list-disc pl-4 space-y-2" data-aos="fade-up" data-aos-delay="400">
                  <li data-aos="fade-up">Plan smarter budgets that flex with your lifestyle</li>
                  <li data-aos="fade-up">Set savings goals and watch them grow automatically</li>
                  <li data-aos="fade-up">Keep tabs on spending across cards and wallets</li>
                  <li data-aos="fade-up">Share financial progress with your partner or family</li>
                  <li data-aos="fade-up">Build financial clarity with zero spreadsheets</li>
                </ul>
              </div>
            </div>
            <p data-aos="fade-up">Everything in one system. Effortless to switch between your personal and professional universe.</p>
            <div className="text-left mt-2 lg:ml-8" data-aos="fade-up">
              <Link href="#playstore">
                <AnimatedBtn>Visit App</AnimatedBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* what you get */}
      <div className="bg-dim text-ivory">
        <div className="py-20 px-4 sm:px-6 lg:px-8" style={grey}>
          <div className="max-w-7xl mx-auto">
            <h2 className="uppercase text-lightblue">what you get</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* text section */}
              <div className="flex flex-col gap-2 items-center lg:items-left" data-aos="fade-right">
                <p data-aos="fade-up">Everything you need to take control, without drowning in complexity</p>
                <div className="space-y-2 mt-4">
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="200">
                    <FaCheck />
                    unified financial dashboard
                  </div>
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="300">
                    <FaCheck />
                    seamless account syncing
                  </div>
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="400">
                    <FaCheck />
                    smart automation rules
                  </div>
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="500">
                    <FaCheck />
                    real-time reports and insights
                  </div>
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="600">
                    <FaCheck />
                    privacy by design
                  </div>
                  <div className="flex gap-4 capitalize" data-aos="fade-up" data-aos-delay="700">
                    <FaCheck />
                    multi-view modes
                  </div>
                  <Link href="/features">
                    <AnimatedBtn>View Features</AnimatedBtn>
                  </Link>
                </div>
              </div>
              {/* image section */}
              <div className="mx-auto lg:mx-0">
                <Image src="/home2.webp" alt="phone showing interface" width={500} height={280} className="rounded-2xl" data-aos="zoom-in-left"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get the app */}
      <div id="playstore" className="py-20 px-4 sm:px-6 lg:px-8 bg-darkwhite text-graphite dark:bg-graphite dark:text-ivory">
        <div className="max-w-7xl mx-auto" data-aos="zoom-in">
          <h2 data-aos="fade-up" data-aos-delay="200">
            Get the App. Get in Control
          </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            Your finances anytime, anywhere. Access everything in one place. Smarter decisions start with a smarter app.
          </p>
          <div className="flex gap-4 items-center pt-4">
            <span data-aos="fade-up" data-aos-delay="200">
              Get it on google playstore:
            </span>
            <div className="py-2 px-8 bg-graphite dark:bg-dim rounded-2xl w-fit" data-aos="fade-left" data-aos-delay="400">
              <IoLogoGooglePlaystore className="text-5xl font-semibold text-lightblue dark:text-darkwhite" />
            </div>
          </div>
          <AnimatedBtn>Get the app</AnimatedBtn>
        </div>
      </div>
    </div>
  );
};

export default Home;
