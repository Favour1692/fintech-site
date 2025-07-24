import React from "react";

const About = () => {
  return (
    <div className="pt-20">
      {/* who we are */}
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <h2 className="uppercase">who we are</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* text section */}
          <p>
            We're the team behind cashivo; a bold, user-first fintech platform built for everyday people who deserve smarter and safer financial tools. Born from a belief that financial access should be universal, our mission is to simplify money
            management and empower users to take control of their future. From saving or investing to sending money across borders, we're here to make every transaction effortless and secure.
          </p>

          {/* image section */}
          <div></div>
        </div>
      </div>

      {/* what we do */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h2 className="uppercase">what we do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* text section */}
            <p>
              We build financial tools that work for real life. Our app makes saving smarter, payments faster and cross-border transfers seamless. No jargon or hidden fees, just intuitive tech that gives you control, clarity and confidence whether
              you're planning for today or investing in tomorrow.
            </p>

            {/* image section */}
            <div></div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div className="py-8 px-4">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* text section */}
            <p>We believe finance should feel fair, fealess and human. Our values aren't just words, they're the code we live by.</p>
            <dl>
              <dt>Transparency</dt>
              <dd>No fine print, no surprises. We keep it clear and honest.</dd>
            </dl>
            <dl>
              <dt>Security First</dt>
              <dd>Your trust is everything. We protect what matters.</dd>
            </dl>
            <dl>
              <dt>Empowerment</dt>
              <dd>We build tools that put you in control because knowledge is financial power.</dd>
            </dl>
            <dl>
              <dt>Innovation with Purpose</dt>
              <dd>We don't follow trends, we solve real problems with real tech.</dd>
            </dl>

            {/* image section */}
            <div></div>
          </div>
        </div>
      </div>

      {/* stats */}

      {/* lookin ahead */}
      <div className="py-8 px-4 bg-ivory">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* text section */}
            <p>
              We're not done. In fact, we're just beginning. Our roadmap is shaped by one question: what do people really need from their money? From expanding our reach across Africa to launching new tools for investing, budgeting, and borderless
              payments, we're laying the groundwork for financial systems that are more open, more inclusive, and more personal. Your journey inspires ours. Watch this space—we've got big things coming.
            </p>

            {/* image section */}
          </div>
          <p>Subscribe to our newsletter for more updates and features</p>
        </div>
      </div>
    </div>
  );
};

export default About;
