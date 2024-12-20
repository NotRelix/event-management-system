'use client';

import Image from "next/image";
import BrowseEvents from "@/components/browse-events";
import { useState } from "react";
import SignUpModal from "@/components/signup-modal";

export default function Page() {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div className="h-full bg-gray-100">
      <main className="">
        <div className="bg-black flex justify-center">
          <div className="w-full flex flex-col-reverse md:items-center gap-3 px-5 py-10 md:grid md:grid-cols-2" style={{maxWidth: '76rem'}}>
            <div className="text-white">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold">Create and Join Events Effortlessly</h1>
                <p className="text-gray-400 text-lg">Discover, organize, and RSVP to events that matter to you. It's fast, easy, and fun!</p>
              </div>
              <button 
                onClick={() => setSignUpModalOpen(true)}
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg px-8 py-3 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Join Us
              </button>
            </div>
            <Image 
              src='/main-events.png'
              alt='event with many balloons'
              className="rounded-xl object-cover"
              width={500}
              height={500}
              style={{ width: '800px', height: 'auto', maxHeight: '250px'}}
            />
          </div>
        </div>
        <BrowseEvents />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>

      {isSignUpModalOpen && (
        <SignUpModal
          setSignUpModalOpen={setSignUpModalOpen}
          setLoginModalOpen={() => {}}
        />
      )}
    </div>
  );
}