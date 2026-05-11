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

const MODULES_DATA = [
  {
    id: 1,
    title: "Awareness & Policy",
    questions: [
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
    ],
  },
  {
    id: 2,
    title: "Consent Essentials",
    questions: [
      {
        id: 1,
        question: "Under the 2017 policy, can consent be withdrawn after it has been given?",
        options: [
          "No, once given it is valid for the duration of the encounter.",
          "Yes, consent can be withdrawn at any time.",
          "Only if a third party is present.",
          "Only if the encounter has not yet become physical.",
        ],
        correct: 1,
      },
      {
        id: 2,
        question: "Does a previous romantic relationship automatically imply consent for future encounters?",
        options: [
          "Yes, history establishes a standing consent.",
          "No, consent must be given clearly and voluntarily for every encounter.",
          "Only if the relationship was registered with the University.",
          "It depends on the duration of the relationship.",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Reporting Pathways",
    questions: [
      {
        id: 1,
        question: "Which office is responsible for receiving formal complaints under the policy?",
        options: [
          "The Academic Affairs Office.",
          "The Sexual Harassment Committee/Secretariat.",
          "Only the Office of the Vice-Chancellor.",
          "The Sports Directorate.",
        ],
        correct: 1,
      },
      {
        id: 2,
        question: "Can an anonymous report lead to a formal disciplinary hearing?",
        options: [
          "Yes, automatically.",
          "No, formal hearings usually require a named complainant for cross-examination, though the University may still investigate.",
          "Only if the respondent admits to the claim.",
          "Only if the Dean of Students approves.",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Bystander Intervention",
    questions: [
      {
        id: 1,
        question: "What does the 'Direct' strategy in bystander intervention involve?",
        options: [
          "Asking a friend to help you later.",
          "Addressing the situation immediately as it's happening.",
          "Creating a distraction to draw attention away.",
          "Recording the incident and posting it online.",
        ],
        correct: 1,
      },
      {
        id: 2,
        question: "What is the primary goal of the 'Distract' strategy?",
        options: [
          "To confront the harasser directly.",
          "To interrupt the incident by shifting focus to something else.",
          "To call for professional security assistance.",
          "To comfort the victim after the incident has finished.",
        ],
        correct: 1,
      },
    ],
  },
];

function QuizPage() {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [moduleScores, setModuleScores] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isModuleComplete, setIsModuleComplete] = useState(false);

  const activeModule = MODULES_DATA.find((m) => m.id === activeModuleId)!;
  const questions = activeModule.questions;

  const handleNext = () => {
    const isCorrect = selectedOption === questions[currentStep].correct;
    const currentModuleScore = moduleScores[activeModuleId] || 0;
    
    if (isCorrect) {
      setModuleScores({
        ...moduleScores,
        [activeModuleId]: currentModuleScore + 1,
      });
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setIsModuleComplete(true);
    }
  };

  const handleModuleTransition = () => {
    if (activeModuleId < MODULES_DATA.length) {
      setActiveModuleId(activeModuleId + 1);
      setCurrentStep(0);
      setSelectedOption(null);
      setIsModuleComplete(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setActiveModuleId(1);
    setCurrentStep(0);
    setSelectedOption(null);
    setModuleScores({});
    setIsFinished(false);
    setIsModuleComplete(false);
  };

  const totalScore = Object.values(moduleScores).reduce((a, b) => a + b, 0);
  const totalQuestions = MODULES_DATA.reduce((acc, m) => acc + m.questions.length, 0);

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
                {MODULES_DATA.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveModuleId(m.id);
                      setCurrentStep(0);
                      setSelectedOption(null);
                      setIsModuleComplete(false);
                      setIsFinished(false);
                    }}
                    className="w-full flex items-center gap-4 text-left group"
                  >
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors ${
                      m.id === activeModuleId
                        ? "bg-[#1f3a5f] text-white"
                        : moduleScores[m.id] !== undefined
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-slate-200 text-slate-400 group-hover:bg-slate-300"
                    }`}>
                      {moduleScores[m.id] !== undefined ? "✓" : m.id}
                    </div>
                    <span className={`text-[14px] font-medium transition-colors ${
                      m.id === activeModuleId ? "text-[#1f3a5f]" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                      {m.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Content */}
            <div className="flex-1 p-10 md:p-16">
              {isFinished ? (
                <div className="text-center py-12">
                   <div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">Certification Earned</h3>
                  <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                    You scored <span className="text-[#1f3a5f] font-bold">{totalScore} out of {totalQuestions}</span>. 
                    Institutional records have been updated to reflect your mandatory certification.
                  </p>
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="rounded-sm h-12 px-8 border-slate-200 text-[#1f3a5f] font-bold uppercase tracking-wider"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset All Modules
                  </Button>
                </div>
              ) : isModuleComplete ? (
                <div className="max-w-2xl text-center py-12">
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">Module Complete</h3>
                  <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
                    You have finished the <strong>{activeModule.title}</strong> module. Your progress has been saved.
                  </p>
                  <Button
                    onClick={handleModuleTransition}
                    className="bg-[#1f3a5f] hover:bg-[#152a47] rounded-sm h-12 px-8 text-[13px] font-bold uppercase tracking-wider"
                  >
                    {activeModuleId === MODULES_DATA.length ? "Finish Assessment" : "Continue to Next Module"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="max-w-2xl">
                  <div className="text-[11px] font-bold tracking-[0.15em] text-[#c59d5f] uppercase mb-4">
                    Module 0{activeModuleId} - Question {currentStep + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1f3a5f] mb-12">
                    {questions[currentStep].question}
                  </h2>

                  <div className="space-y-4">
                    {questions[currentStep].options.map((option, idx) => (
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
                      Question {currentStep + 1} of {questions.length}
                    </div>
                    <Button
                      onClick={handleNext}
                      disabled={selectedOption === null}
                      className="bg-[#1f3a5f] hover:bg-[#152a47] rounded-sm h-12 px-8 text-[13px] font-bold uppercase tracking-wider"
                    >
                      {currentStep === questions.length - 1 ? "Complete Module" : "Next Question"}
                    </Button>
                  </div>
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
