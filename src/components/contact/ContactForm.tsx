"use client";

import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Button from "../button/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FormData = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_6z57avf",
        "template_2xw7qjb",
        {
          from_name: form.name,
          contact: form.contact,
          subject: form.subject,
          message: form.message,
        },
        "FyAie-0cF4AkGpGGl"
      );
      setSuccess(true);
      setShowSuccess(true);
      setForm({ name: "", contact: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o formulário.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full p-6 rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="flex justify-center items-center gap-2 text-[22px] font-bold text-center text-white mb-4">
        <FontAwesomeIcon className="text-orange-500" icon={faPaperPlane} />
        Let's connect!
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white font-medium">
          Your name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name or what you want to be called"
          className="text-[#c2c2c2] p-3 border border-[#0000003f] rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-white font-medium">
          Your contact
        </label>
        <input
          name="contact"
          id="contact"
          type="text"
          value={form.contact}
          onChange={handleChange}
          required
          placeholder="Your E-mail or WhatsApp"
          className="text-[#c2c2c2] p-3 border border-[#0000003f] rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-white font-medium">
          Subject
        </label>
        <input
          name="subject"
          id="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="This message is about..."
          className="text-[#c2c2c2] p-3 border border-[#0000003f] rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          placeholder="What do you need?"
          className="text-[#c2c2c2] p-3 border border-[#0000003f] rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <Button text="Send now" />
      </div>

      <p
        className={`fixed top-[120px] left-1/2 transform -translate-x-1/2 text-center bg-[#00ff2628] text-[#11ff00] backdrop-blur border-2 border-[#04ff0030] px-4 py-3 rounded-full transition-opacity duration-500 ${
          showSuccess ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Message sent successfully!
      </p>

      <button type="submit" disabled={isSending} className="hidden">
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
