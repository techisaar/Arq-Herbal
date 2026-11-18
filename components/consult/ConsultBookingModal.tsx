"use client";

import React, { useState } from "react";
import { CloseIcon, CheckIcon, WhatsAppIcon } from "@/components/icons/Icons";

interface ConsultBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export function ConsultBookingModal({
  isOpen,
  onClose,
  initialPlan = "Personalized Consultation",
}: ConsultBookingModalProps) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [goal, setGoal] = useState("Sleep & Rest");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-[#FBF9F5] rounded-3xl shadow-2xl border border-[#E5DFD4] overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#738578] hover:text-[#1E3A2B] rounded-full hover:bg-[#EFECE4] transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF5EE] text-[#2E5E42] flex items-center justify-center">
              <CheckIcon className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E3A2B] font-medium">
              Consultation Requested!
            </h3>

            <p className="text-sm text-[#55675A] font-light leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-[#1E3A2B] font-semibold">{name}</strong>. Our herbal practitioner will reach out on WhatsApp / Email at{" "}
              <strong className="text-[#1E3A2B] font-semibold">{phone || email}</strong> to confirm your slot.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-[#E8E2D5] text-left text-xs text-[#526457] space-y-1.5 max-w-sm mx-auto">
              <div><strong>Plan:</strong> {selectedPlan}</div>
              <div><strong>Focus Goal:</strong> {goal}</div>
              {preferredDate && <div><strong>Preferred Date:</strong> {preferredDate}</div>}
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full py-3 px-6 rounded-full bg-[#1E3A2B] text-white text-sm font-medium hover:bg-[#284E39] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6D1F] bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-0.5 rounded-full">
                ARQ Herbal Wellness
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E3A2B] font-normal mt-2">
                Book your consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#617366] font-light mt-1">
                Private 1-on-1 guidance customized to your daily lifestyle.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Plan Selection */}
              <div>
                <label className="block font-medium text-[#2E4134] mb-1.5">
                  Select Plan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("Personalized Consultation")}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedPlan === "Personalized Consultation"
                        ? "bg-[#1E3A2B] text-white border-[#1E3A2B]"
                        : "bg-white text-[#2E4134] border-[#DDD5C7] hover:border-[#1E3A2B]"
                    }`}
                  >
                    <div className="font-semibold text-xs">Single Consult</div>
                    <div className="text-xs opacity-90">₹99 per session</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("Monthly Wellness Program")}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedPlan === "Monthly Wellness Program"
                        ? "bg-[#1E3A2B] text-white border-[#1E3A2B]"
                        : "bg-white text-[#2E4134] border-[#DDD5C7] hover:border-[#1E3A2B]"
                    }`}
                  >
                    <div className="font-semibold text-xs">Monthly Care</div>
                    <div className="text-xs opacity-90">₹799 / month</div>
                  </button>
                </div>
              </div>

              {/* Goal Focus */}
              <div>
                <label className="block font-medium text-[#2E4134] mb-1.5">
                  What would you like support with?
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-white border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-[#1E3A2B] focus:outline-none focus:border-[#1E3A2B]"
                >
                  <option value="Sleep & Rest">Better Sleep & Deep Rest</option>
                  <option value="Stress & Tension">Stress Relief & Workday Tension</option>
                  <option value="Digestion & Gut">Healthy Digestion & Gut Balance</option>
                  <option value="Immunity & Vitality">Immunity Support & Respiratory Health</option>
                  <option value="Skin & Radiance">Radiant Skin & Antioxidant Detox</option>
                  <option value="Metabolism & Energy">Metabolism & Clean Daytime Energy</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#2E4134] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-white border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-[#1E3A2B] placeholder-[#9AA89E] focus:outline-none focus:border-[#1E3A2B]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#2E4134] mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Phone number"
                    className="w-full bg-white border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-[#1E3A2B] placeholder-[#9AA89E] focus:outline-none focus:border-[#1E3A2B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#2E4134] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-white border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-[#1E3A2B] placeholder-[#9AA89E] focus:outline-none focus:border-[#1E3A2B]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#2E4134] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-[#1E3A2B] focus:outline-none focus:border-[#1E3A2B]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#1E3A2B] hover:bg-[#284E39] text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Confirm & Request Consultation
                </button>
              </div>

              <p className="text-center text-[11px] text-[#8C9C90] pt-1">
                🔒 100% confidential. No spam, ever.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function WhatsAppCommunityModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md bg-[#FBF9F5] rounded-3xl shadow-2xl border border-[#E5DFD4] p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#738578] hover:text-[#1E3A2B] rounded-full hover:bg-[#EFECE4] transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 mx-auto rounded-full bg-[#25D366] text-white flex items-center justify-center mb-4 shadow-sm">
          <WhatsAppIcon className="w-7 h-7" />
        </div>

        <h3 className="font-serif text-2xl text-[#1E3A2B] font-medium">
          Join ARQ Herbal Circle
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#5B6D60] font-light leading-relaxed">
          Connect directly with our herbalists, receive seasonal harvest recipes,
          and participate in live Q&A sessions.
        </p>

        <div className="my-6 p-4 rounded-2xl bg-white border border-[#E7E1D6] text-xs text-[#4B5E51] space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[#25D366]">✓</span> Free access forever
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#25D366]">✓</span> Zero spam or marketing noise
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#25D366]">✓</span> Direct guidance from verified practitioners
          </div>
        </div>

        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4" /> Open WhatsApp & Join Circle
        </a>
      </div>
    </div>
  );
}
