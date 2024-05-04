import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Error: Email service configuration is missing.");
      return;
    }

    setAlertMessage(
      "Email has been sent successfully!, I'll get back to you shortly."
    );
    // Clear the alert after a few seconds
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");

    // emailjs
    //   .send(serviceID, templateID, templateParams, { publicKey })
    //   .then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //       setAlertMessage("Email has been sent successfully!");
    //       // Clear the alert after a few seconds
    //       setTimeout(() => {
    //         setAlertMessage(null);
    //         // Reset input fields
    //         setName("");
    //         setEmail("");
    //         setMessage("");
    //       }, 5000);
    //     },
    //     (err) => {
    //       console.log('FAILED...', err);
    //       setAlertMessage("Failed to send email. Please try again later.");
    //       // Clear the alert after a few seconds
    //       setTimeout(() => {
    //         setAlertMessage(null);
    //       }, 5000);
    //     }
    //   );
  };

  return (
    <>
      <motion.section
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="py-12 md:py-12"
      >
        <div className="font-bold">
          <h1 className="text-xl lg:text-3xl text-center " id="contact">
            How Can I Help you? <br className="block lg:hidden" /> Tell me about
            your project
          </h1>
        </div>

        {/* form input */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-6 max-w-xl mx-auto px-4 md:px-8 py-12"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full"
          />
          <textarea
            cols={30}
            rows={5}
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 w-full"
          ></textarea>
          <Button type="submit" className="text-base">
            Send Message
          </Button>
        </form>
      </motion.section>

      {alertMessage && (
        <div className="fixed md:left-8 bottom-0 right-0 mb-8 mr-8 z-20">
          <Alert
            className={`flex flex-row border-2 gap-x-4 items-center ${status === "success" ? "border-green-500" : "border-red-500"}`}
          >
            <AlertCircle className="w-6 h-6" />
            <div className="flex flex-col">
              <AlertTitle className="">Sending Email</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </div>
          </Alert>
        </div>
      )}
    </>
  );
};

export default Contact;
