import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features, tile } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="pt-[6%] bg-darkwhite dark:bg-graphite">
      {/* features */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="capitalize">core features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div className="">
              <p className="flex flex-col items-center">
                Finance made frictionless. At cashivo, we blend simplicity, speed, and smart design to give users financial tools that feel intuitive, empowering, and built for everyday life. Whether you're sending money across borders, building
                savings on autopilot, or tracking expenses in real time, our features do the work, so you don't have to. Explore how our app turns complex finance into seamless experiences.
              </p>
              <div className="pt-4 flex flex-col items-center lg:items-start">
                <Button variant="outline" className="font-semibold bg-lightblue hover:bg-ivory dark:bg-darkblue dark:hover:bg-darkwhite dark:hover:text-graphite">
                  Download the app
                </Button>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto">
              <Image src="/feature1.webp" alt="phone displaying account balance" width={400} height={267} className="rounded-2xl"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* feature cards */}
      <div className="py-8 px-4">
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
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase mb-4">how it works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <ul className="list-outside list-decimal space-y-3 flex flex-col items-center">
              <li>Download & Sign Up</li>
              <li>Link Your Wallet</li>
              <li>Set Your Goals</li>
              <li>Start Saving, Sending, or Investing</li>
            </ul>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image src="/feature2.webp" alt="financial dashboard" width={400} height={267} className="rounded-2xl"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* what's next? */}
      <div className="bg-dim text-darkwhite">
        <div className="py-8 px-4" style={tile}>
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <h2 className="uppercase">What's next?</h2>
            <p>
              The future of finance is being built—right here. We're working on new tools to make money even simpler, smarter, and more connected. Whether it's tailored investment plans or multi-wallet support, we're designing features with your
              goals in mind.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* text section */}
              <div className="mt-4 flex flex-col gap-2">
                <p className="">Here's a peak at what's brewing in our labs:</p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <h3>Smart Budgeting AI</h3>
                    <p>Personalized spending insights that adapt to your lifestyle</p>
                  </div>
                  <div>
                    <h3>Group Goals</h3>
                    <p>Save with friends, family, or teams toward shared dreams</p>
                  </div>
                  <div>
                    <h3>Local and Global Wallets</h3>
                    <p>One place to hold and spend across currencies</p>
                  </div>
                  <div>
                    <h3>Merchant Dashboards</h3>
                    <p>Easy finance tracking for growing businesses</p>
                  </div>
                </div>
                <p>Want early access? Join our beta list and help shape the next wave</p>
              </div>
              {/* image section */}
              <div className="mx-auto lg:mx-0">
                <Image src="/feature3.webp" alt="people working in office" width={500} height={333} className="rounded-2xl"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
    </div>
  );
};

export default Features;
