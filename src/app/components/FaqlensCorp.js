"use client"
import React, { useState } from "react";
import "./FaqlensCorp.css";

const FaqlensCorp = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const questionsAndAnswers = [
    {
      id: 1,
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 2,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    {
      id: 3,
      question: "How do I begin collaboration?",
      answer:
        "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs..",
    },
  ];
  const questionsAndAnswers2 = [
    {
      id: 4,
      question: "What services do we offer?",
      answer:
        "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.",
    },
    {
      id: 5,
      question: "How do we ensure user privacy?",
      answer:
        "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.",
    },
    {
      id: 6,
      question: "How can I pay for the services",
      answer:
        "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.",
    },
  ];

  const toggleAnswer = (id) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="outer-container r mt-2">
      {/* First inner div */}
      <div className="inner-container flex flex-col justify-center items-center ">
        {/* First heading */}
        <div className="heading-container">
          <h2 className="text-center font-bold p-2">GET TO KNOW US</h2>
        </div>
        {/* Second heading */}
        <div className="heading-container">
          <h2 className="text-center font-bold text-3xl p-2">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      {/* Second inner div */}
      {/* <div className="outer-container flex justify-center items-center h-screen"> */}
      {/* Inner container */}
      <div className="inner-container ml-auto mr-auto mt-2q ">
        {/* Question and Answer section */}
        <div className="flex flex-col md:flex-row justify-around">
          {/* Questions */}
          <div className="w-full md:w-1/7 lg:w-1/3 ">
            {questionsAndAnswers.map(({ id, question, answer }) => (
              <div key={id} className="flex flex-col  w-auto   mb-2">
                <div className="border-2 rounded-lg relative">
                  <button
                    className="question-btn"
                    onClick={() => toggleAnswer(id)}
                  >
                    <span className="">{question}</span>
                    <span className="absolute top-0 right-0 mr-2 mt-2">
                      <svg
                        className={`dropdown-icon ${
                          showAnswer[id] ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l-5-5h10l-5 5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={`answer ${showAnswer[id] ? "visible" : ""}`}
                  id={`answer${id}`}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
          {/* Answers */}
          <div className="w-full md:w-1/7 lg:w-1/3 ">
            {questionsAndAnswers2.map(({ id, question, answer }) => (
              <div key={id} className="flex flex-col  w-auto   mb-2">
                <div className="border-2 rounded-lg relative">
                  <button
                    className="question-btn"
                    onClick={() => toggleAnswer(id)}
                  >
                    <span className="">{question}</span>
                    <span className="absolute top-0 right-0 mr-2 mt-2">
                      <svg
                        className={`dropdown-icon ${
                          showAnswer[id] ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l-5-5h10l-5 5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={`answer ${showAnswer[id] ? "visible" : ""}`}
                  id={`answer${id}`}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default FaqlensCorp;
