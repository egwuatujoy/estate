import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const notify = () => {
    toast.success("Form Submitted Successfully");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light under ">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          onClick={notify}
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
