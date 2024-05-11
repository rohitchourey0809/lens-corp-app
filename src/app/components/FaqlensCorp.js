"use client";
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
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 4,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    {
      id: 5,
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 6,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    // Add more question-answer pairs here
  ];
  const questionsAndAnswers2 = [
    {
      id: 7,
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 8,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    {
      id: 9,
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 10,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    {
      id: 11,
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      id: 12,
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    // Add more question-answer pairs here
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
      <div className="inner-container ml-auto mr-auto mt-2">
        {/* Question and Answer section */}
        <div className="flex flex-col md:flex-row justify-around">
          {/* Questions */}
          <div className="w-full md:w-1/7 lg:w-1/3 ">
            {questionsAndAnswers.map(({ id, question, answer }) => (
              <div key={id} className="flex flex-col  w-auto   mb-2">
                <div className="border-2 rounded-lg flex justify-between">
                  <button
                    className="question-btn"
                    onClick={() => toggleAnswer(id)}
                  >
                    <span className="">{question}</span>
                    <span className="ml-8">
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
                <div className="border-2 rounded-lg flex justify-between">
                  <button
                    className="question-btn"
                    onClick={() => toggleAnswer(id)}
                  >
                    <span className="">{question}</span>
                    <span className="ml-8">
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
