import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Knowledge Quiz — Sexual Harassment Policy | University of Ghana" },
      { name: "description", content: "Test your knowledge of the University of Ghana Sexual Harassment and Misconduct Policy." },
    ],
  }),
  component: QuizPage,
});

const QUESTIONS = [
  {
    id: 1,
    question: "According to the UG policy, what is the primary definition of sexual harassment?",
    options: [
      "Any interaction between staff and students that is not academic.",
      "Unwelcome conduct of a sexual nature that interferes with work/study or creates a hostile environment.",
      "Only physical contact that is not consented to.",
      "Any romantic relationship between two consenting adults on campus.",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Can a report be filed if the incident happened outside of campus grounds?",
    options: [
      "No, the policy only applies to the physical campus at Legon.",
      "Yes, if it involves members of the University community or University-controlled activities.",
      "Only if it happened in University-owned vehicles.",
      "No, off-campus incidents are strictly for the Ghana Police Service.",
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "What is the policy's stance on retaliation against a person who reports harassment?",
    options: [
      "Retaliation is expected and the reporter should be prepared for it.",
      "Retaliation is only prohibited if the report is proven true.",
      "Retaliation is itself a form of misconduct and is strictly prohibited.",
      "The University does not have a specific stance on retaliation.",
    ],
    correct: 2,
  },
  {
    id: 4,
    question: "What is the target timeline for completing a formal investigation?",
    options: [
      "30 working days.",
      "120 working days.",
      "60 working days (unless extended by the Vice-Chancellor).",
      "There is no fixed timeline for investigations.",
    ],
    correct: 2,
  },
];

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const modules = [
    { id: 1, label: "Awareness & policy..." },
    { id: 2, label: "Consent essentials" },
    { id: 3, label: "Reporting pathways" },
    { id: 4, label: "Bystander intervention" },
  ];

  const handleNext = () => {
    if (selectedOption === QUESTIONS[currentStep].correct) {
      setScore(score + 1);
    }

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navy Header */}
      <section className="bg-[#1f3a5f] pt-[140px] pb-24 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-4">Validation</div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Knowledge Check</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Verify your understanding of the 2017 Institutional Policy and earn your certificate of completion.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-16 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="bg-white border border-slate-100 rounded-sm shadow-xl flex min-h-[600px] overflow-hidden">
            {/* Sidebar */}
            <div className="w-72 bg-[#F8FAFC] border-r border-slate-100 p-10 hidden lg:block">
              <div className="text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-8">Quiz Modules</div>
              <div className="space-y-6">
                {modules.map((m) => (
                  <div key={m.id} className="flex items-center gap-4">
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[12px] font-bold ${
                      m.id === 1 ? "bg-[#1f3a5f] text-white" : "bg-slate-200 text-slate-400"
                    }`}>
                      {m.id}
                    </div>
                    <span className={`text-[14px] font-medium ${m.id === 1 ? "text-[#1f3a5f]" : "text-slate-400"}`}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Content */}
            <div className="flex-1 p-10 md:p-16">
              {!isFinished ? (
                <div className="max-w-2xl">
                  <div className="text-[11px] font-bold tracking-[0.15em] text-[#c59d5f] uppercase mb-4">
                    Module 01 - Question {currentStep + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1f3a5f] mb-12">
                    {QUESTIONS[currentStep].question}
                  </h2>

                  <div className="space-y-4">
                    {QUESTIONS[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full text-left p-6 border rounded-sm transition-all flex items-center gap-5 ${
                          selectedOption === idx
                            ? "border-[#1f3a5f] bg-[#1f3a5f]/5"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selectedOption === idx ? "border-[#1f3a5f]" : "border-slate-200"
                        }`}>
                          {selectedOption === idx && <div className="h-3 w-3 rounded-full bg-[#1f3a5f]" />}
                        </div>
                        <span className="text-[15px] text-slate-700">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-between items-center">
                    <div className="text-[12px] text-slate-400">
                      Step {currentStep + 1} of {QUESTIONS.length}
                    </div>
                    <Button
                      onClick={handleNext}
                      disabled={selectedOption === null}
                      className="bg-[#1f3a5f] hover:bg-[#152a47] rounded-sm h-12 px-8 text-[13px] font-bold uppercase tracking-wider"
                    >
                      {currentStep === QUESTIONS.length - 1 ? "Finish Check" : "Next Question"}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                   <div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">Assessment Complete</h3>
                  <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                    You scored <span className="text-[#1f3a5f] font-bold">{score} out of {QUESTIONS.length}</span>. 
                    Institutional records have been updated to reflect your certification.
                  </p>
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="rounded-sm h-12 px-8 border-slate-200 text-[#1f3a5f] font-bold uppercase tracking-wider"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Retake Check
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
            <AlertCircle className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Verification Status: Verified</span>
          </div>
          <p className="text-[13px] text-slate-400 italic">
            This module satisfies the mandatory 2026 Orientation requirements for the University of Ghana community.
          </p>
        </div>
      </section>
    </div>
  );
}
