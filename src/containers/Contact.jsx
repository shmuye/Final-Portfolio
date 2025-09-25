import { useRef , useState } from "react";
import emailjs from '@emailjs/browser'
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { PhoneCall, MailIcon, MapPin } from "lucide-react";

const Contact = () => {
    const form = useRef(null);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_nahup8n",
                "template_4tthyjs",
                form.current,   {
                    publicKey: "yrMgxXbqVMZIgZrBm"
                }

            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Thanks for your message, I will get back to you soon.");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus("Something went wrong, please try again later.");
                }
            );
    };

    return (
        <section id="contact" className="section">
            <h2 className="text-subHeading text-dark-gray text-center">
                Let's Solve Problems Together
            </h2>
            <SectionHeading content="Get In Touch" />

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col items-start gap-2">
                        <label className="label">Your Name:</label>
                        <input
                            className="input"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label className="label">Your Email:</label>
                        <input
                            className="input"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label className="label">Your Message:</label>
                        <textarea
                            name="message"
                            className="p-3 w-[400px] h-[200px] shadow-sm shadow-brand-dark text-body"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    <Button type="submit" width={400} text="Submit" />
                    {/* Status Message */}
                    {status === "success" && (
                        <p className="text-green-600 text-sm mt-2">
                            {status}
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 text-sm mt-2">
                            {status}
                        </p>
                    )}

                </form>

                {/* Contact Info */}
                <div className="p-2 w-[400px] flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center gap-2">
                        <PhoneCall color="#007079" size={24} />
                        <p className="text-body">+251933191480</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <MailIcon color="#007079" size={24} />
                        <p className="text-body">shmuye27@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <MapPin color="#007079" size={24} />
                        <p className="text-body">Addis Ababa, Ethiopia</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
