"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-2">
        <div>
          <CountUp end={2000} duration={10} enableScrollSpy={true} scrollSpyDelay={500} />+
        </div>{" "}
        <span className="capitalize">active users</span>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <CountUp end={98} duration={5} enableScrollSpy={true} scrollSpyDelay={500} />%
        </div>{" "}
        <span className="capitalize">success rate</span>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <CountUp end={2.4} duration={2} enableScrollSpy={true} scrollSpyDelay={500} />
          seconds
        </div>{" "}
        <span className="capitalize">transaction time</span>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <CountUp end={50} duration={5} enableScrollSpy={true} scrollSpyDelay={500} />+
        </div>{" "}
        <span className="capitalize">countries</span>
      </div>
    </div>
  );
};

export default Stats;
