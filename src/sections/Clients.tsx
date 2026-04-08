import { motion } from "framer-motion";

const clients = [
  "CVS Health",
  "Wellthy",
  "Parsons",
  "UCCS",
  "Resident Inspect",
  "Innovative Property Solutions",
  "Logan Cooper Counseling",
  "Coast Party Rental",
];

export function Clients() {
  return (
    <section
      id="clients"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            CLIENTS
          </p>
          <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
            Trusted by teams across healthcare, defense, education, and small
            business.
          </h2>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {clients.map((client, index) => (
            <motion.li
              key={client}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-x-5 sm:gap-x-6"
            >
              <span className="text-base font-medium text-slate-300 transition-colors hover:text-white sm:text-lg">
                {client}
              </span>
              {index < clients.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-slate-600"
                >
                  ·
                </span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
