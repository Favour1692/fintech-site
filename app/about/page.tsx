import Image from "next/image";
import { tile } from "@/constants";
import Stats from "@/components/stats";
import { Input } from "@/components/ui/input";
import AnimatedBtn from "@/components/AnimatedBtn";

const About = () => {
  return (
    <div className="pt-[6%] bg-darkwhite dark:bg-graphite">
      {/* who we are */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase mb-4">who we are</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text section */}
            <p className="flex flex-col items-center lg:items-left" data-aos="fade-up">
              We&apos;re the team behind cashivo; a bold, user-first fintech platform built for everyday people who deserve smarter and safer financial tools. Born from a belief that financial access should be universal, our mission is to simplify
              money management and empower users to take control of their future. From saving or investing to sending money across borders, we&apos;re here to make every transaction effortless and secure.
            </p>

            {/* image section */}
            <div className="mx-auto">
              <Image src="/about1.webp" alt="people in an office" width={400} height={300} className="rounded-2xl" data-aos="zoom-in-left"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* what we do */}
      <div className="pt-8 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase mb-4" data-aos="fade-up">
            what we do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* image section */}
            <div className="order-2 lg:order-1 mx-auto">
              <Image src="/about2.webp" alt="people during an office meeting" width={400} height={265} className="rounded-2xl" data-aos="zoom-in-right" data-aos-delay="200"></Image>
            </div>
            {/* text section */}
            <p className="flex flex-col items-center lg:items-left order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
              We build financial tools that work for real life. Our app makes saving smarter, payments faster and cross-border transfers seamless. No jargon or hidden fees, just intuitive tech that gives you control, clarity and confidence whether
              you&apos;re planning for today or investing in tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* our values */}
      <div className="bg-dim text-darkwhite">
        <div className="py-20 px-4 sm:px-6 lg:px-8" style={tile}>
          <div className="max-w-7xl mx-auto">
            <h2 className="uppercase mb-4 text-contrast" data-aos="fade-up">
              our values
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-4">
              {/* text section */}
              <div className="flex flex-col gap-2 items-center lg:items-left" data-aos="fade-right">
                <p data-aos="fade-up" data-aos-delay="100">
                  We believe finance should feel fair, fealess and human. Our values aren&apos;t just words, they&apos;re the code we live by.
                </p>
                <dl className="">
                  <dt data-aos="fade-up" data-aos-delay="200">
                    Transparency
                  </dt>
                  <dd data-aos="fade-up" data-aos-delay="300">
                    No fine print, no surprises. We keep it clear and honest.
                  </dd>
                  <dt className="mt-2" data-aos="fade-up" data-aos-delay="400">
                    Security First
                  </dt>
                  <dd data-aos="fade-up" data-aos-delay="500">
                    Your trust is everything. We protect what matters.
                  </dd>
                  <dt className="mt-2" data-aos="fade-up" data-aos-delay="500">
                    Empowerment
                  </dt>
                  <dd data-aos="fade-up" data-aos-delay="600">
                    We build tools that put you in control because knowledge is financial power.
                  </dd>
                  <dt className="mt-2" data-aos="fade-up" data-aos-delay="600">
                    Innovation with Purpose
                  </dt>
                  <dd data-aos="fade-up" data-aos-delay="700">
                    We don&apos;t follow trends, we solve real problems with real tech.
                  </dd>
                </dl>
              </div>

              {/* image section */}
              <div className="mx-auto lg:mx-0">
                <Image src="/about3.webp" alt="3 men with their phones" width={500} height={263} className="rounded-2xl" data-aos="zoom-in-left"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="pt-16 pb-10 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase mb-4" data-aos="fade-right">
            our stats
          </h2>
          <Stats />
        </div>
      </div>

      {/* lookin ahead */}
      <div className="py-10 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase py-4 text-left" data-aos="fade-right" data-aos-delay="100">
            looking ahead
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text section */}
            <div className="flex flex-col items-center lg:items-start gap-2" data-aos="fade-right">
              <p data-aos="fade-up" data-aos-delay="200">
                We&apos;re not done. In fact, we&apos;re just beginning. Our roadmap is shaped by one question: what do people really need from their money? From expanding our reach across Africa to launching new tools for investing, budgeting, and
                borderless payments, we&apos;re laying the groundwork for financial systems that are more open, more inclusive, and more personal. Your journey inspires ours. Watch this space—we&apos;ve got big things coming.
              </p>
            </div>

            {/* image section */}
            <div className="mx-auto flex justify-center items-center">
              <Image src="/about4.webp" alt="mobile fintech illustration" width={400} height={333} className="rounded-2xl" data-aos="zoom-in-left"></Image>
            </div>
          </div>
          <div>
            <p data-aos="fade-right">Subscribe to our newsletter for more updates</p>
            <div className="flex items-center gap-2 w-[90%] sm:w-[70%] lg:w-[50%]">
              <Input type="email" placeholder="Enter your email address" autoComplete="on" name="email" className="border-contrast" />
              <AnimatedBtn>Subscribe</AnimatedBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
