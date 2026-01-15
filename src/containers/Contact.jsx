import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { PhoneCall, MailIcon, Mail, User, MapPin } from "lucide-react";
import Input from "../components/Input.jsx";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nahup8n",
        "template_4tthyjs",
        form.current,
        { publicKey: "yrMgxXbqVMZIgZrBm" }
      )
      .then(
        () => toast.success("Message sent successfully!"),
        () => toast.error("Something went wrong. Please try again.")
      );
  };

  return (
    <section id="contact" className="section dark:bg-slate-900">
      <SectionHeading content="Get In Touch" />

      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center justify-center gap-10"
      >
        {/* ---- Contact Form ---- */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-md bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-dark dark:text-light-gray">Your Name</label>
            <Input
              icon={User}
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-dark dark:text-light-gray">Your Email</label>
            <Input
              icon={Mail}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-dark dark:text-light-gray">Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="w-full min-h-[160px] p-3 border border-dark-gray rounded-md text-sm text-dark-gray dark:text-light-gray focus:outline-none"
            />
          </div>

          <Button type="submit" text="Send" width={300} />
        </form>

        {/* ---- Contact Info ---- */}
        <motion.div className="w-full max-w-md bg-light-gray dark:bg-slate-800 rounded-lg p-6 flex flex-col items-center gap-6 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <PhoneCall className="text-brand-dark dark:text-brand" size={24} />
            <p className="text-sm text-dark-gray dark:text-light-gray">+251 933 191 480</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <MailIcon className="text-brand-dark dark:text-brand" size={24} />
            <p className="text-sm text-dark-gray dark:text-light-gray">shmuye27@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-brand-dark dark:text-brand" size={24} />
            <p className="text-sm text-dark-gray dark:text-light-gray">Addis Ababa, Ethiopia</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
