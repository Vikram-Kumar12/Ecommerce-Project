import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Socialmedia from "./socialmedia";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.from_name.value;
    const mobile = e.target.number.value;
    // Check if name is at least 5 characters
    if (name.length < 5) {
      alert("Your Name must be at least 5 characters.");
      return; // Exit the function if condition fails
    }
    // Check if mobile number is exactly 10 digits
    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile Number must be 10 digits.");
      return; // Exit the function if condition fails
    }


    emailjs
      .sendForm(
        "service_zvjj02l", // Replace with your Service ID
        "template_jkz0nqs", // Replace with your Template ID
        form.current,
        "_6E4Y7YADcWxLhGBT" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    };

  return (
    <div style={{ fontFamily: "normal" }} className="w-full px-3 sm:px-5">
      <div className="w-full sm:px-10 sm:w-full bg-[#390F7C] rounded-lg sm:flex">
        <div className="w-full sm:w-[30%] rounded-lg flex flex-col px-5 sm:px-3 sm:ml-20 sm:py-20">
          <h1 className="text-4xl sm:mt-0 mt-10">Let’s Connect</h1>
          <a href="#" className="text-lg mt-2 sm:mt-2 text-white">
            vikramkumar0120arav@gmail.com
          </a>
          <h1 className="text-xl sm:mt-2 mt-2 text-white">8987443835</h1>

          <div className="mt-10 sm:mt-0">
            <Socialmedia />
          </div>
        </div>

        <div className="w-full sm:w-[50%] rounded-lg sm:ml-10 py-10">
          <div className="w-full px-4 sm:px-10 sm:mt-0 mt-10 sm:py-3">
            <h1 className="text-2xl sm:text-4xl mb-5 sm:mt-6">
              Send me a message{" "}
            </h1>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="sm:flex sm:flex-col text-white"
            >
              <div className="sm:flex gap-1 text-white">
                <input
                  className="w-full mb-5 sm:mb-5 h-[8vh] bg-[#0E1130] rounded-lg overflow-hidden text-xl px-3"
                  type="text"
                  placeholder="Your name*"
                  name="from_name"
                  required
                />
                <input
                  className="w-full mb-5 sm:mb-5 h-[8vh] bg-[#0E1130] rounded-lg overflow-hidden text-xl px-3"
                  type="email"
                  placeholder="Your Email*"
                  name="from_email"
                  required
                />
              </div>

              <input
                className="w-full mb-5 sm:mb-5 h-[8vh] bg-[#0E1130] rounded-lg overflow-hidden text-xl px-3"
                type="number"
                placeholder="Mobile Number*"
                name="number"
                required
              />

              <textarea
                className="w-full mb-10 sm:mb-10 min-h-[20vh] sm:min-h-[15vh] bg-[#0E1130] rounded-lg overflow-hidden text-xl px-3"
                placeholder="Your message*"
                name="message"
                required
              ></textarea>

              <button
                type="submit"
                className="w-fit bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out mb-20 sm:mb-0"
              >
                Send message
              </button>

            </form>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
