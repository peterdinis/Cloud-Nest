import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { FileText, MoreVertical, Star, Trash } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface FileProps {
  file: {
    name: string;
    type: string;
    size: string;
    lastModified: string;
  };
}

const FileCard: FC<FileProps> = ({ file }: FileProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-stone-900 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FileText className="text-blue-500" size={24} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-sky-50">{file.name}</h3>
            <p className="text-sm text-gray-500">{file.size}</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1 hover:bg-gray-100 dark:hover:bg-stone-800 rounded-full"
        >
          <Popover>
            <PopoverTrigger>
              <MoreVertical size={20} className="text-gray-500 dark:text-sky-50" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex items-center gap-2 font-bold text-lg">
                <Trash />
                <span>Move to trash</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-lg mt-4">
                <Star />
                <span>Add to favorite</span>
              </div>
            </PopoverContent>
          </Popover>
        </motion.button>
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-sky-50">
        Last modified {file.lastModified}
      </div>
    </motion.div>
  );
}

export default FileCard