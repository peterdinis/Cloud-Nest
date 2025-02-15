"use client"

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import FileCard from './FileCard';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const DashboardWrapper: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const recentFiles = [
    { id: 1, name: 'Project Proposal.pdf', type: 'PDF', size: '2.5 MB', lastModified: '2 hours ago' },
    { id: 2, name: 'Meeting Notes.docx', type: 'Word', size: '1.2 MB', lastModified: '5 hours ago' },
    { id: 3, name: 'Budget 2024.xlsx', type: 'Excel', size: '3.7 MB', lastModified: '1 day ago' },
    { id: 4, name: 'Presentation.pptx', type: 'PowerPoint', size: '5.1 MB', lastModified: '2 days ago' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-background flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <div className="flex-1">
          <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          <main className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-sky-50 mb-4">Recent Files</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {recentFiles.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-sky-50 mb-4">Quick Access</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {recentFiles.slice(0, 2).map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>
            </motion.div>
            <div className='pt-10'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardWrapper