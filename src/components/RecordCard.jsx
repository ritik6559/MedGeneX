import React from "react";
import { IconChevronRight, IconFolder } from "@tabler/icons-react";

const RecordCard = ({ record, onNavigate }) => {
  return (
    <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-[#13131a]">
      <div className="flex justify-between gap-x-3 p-4 md:p-5">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white group-hover:scale-110 transition-transform duration-300">
          <IconFolder size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
        </div>
      </div>

      <a
        onClick={() => onNavigate(record.recordName)}
        className="inline-flex cursor-pointer items-center justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 md:px-5 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"
      >
        {record.recordName}
        <IconChevronRight />
      </a>
    </div>
  );
};

export default RecordCard;
