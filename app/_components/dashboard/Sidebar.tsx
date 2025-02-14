import React from 'react';
import { motion } from 'framer-motion';
import { Files, FolderOpen, Upload, Star, Clock, Trash2, Settings } from 'lucide-react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import SettingsDialog from '../shared/SettingsDialog';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { icon: Files, label: 'My Files' },
    { icon: FolderOpen, label: 'Folders' },
    { icon: Clock, label: 'Recent' },
    { icon: Star, label: 'Starred' },
    { icon: Upload, label: 'Upload' },
    { icon: Trash2, label: 'Trash' },
  ];

  return (
    <motion.div
      initial={{ width: isOpen ? 256 : 0 }}
      animate={{ width: isOpen ? 256 : 0 }}
      className={clsx(
        'bg-white border-r border-gray-200 h-screen overflow-hidden',
        isOpen ? 'block' : 'hidden'
      )}
    >
      <div className="p-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-medium"
        >
          <Upload size={20} />
          <span>Upload Files</span>
        </motion.button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            whileHover={{ backgroundColor: '#f3f4f6' }}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </motion.a>
        ))}
      </nav>

      <div className="absolute bottom-4 w-full px-4">
        <motion.button
          whileHover={{ backgroundColor: '#f3f4f6' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 w-full"
        >
          <Settings size={20} />
          <Dialog>
            <DialogTrigger>Settings</DialogTrigger>
            <DialogContent>
              <SettingsDialog />
            </DialogContent>
          </Dialog>
        </motion.button>
      </div>
    </motion.div>
  );
}