import Image from "next/image";
import { tile } from "@/constants";
import Stats from "@/components/stats";

const About = () => {
  return (
    <div className="pt-[6%] bg-darkwhite dark:bg-graphite">
      {/* who we are */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase mb-4">who we are</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text section */}
            <p className="flex flex-col items-center lg:items-left">
              We're the team behind cashivo; a bold, user-first fintech platform built for everyday people who deserve smarter and safer financial tools. Born from a belief that financial access should be universal, our mission is to simplify money
              management and empower users to take control of their future. From saving or investing to sending money across borders, we're here to make every transaction effortless and secure.
            </p>

            {/* image section */}
            <div className="mx-auto lg:mx-0">
              <Image src="/about1.webp" alt="people in an office" width={400} height={300} className="rounded-2xl"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* what we do */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase mb-4">what we do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* image section */}
            <div className="order-2 lg:order-1 mx-auto">
              <Image src="/about2.webp" alt="people during an office meeting" width={400} height={265} className="rounded-2xl"></Image>
            </div>
            {/* text section */}
            <p className="flex flex-col items-center lg:items-left order-1 lg:order-2">
              We build financial tools that work for real life. Our app makes saving smarter, payments faster and cross-border transfers seamless. No jargon or hidden fees, just intuitive tech that gives you control, clarity and confidence whether
              you're planning for today or investing in tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* our values */}
      <div className="bg-dim text-darkwhite">
        <div className="py-8 px-4" style={tile}>
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <h2 className="uppercase mb-4">our values</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* text section */}
              <div className="flex flex-col gap-2 items-center lg:items-left">
                <p>We believe finance should feel fair, fealess and human. Our values aren't just words, they're the code we live by.</p>
                <dl className="">
                  <dt>Transparency</dt>
                  <dd>No fine print, no surprises. We keep it clear and honest.</dd>
                  <dt className="mt-2">Security First</dt>
                  <dd>Your trust is everything. We protect what matters.</dd>
                  <dt className="mt-2">Empowerment</dt>
                  <dd>We build tools that put you in control because knowledge is financial power.</dd>
                  <dt className="mt-2">Innovation with Purpose</dt>
                  <dd>We don't follow trends, we solve real problems with real tech.</dd>
                </dl>
              </div>

              {/* image section */}
              <div className="mx-auto lg:mx-0">
                <Image src="/about3.webp" alt="3 men with their phones" width={500} height={263} className="rounded-2xl"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="uppercase">our stats</h2>
          <Stats />
        </div>
      </div>

      {/* lookin ahead */}
      <div className="py-8 px-4">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text section */}
            <p className="flex flex-col items-center lg:items-left">
              We're not done. In fact, we're just beginning. Our roadmap is shaped by one question: what do people really need from their money? From expanding our reach across Africa to launching new tools for investing, budgeting, and borderless
              payments, we're laying the groundwork for financial systems that are more open, more inclusive, and more personal. Your journey inspires ours. Watch this space—we've got big things coming.
            </p>

            {/* image section */}
            <div className="mx-auto">
              <Image src="/about4.webp" alt="mobile fintech illustration" width={400} height={333} className="rounded-2xl"></Image>
            </div>
          </div>
          <p>Subscribe to our newsletter for more updates</p>
        </div>
      </div>
    </div>
  );
};

export default About;
