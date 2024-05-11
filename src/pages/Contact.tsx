const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center py-10 h-28 capitalize">
        Feel Free to Contact Us
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5119343312035!2d75.76859461060234!3d23.18800687897081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375003d6b2325%3A0x1e5d6d7d2b9d73c8!2sGopal%20Mandir!5e0!3m2!1sen!2sin!4v1715403866784!5m2!1sen!2sin"
        width="100%"
        height="450"
        className="border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-11/12 mx-auto h-full my-20 flex justify-center py-5">
        <form
          action="https://formspree.io/f/mzbnwdlo"
          method="POST"
          className="flex flex-col w-1/2 gap-y-5 md:w-1/3 "
        >
          <label htmlFor="uname">
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              required
              className="w-full border border-slate-300 py-2 px-5"
              autoComplete="off"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border border-slate-300 py-2 px-5"
              required
              name="email"
              autoComplete="off"
            />
          </label>
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            className="border border-slate-300 py-2 px-5"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-indigo-500  text-white font-bold rounded-sm w-2/5 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
