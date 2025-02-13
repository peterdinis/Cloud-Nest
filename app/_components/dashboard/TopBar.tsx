import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Plus } from 'lucide-react';

interface TopBarProps {
  toggleSidebar: () => void;
}

export function TopBar({ toggleSidebar }: TopBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Menu size={24} />
        </motion.button>
        
        <div className="flex items-center max-w-xl flex-1">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} />
          <span>New</span>
        </motion.button>
      </div>
    </div>
  );
}