import React from "react";

const Template = () => {
  return (
    <div
      className="p-0 bg-gray-100 text-gray-900 font-sans w-[210mm] h-[297mm] m-0"
      id="cv-template"
      style={{ fontSize: "12px", lineHeight: "1.5" }}
    >
      <div className="bg-white rounded-none p-8 w-full h-full">
        <h1 className="text-xl font-bold mb-2">Filip Bumbu</h1>
        <p className="text-gray-700">bumbufilip22@gmail.com | 0984650851</p>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Core Skills</h2>
          <ul className="list-disc list-inside">
            <li>
              Proficient in Full Stack Development using React, Java, and Python
            </li>
            <li>
              Strong understanding of AI technologies including LLM, NLP, and
              machine learning
            </li>
            <li>
              Experience with microservices, Docker, Kubernetes, and REST API
              development
            </li>
            <li>
              Skilled in CI/CD tools and methodologies for automated deployment
            </li>
            <li>
              Proficient in ES6/7, WebSockets, HTML5, modular CSS, and JSON
            </li>
            <li>
              Experience with end-to-end testing using Selenium and other
              frameworks
            </li>
            <li>
              Familiarity with Agile practices, Test Driven Development, and
              Git-based workflows
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
          <div className="mb-4">
            <h3 className="font-bold">Druid Software LTD</h3>
            <p className="text-sm italic">
              Software Engineer (Mar 2024 - Sept 2024)
            </p>
            <ul className="list-disc list-inside">
              <li>
                Developed and maintained full stack applications using React,
                Java, and Python
              </li>
              <li>
                Designed and implemented REST APIs for seamless client-server
                communication
              </li>
              <li>
                Utilized Docker and Kubernetes for deploying microservices in
                cloud environments
              </li>
              <li>
                Collaborated with cross-functional teams to deliver scalable and
                robust solutions
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Tributum</h3>
            <p className="text-sm italic">
              Software Engineer (Mar 2023 - Sept 2023)
            </p>
            <ul className="list-disc list-inside">
              <li>
                Built dynamic web interfaces using React and optimized backend
                processes in Python
              </li>
              <li>
                Integrated AI-driven features to enhance data processing and
                analytics
              </li>
              <li>
                Conducted automated and manual testing to ensure application
                reliability
              </li>
              <li>
                Implemented CI/CD pipelines to streamline deployment workflows
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Selected Projects</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Amberscan:</strong> Developed an AI-powered document
              scanning tool leveraging Python and React.
            </li>
            <li>
              <strong>Cloud Service:</strong> Built a secure cloud platform with
              dynamic APIs for file storage and retrieval.
            </li>
            <li>
              <strong>WebRTC Application:</strong> Designed real-time
              communication features with React and WebSockets.
            </li>
            <li>
              <strong>ETL Pipelines:</strong> Implemented robust data
              transformation workflows using Python.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <p className="font-bold">Dublin City University</p>
          <p className="text-sm italic">
            Bachelor’s Degree in Computer Science + Software Engineering
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Advanced ReactJS - Udemy</li>
            <li>Machine Learning with Python - Coursera</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template;
