import React from "react";

const CoverLetter = () => {
  return (
    <div
      className="p-0 bg-gray-100 text-gray-900 font-sans w-[210mm] h-[297mm] m-0"
      id="cover-letter-template"
      style={{ fontSize: "12px", lineHeight: "1.5" }}
    >
      <div className="bg-white rounded-none p-8 w-full h-full">
        <h1 className="text-xl font-bold mb-4">Filip Bumbu</h1>
        <p className="text-gray-700 mb-4">
          bumbufilip22@gmail.com | 0984650851
        </p>

        <section>
          <p className="mb-4">Dear Hiring Team at Revolut,</p>
          <p className="mb-4">
            I am excited to apply for the Software Engineer (Frontend) position
            at Revolut. With hands-on experience in ReactJS, TypeScript, and
            building responsive, user-centric web applications, I am eager to
            contribute to your mission of delivering world-class financial
            products that simplify and enhance user experiences.
          </p>
          <p className="mb-4">
            During my tenure at Druid Software, I developed responsive
            interfaces using ReactJS and collaborated closely with designers to
            bring mockups to life. My role involved optimizing front-end
            performance and ensuring seamless integration with backend systems.
            At Tributum, I further honed my skills by creating scalable
            front-end solutions and implementing consistent design guidelines to
            enhance user engagement.
          </p>
          <p className="mb-4">
            I have a deep understanding of modern JavaScript (ESNext), browser
            APIs, and testing techniques. My ability to work collaboratively
            across multidisciplinary teams and deliver high-quality,
            maintainable code aligns with Revolut’s commitment to innovation and
            excellence.
          </p>
          <p className="mb-4">
            Revolut’s focus on redefining the financial landscape through
            cutting-edge technology resonates deeply with me. I am particularly
            inspired by the opportunity to contribute to your global financial
            super app and help create intuitive, impactful user experiences for
            millions of customers worldwide.
          </p>
          <p className="mb-4">
            Thank you for considering my application. I look forward to the
            opportunity to discuss how my skills and experience align with
            Revolut’s vision and goals.
          </p>
          <p className="mb-4">Best regards,</p>
          <p>
            Filip Bumbu
            <br />
            bumbufilip22@gmail.com
            <br />
            0984650851
          </p>
        </section>
      </div>
    </div>
  );
};

export default CoverLetter;
