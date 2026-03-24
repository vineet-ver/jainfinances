"use client";

import { Button } from "@/components/ui/button";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/toast";
import { CONTACT, SERVICE_OPTIONS } from "@/lib/constants";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CinematicReveal } from "@/components/ui/cinematic";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export function InquirySection() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [stepError, setStepError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const progress = useMemo(() => `${(step / 3) * 100}%`, [step]);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleStep1 = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStepError("Please fill your Name, Email, and Phone.");
      setShakeKey((k) => k + 1);
      toast("Please fill all required fields", { variant: "warning" });
      return;
    }
    setStepError("");
    setStep(2);
  };

  const handleStep2 = () => {
    if (!form.service.trim()) {
      setStepError("Please select a service.");
      setShakeKey((k) => k + 1);
      toast("Please select a service", { variant: "warning" });
      return;
    }
    setStepError("");
    setStep(3);
  };

  const submit = async () => {
    if (!accessKey) {
      setError("Form key is missing. Please contact us directly.");
      toast("Form configuration missing", { variant: "error" });
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Inquiry - Jain Financial",
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          replyto: form.email,
          company: "Jain Financial Consultancy",
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        setError(data.message ?? "Could not submit. Please try again.");
        toast(data.message ?? "Submission failed", { variant: "error" });
        return;
      }
      setSuccess(true);
      toast("Submitted successfully!", { variant: "success" });
      confetti({ particleCount: 180, spread: 88, origin: { y: 0.6 }, colors: ["#FFAA00", "#ffd166", "#134E8E", "#AEB784"] });
      setForm(initialState);
      setStep(1);
    } catch {
      setError("Network issue. Please try again.");
      toast("Network error", { variant: "error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="inquiry" className="relative z-55 mx-auto max-w-5xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="Contact" />

      <CinematicReveal className="mb-8">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Get in Touch
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          Get Expert Help Today
        </h2>
      </CinematicReveal>

      {/* Progress bar */}
      <div className="glass overflow-hidden rounded-full">
        <div className="h-2 rounded-full bg-[--gold] transition-all duration-500" style={{ width: progress }} />
      </div>

      {/* Form */}
      <div className="mt-8 glass rounded-[--radius-xl] p-6 md:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key={`step-1-${shakeKey}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, x: [0, -6, 6, -4, 4, 0] }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-5"
            >
              <FloatingInput label="Your Full Name" value={form.name} onChange={(v) => update("name", v)} />
              <FloatingInput label="Email Address" value={form.email} onChange={(v) => update("email", v)} type="email" />
              <FloatingInput label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} />
              {stepError && <p className="text-sm text-rose-500">{stepError}</p>}
              <Button onClick={handleStep1}>Continue →</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key={`step-2-${shakeKey}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, x: [0, -6, 6, -4, 4, 0] }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[--gold]">What Do You Need?</p>
              <div className="grid gap-3 md:grid-cols-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => update("service", opt)}
                    className={`rounded-[--radius-md] border p-4 text-left transition active:scale-95 ${
                      form.service === opt
                        ? "border-[--gold] bg-[--gold]/10"
                        : "border-[--glass-border] hover:border-[--gold]"
                    }`}
                  >
                    <p className="font-medium text-[--text-primary]">{opt}</p>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="ghost" onClick={() => { setStepError(""); setStep(1); }}>Back</Button>
                <Button onClick={handleStep2}>Continue →</Button>
              </div>
              {stepError && <p className="mt-3 text-sm text-rose-500">{stepError}</p>}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key={`step-3-${shakeKey}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {sending && (
                <div className="mb-4 space-y-3 glass rounded-[--radius-md] p-4">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              )}
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[--gold]">Your Message</p>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                placeholder="Tell us what kind of loan or funding you need..."
                className="ink-input w-full rounded-[--radius-md] border border-[--glass-border] bg-[--surface-card] p-4 text-sm text-[--text-primary] outline-none"
              />
              {error && <p className="mt-3 text-sm text-rose-500">{error}</p>}
              <div className="mt-5 flex gap-3">
                <Button variant="ghost" onClick={() => { setStepError(""); setStep(2); }}>Back</Button>
                <Button onClick={submit} disabled={sending || !form.message}>{sending ? "Submitting..." : "Submit Request"}</Button>
              </div>
              <p className="mt-5 text-xs text-[--text-muted]">
                You can also reach us at {CONTACT.phone} or {CONTACT.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Success overlay */}
      {success && (
        <div className="fixed inset-0 z-70 grid place-items-center bg-[--bg]/90 p-6 backdrop-blur-xl">
          <div className="glass max-w-lg rounded-[--radius-xl] p-8 text-center">
            <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-[--gold]" />
            <h3 className="font-display text-4xl font-bold text-[--text-primary]">Thank You! 🎉</h3>
            <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
              Your request is received! Our team will call you very soon.
            </p>
            <Button className="mt-6" onClick={() => setSuccess(false)}>Close</Button>
          </div>
        </div>
      )}
    </section>
  );
}

function FloatingInput({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="group relative block">
      <span className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[--text-muted] transition-all duration-200 ${value ? "top-3 translate-y-0 text-[10px] font-bold uppercase tracking-[0.15em] text-[--gold]" : ""}`}>
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ink-input h-14 w-full rounded-[--radius-md] border border-[--glass-border] bg-[--surface-card] px-4 pt-4 text-[--text-primary] outline-none transition"
      />
    </label>
  );
}
