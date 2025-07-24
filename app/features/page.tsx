import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/constants";

const Features = () => {
  return (
    <div className="pt-20">
      {/* features */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h2 className="capitalize">core features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* text */}
            <p>
              Finance made frictionless. At cashivo, we blend simplicity, speed, and smart design to give users financial tools that feel intuitive, empowering, and built for everyday life. Whether you're sending money across borders, building
              savings on autopilot, or tracking expenses in real time, our features do the work, so you don't have to. Explore how our app turns complex finance into seamless experiences.
            </p>
            {/* image */}
            <div></div>
          </div>
        </div>
        <div>
          <Button>Download the app</Button>
        </div>
      </div>

      {/* feature cards */}
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
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-lightblue text-ivory">
            <div className="flex flex-col gap-2 items-center bg-ivory text-dim">
              <span>1</span>Download & Sign Up
            </div>
            <div className="flex flex-col gap-2 items-center bg-ivory text-dim">
              <span>2</span>Link Your Wallet
            </div>
            <div className="flex flex-col gap-2 items-center bg-ivory text-dim">
              <span>3</span>Set Your Goals
            </div>
            <div className="flex flex-col gap-2 items-center bg-ivory text-dim">
              <span>4</span>Start Saving, Sending, or Investing
            </div>
          </div>
        </div>
      </div>

      {/* what's next? */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h2 className="uppercase">What's next?</h2>
          <p>
            The future of finance is being built—right here. We're working on new tools to make money even simpler, smarter, and more connected. Whether it's tailored investment plans or multi-wallet support, we're designing features with your goals
            in mind.
          </p>
          <p className="mt-4">Here's a peak at what's brewing in our labs:</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
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
      </div>

      {/* FAQ */}
    </div>
  );
};

export default Features;
