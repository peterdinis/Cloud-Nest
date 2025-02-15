import { motion } from 'framer-motion';
import { Files, Upload, Star, Trash2, Settings } from 'lucide-react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import SettingsDialog from '../shared/dialogs/SettingsDialog';
import TrashDialog from '../shared/dialogs/TrashDialog';
import Link from 'next/link';
import UploadFileDialog from '../shared/dialogs/UploadFileDialog';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <motion.div
      initial={{ width: isOpen ? 256 : 0 }}
      animate={{ width: isOpen ? 256 : 0 }}
      className={clsx(
        'bg-white dark:bg-background border-r border-gray-200 h-screen overflow-hidden',
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
          <Dialog>
          <DialogTrigger>Upload File</DialogTrigger>
            <DialogContent>
              <UploadFileDialog />
            </DialogContent>
          </Dialog>
        </motion.button>
      </div>

      <nav className="mt-4 dark:bg-background">
        <motion.a className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-sky-50 dark:bg-background cursor-pointer">
          <Files size={20} />
          <Link href="/dashboard">Files</Link>
        </motion.a>
        <motion.a className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-sky-50 dark:bg-background cursor-pointer">
          <Files size={20} />
          <Link href="/folders">Folders</Link>
        </motion.a>
        <motion.a className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-sky-50 dark:bg-background cursor-pointer">
          <Star size={20} />
          <Link href="/files/started">Started</Link>
        </motion.a>
        <motion.a className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-sky-50 dark:bg-background cursor-pointer">
          <Trash2 size={20} />
          <Dialog>
            <DialogTrigger>Trash</DialogTrigger>
            <DialogContent>
              <TrashDialog />
            </DialogContent>
          </Dialog>
        </motion.a>
      </nav>

      <div className="absolute bottom-4 w-full px-4">
        <motion.button
          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-sky-50 w-full"
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