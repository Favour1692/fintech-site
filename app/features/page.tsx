import { Card, CardContent } from "@/components/ui/card";
import { features, tile } from "@/constants";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import AnimatedBtn from "@/components/AnimatedBtn";
import Link from "next/link";

const Features = () => {
  return (
    <div className="pt-[6%] bg-darkwhite dark:bg-graphite overflow-x-hidden">
      {/* features */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="capitalize" data-aos="fade-up">
            core features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div className="" data-aos="fade-right" data-aos-delay="100">
              <p className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                Finance made frictionless. At cashivo, we blend simplicity, speed, and smart design to give users financial tools that feel intuitive, empowering, and built for everyday life. Whether you're sending money across borders, building
                savings on autopilot, or tracking expenses in real time, our features do the work, so you don't have to. Explore how our app turns complex finance into seamless experiences.
              </p>
              <div className="pt-4 flex flex-col items-center lg:items-start">
                <Link href="/#playstore">
                  <AnimatedBtn data-aos="fade-right" data-aos-delay="300">
                    Download the app
                  </AnimatedBtn>
                </Link>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto">
              <Image src="/feature1.webp" alt="phone displaying account balance" width={400} height={267} className="rounded-2xl" data-aos="zoom-in-left" data-aos-delay="100"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* feature cards */}
      <div className="pt-10 pb-16 lg:y-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="capitalize py-2" data-aos="fade-up">
            best solution for your business
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            our platform provides you with the right tools to streamline your business and personal finances
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4" data-aos="fade-up" data-aos-delay="200">
            {features.map((data) => (
              <Card key={data.id} className="h-auto md:h-[150px] hover:bg-lightblue dark:hover:bg-darkblue shadow-2xl shadow-black hover:text-ivory border-1-dim flex flex-col justify-center items-center">
                <CardContent className="flex flex-col gap-2 items-center" data-aos="fade-left" data-aos-delay="300">
                  <div className="text-2xl font-semibold">{data.icon}</div>
                  <p>{data.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase mb-4" data-aos="fade-up">
            how it works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <ul className="list-outside list-decimal space-y-3 flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <li data-aos="fade-right" data-aos-delay="100">
                Download & Sign Up
              </li>
              <li data-aos="fade-right" data-aos-delay="200">
                Link Your Wallet
              </li>
              <li data-aos="fade-right" data-aos-delay="300">
                Set Your Goals
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                Start Saving, Sending, or Investing
              </li>
            </ul>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image src="/feature2.webp" alt="financial dashboard" width={400} height={267} className="rounded-2xl" data-aos="zoom-in-left"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* what's next? */}
      <div className="bg-dim text-darkwhite">
        <div className="py-20 px-4 sm:px-6 lg:px-8" style={tile}>
          <div className="max-w-7xl mx-auto">
            <h2 className="uppercase text-contrast" data-aos="fade-up">
              What's next?
            </h2>
            <p className="py-4" data-aos="fade-up" data-aos-delay="100">
              The future of finance is being built—right here. We're working on new tools to make money even simpler, smarter, and more connected. Whether it's tailored investment plans or multi-wallet support, we're designing features with your
              goals in mind.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" data-aos="fade-right" data-aos-delay="100">
              {/* text section */}
              <div className="mt-4 flex flex-col gap-2">
                <p className="">Here's a peak at what's brewing in our labs:</p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <h3 className="text-lightblue" data-aos="fade-up" data-aos-delay="100">
                      Smart Budgeting AI
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="150">
                      Personalized spending insights that adapt to your lifestyle
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lightblue" data-aos="fade-up" data-aos-delay="200">
                      Group Goals
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="150">
                      Save with friends, family, or teams toward shared dreams
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lightblue" data-aos="fade-up" data-aos-delay="300">
                      Local and Global Wallets
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="350">
                      One place to hold and spend across currencies
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lightblue" data-aos="fade-up" data-aos-delay="400">
                      Merchant Dashboards
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="450">
                      Easy finance tracking for growing businesses
                    </p>
                  </div>
                </div>
                <p data-aos="fade-up" data-aos-delay="500">
                  Want early access? Join our beta list and help shape the next wave
                </p>
              </div>
              {/* image section */}
              <div className="mx-auto lg:mx-0">
                <Image src="/feature3.webp" alt="people working in office" width={500} height={333} className="rounded-2xl" data-aos="zoom-in-left" data-aos-delay="100"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase" data-aos="fade-up">
            frequently asked questions
          </h2>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Features;
