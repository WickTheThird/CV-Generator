import React, { useState } from "react";
import { jsPDF } from "jspdf";
import pdfToText from "react-pdftotext"; // Import react-pdftotext for text extraction

const Generate = () => {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [cv, setCV] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [status, setStatus] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Extract text from PDF
  const extractTextFromPDF = async (file) => {
    try {
      const text = await pdfToText(file); // Extract text using react-pdftotext
      return text;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      throw new Error("Failed to extract text from the PDF.");
    }
  };

  // Generate CV or Cover Letter using extracted text
  const generateDocument = async (textContent, prompt, type) => {
    const content =
      type === "cv"
        ? `
          You are a professional CV creator.
          Use only the content extracted from the provided file to generate a new CV.
          The CV must be tailored to the role described in the user prompt and formatted in clean HTML.
          Do not use any information other than what is explicitly provided in the file.
        `
        : `
          You are a professional Cover Letter creator.
          Use only the content extracted from the provided file to generate a tailored cover letter.
          The cover letter must be engaging, professional, and specific to the role described in the user prompt.
          Do not use any information other than what is explicitly provided in the file.
          Output only the cover letter in clean HTML format.
        `;

    setStatus(`Generating ${type === "cv" ? "CV" : "Cover Letter"}...`);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "chatgpt-4o-latest",
            messages: [
              { role: "system", content },
              {
                role: "user",
                content: `Role Prompt: ${prompt}\nExtracted Text:\n${textContent}`,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error generating document.");
      }

      const data = await response.json();
      if (type === "cv") {
        setCV(data.choices[0].message.content);
      } else {
        setCoverLetter(data.choices[0].message.content);
      }
    } catch (error) {
      console.error("Error generating document:", error);
      setStatus(`Error generating document: ${error.message}`);
    }
  };

  const handleSend = async () => {
    if (!file || !prompt) {
      alert("Please upload a file and provide a prompt.");
      return;
    }

    setStatus("Processing file...");
    try {
      const extractedText = await extractTextFromPDF(file); // Extract text from PDF
      console.log("Extracted Text:", extractedText);

      await generateDocument(extractedText, prompt, "cv");
      await generateDocument(extractedText, prompt, "coverLetter");
      setStatus("Documents generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process file or generate documents.");
      setStatus("");
    }
  };

  const downloadPDF = (content, fileName) => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    doc.html(content, {
      callback: (doc) => doc.save(fileName),
      x: 20,
      y: 20,
      width: 555.28,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Generate CV and Cover Letter
      </h2>

      {/* Prompt Input */}
      <textarea
        placeholder="Enter prompt for the role..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-28 p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* File Upload */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="block w-full mb-4 text-sm text-gray-500 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      {/* Generate Button */}
      <button
        onClick={handleSend}
        className="w-full mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Generate Documents
      </button>

      {status && <p className="mb-6 text-center text-gray-600">{status}</p>}

      {cv && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Generated CV</h3>
          <div
            className="border border-gray-300 p-4 bg-gray-50 rounded-lg overflow-auto"
            dangerouslySetInnerHTML={{ __html: cv }}
          />
          <button
            onClick={() => downloadPDF(cv, "CV.pdf")}
            className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Download CV as PDF
          </button>
        </div>
      )}

      {coverLetter && (
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Generated Cover Letter
          </h3>
          <div
            className="border border-gray-300 p-4 bg-gray-50 rounded-lg overflow-auto"
            dangerouslySetInnerHTML={{ __html: coverLetter }}
          />
          <button
            onClick={() => downloadPDF(coverLetter, "Cover_Letter.pdf")}
            className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Download Cover Letter as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Generate;
