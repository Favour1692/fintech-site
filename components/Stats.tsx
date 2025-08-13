"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="pl-4 lg:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:place-items-center gap-4 text-graphite dark:text-darkwhite">
      <div className="flex flex-col gap-2 text-lg">
        <div>
          <CountUp end={2000} duration={10} enableScrollSpy={true} scrollSpyDelay={500} className="text-4xl md:text-5xl text-crimson font-semibold" />+
        </div>{" "}
        <span className="capitalize" data-aos="fade-up">
          active users
        </span>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <div>
          <CountUp end={98} duration={5} enableScrollSpy={true} scrollSpyDelay={500} className="text-4xl md:text-5xl text-crimson font-semibold" />%
        </div>{" "}
        <span className="capitalize" data-aos="fade-up">
          success rate
        </span>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <div>
          <CountUp end={2.4} duration={2} enableScrollSpy={true} scrollSpyDelay={500} className="text-4xl md:text-5xl text-crimson font-semibold" />
          seconds
        </div>{" "}
        <span className="capitalize" data-aos="fade-up">
          transaction time
        </span>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <div>
          <CountUp end={50} duration={5} enableScrollSpy={true} scrollSpyDelay={500} className="text-4xl md:text-5xl text-crimson font-semibold" />+
        </div>{" "}
        <span className="capitalize" data-aos="fade-up">
          countries
        </span>
      </div>
    </div>
  );
};

export default Stats;
