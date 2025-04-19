import React from "react";
import { motion } from "framer-motion";
import { IconChevronRight } from "@tabler/icons-react";
import { fadeInUp } from "@/utils/animations";

const MetricsCard = ({ title, subtitle, value, icon: Icon, progress, onClick }) => (
  <motion.div
    {...fadeInUp}
    className="group flex flex-col rounded-xl border bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl shadow-lg dark:border-neutral-800/50 dark:bg-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex justify-between gap-x-3 p-4 md:p-5">
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-400 font-medium">
          {title}
        </p>
        <div className="mt-2 flex items-center gap-x-2">
          <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            {value}
          </h3>
        </div>
      </div>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
      </div>
    </div>
    <button
      onClick={onClick}
      className="inline-flex items-center justify-between rounded-b-xl border-t border-neutral-800/10 px-4 py-3 text-sm font-medium text-gray-600 dark:text-neutral-300 transition-colors hover:bg-white/5 md:px-5"
    >
      <span>{subtitle}</span>
      <IconChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

export default MetricsCard;
