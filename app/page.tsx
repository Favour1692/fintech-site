import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { landing, overlay, features } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import How from "@/components/How";

const Home = () => {
  return (
    <div className="bg-dim">
      {/* hero section */}
      <div className="w-full h-screen" style={landing}>
        <div className="w-full h-full py-12 bg-black/80">
          <div className="w-[90%] lg:w-[80%] h-full flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-col gap-2 text-ivory text-center">
              <small className="uppercase">trusted by over a million people</small>
              <h1 className="text-4xl md:text-5xl xl:text-6xl capitalize">smart tools for smart financial decisions all in one platform</h1>
              <p className="text-lg mt-4">Manage all your finances in one smart seamless platform. Suitable for both businesses and individual finances</p>
              <div className="flex gap-4 mt-4 mx-auto">
                <Button variant="outline" className="font-semibold bg-lightblue hover:bg-linen py-5">
                  Start free
                </Button>
                <Button variant="outline" className="flex gap-2 font-semibold bg-transparent border-2 border-ivory text-ivory hover:bg-linen py-5">
                  <span>View features</span>
                  <FaArrowRightLong className="text-ivory font-semibold" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text */}
            <div className="flex flex-col gap-4">
              <h2>the best solution for your business</h2>
              <p>Say goodbye to outdated systems, spreadsheets and financial fog. Here's a smarter way to gain control, with the right tools, all in one platform, no complexity!</p>
              <div className="text-left">
                <Button variant="outline" className="font-semibold bg-lightblue hover:bg-linen">
                  Learn more
                </Button>
              </div>
            </div>
            {/* image */}
            <div className=""></div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <h2 className="capitalize">best solution for your business</h2>
          <p>our platform provides you with the right tools to streamline your business and personal finances</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4">
            {features.map((data) => (
              <Card key={data.id} className="h-auto md:h-[150px] hover:bg-lightblue shadow-2xl shadow-black hover:text-ivory border-1-dim flex flex-col justify-center items-center">
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
      <div className="py-8 px-4">
        <div className="w-[80%] mx-auto text-ivory">
          <h2 className="uppercase">how it works</h2>
          <div className="py-6">
            <How />
          </div>
        </div>
      </div>

      {/* who it's for */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[80%] mx-auto">
          <h2 className="uppercase">your goals. your tools. your way.</h2>
          <p>FInancial clarity designed to support your business, lifestyle and future. Tailored tools for every ambition, from daily budgets to scaling businesses.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4 place-items-center">
            <div className="flex flex-col gap-3">
              <h3 className="capitalize">for your business</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Streamline cash flow across multiple accounts</li>
                <li>Automate recurring expenses and payroll</li>
                <li>Track performance, client payments, and financial health</li>
                <li>Collaborate with your team securely and efficiently</li>
                <li>Make confident decisions backed by real-time insights</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="capitalize">for your personal life</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Plan smarter budgets that flex with your lifestyle</li>
                <li>Set savings goals and watch them grow automatically</li>
                <li>Keep tabs on spending across cards and wallets</li>
                <li>Share financial progress with your partner or family</li>
                <li>Build financial clarity with zero spreadsheets</li>
              </ul>
            </div>
          </div>
          <p>Everything in one system. Effortless to switch between your personal and professional universe.</p>
          <div className="text-center">
            <Button variant="outline" className="font-semibold bg-lightblue hover:bg-linen border-lightblue">
              See Plans
            </Button>
          </div>
        </div>
      </div>

      {/* what you get */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[80%] mx-auto">
          <h2 className="uppercase">what you get</h2>
          <p>Everything you need to take control, without drowning in complexity</p>
          <div className="space-y-2 mt-4">
            <div className="flex gap-4 capitalize">
              <FaCheck />
              unified financial dashboard
            </div>
            <div className="flex gap-4 capitalize">
              <FaCheck />
              seamless account syncing
            </div>
            <div className="flex gap-4 capitalize">
              <FaCheck />
              smart automation rules
            </div>
            <div className="flex gap-4 capitalize">
              <FaCheck />
              real-time reports and insights
            </div>
            <div className="flex gap-4 capitalize">
              <FaCheck />
              privacy by design
            </div>
            <div className="flex gap-4 capitalize">
              <FaCheck />
              multi-view modes
            </div>
          </div>
        </div>
      </div>

      {/* get the app */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[80%] mx-auto">
          <h2>Get the App. Get in Control</h2>
          <p>Your finances anytime, anywhere. Access everything in one place. Smarter decisions start with a smarter app.</p>
          <div>
            Get it on google playstore <IoLogoGooglePlaystore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
