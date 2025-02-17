"use client";
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);
  const faqs = [
    {
      question: "How long has your company been established?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta at necessitatibus nisi quod tenetur vel quam deleniti dolor ipsum.",
    },
    {
      question: "What types of fuel and gas do you transport?",
      answer:
        "We transport a variety of fuels, including diesel, gasoline, aviation fuel, and liquefied petroleum gas (LPG).",
    },
    {
      question: "How do you ensure the safe transportation of fuel and gas?",
      answer:
        "We adhere to strict safety protocols, including real-time GPS tracking, trained drivers, and compliance with international hazardous material transportation standards.",
    },
    {
      question: "How do you prevent fuel contamination during transportation?",
      answer:
        "Our tankers are cleaned and maintained according to industry standards, and we implement strict loading and unloading procedures to prevent contamination.",
    },
    {
      question: "How do you determine fuel transportation costs?",
      answer:
        "Pricing depends on factors such as fuel type, distance, quantity, and market conditions. Contact us for a customized quote.",
    },
  ];
  return (
    <section id="FAQs" className="scroll-mt-20">
      <h2 className="text-center text-primary">FAQS</h2>
      <p className="mt-5 text-center text-4xl font-bold">
        Frequently asked questions
      </p>
      <div className="mx-auto mt-10 flex max-w-[640px] flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            onClick={
              openedQuestionIndex !== index
                ? () => setOpenedQuestionIndex(index)
                : () => setOpenedQuestionIndex(null)
            }
            key={index}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between gap-5">
              <p>{faq.question}</p>
              <button className="group rounded-md p-1 transition-all hover:bg-gray-100 active:bg-gray-100">
                <Plus
                  className={`${openedQuestionIndex === index && "rotate-45"} stroke-1 transition-all group-active:scale-90`}
                />
              </button>
            </div>
            <div
              className={`${openedQuestionIndex !== index ? "h-0 pt-0" : "pt-3"} overflow-hidden transition-all`}
            >
              <p className="px-3 text-sm text-gray-600">{faq.answer}</p>
            </div>
            <hr className="mt-5" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQs;
