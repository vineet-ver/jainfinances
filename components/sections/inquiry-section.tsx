"use client";

import { Button } from "@/components/ui/button";
import { CONTACT, SERVICE_OPTIONS } from "@/lib/constants";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function InquirySection() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(initialState);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const progress = useMemo(() => `${(step / 3) * 100}%`, [step]);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  const launchConfetti = () => {
    const colors = ["#D4AF37", "#F2D492", "#B8860B", "#FFF2CC"];
    confetti({
      particleCount: 180,
      spread: 88,
      origin: { y: 0.6 },
      colors,
    });
  };

  const submit = async () => {
    if (!accessKey) {
      setError("Missing Web3Forms key. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Premium Inquiry - JFCS",
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          replyto: form.email,
          company: "Jain Financial Consultancy Service",
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) {
        setError(data.message ?? "Unable to submit inquiry right now.");
        return;
      }

      setSuccess(true);
      launchConfetti();
      setForm(initialState);
      setStep(1);
    } catch {
      setError("Network issue while submitting. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="inquiry" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Premium Inquiry Hub</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Begin Your Private Consultation</h2>

      <div className="mt-8 overflow-hidden rounded-full border border-[--brand-border] bg-[--surface-2]">
        <div className="h-1.5 bg-[var(--brand-gradient)] transition-all duration-500" style={{ width: progress }} />
      </div>

      <div className="mt-8 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-8">
        {step === 1 && (
          <div className="grid gap-5 md:grid-cols-2">
            <FloatingInput label="Full Name" value={form.name} onChange={(val) => update("name", val)} />
            <FloatingInput label="Email" value={form.email} onChange={(val) => update("email", val)} type="email" />
            <FloatingInput label="Phone" value={form.phone} onChange={(val) => update("phone", val)} />
            <div className="flex items-end">
              <Button className="w-full" onClick={() => setStep(2)} disabled={!form.name || !form.email || !form.phone}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[--text-secondary]">Select Service</p>
            <div className="grid gap-4 md:grid-cols-2">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => update("service", option)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    form.service === option
                      ? "border-[--brand-solid] bg-[--surface-2]"
                      : "border-[--brand-border] hover:border-[--brand-solid]"
                  }`}
                >
                  <p className="font-medium text-[--text-primary]">{option}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="ghost" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)} disabled={!form.service}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[--text-secondary]">Message</p>
            <textarea
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              rows={6}
              placeholder="Share your goals, preferred timelines, and any specific funding or property requirements."
              className="ink-input w-full rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4 text-sm text-[--text-primary] outline-none"
            />
            {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button variant="ghost" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={submit} disabled={sending || !form.message}>
                {sending ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
            <p className="mt-5 text-xs text-[--text-secondary]">
              You can also reach us directly at {CONTACT.phone} or {CONTACT.email}.
            </p>
          </div>
        )}
      </div>

      {success ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[--surface-1]/95 p-6 backdrop-blur-xl">
          <div className="max-w-lg rounded-3xl border border-[--brand-border] bg-[--surface-2] p-8 text-center">
            <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-[--brand-solid]" />
            <h3 className="font-display text-4xl text-[--text-primary]">Application Received</h3>
            <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
              Your concierge request has been queued. A senior advisor will connect with you shortly.
            </p>
            <Button className="mt-6" onClick={() => setSuccess(false)}>
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="group relative block">
      <span
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[--text-secondary] transition-all ${
          value ? "top-3 translate-y-0 text-[10px] uppercase tracking-[0.15em]" : ""
        }`}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-2xl border border-[--brand-border] bg-[--surface-2] px-4 pt-4 text-[--text-primary] outline-none transition focus:border-[--brand-solid]"
      />
    </label>
  );
}
