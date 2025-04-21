import React, { useState, useEffect, useRef } from 'react';
import {
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { getAuth, signOut } from 'firebase/auth';

export default function SettingsMenu({ user }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const auth = getAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((err) => {
      console.error("Sign out failed:", err);
    });
  };

  return (
    <div className="absolute top-2 right-4 z-20" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-700 transition"
        aria-label="Settings"
      >
        <Cog6ToothIcon className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div className="mt-2 w-56 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/10 transition-opacity duration-200 animate-fade-in">
          <div className="px-4 py-3 text-sm text-white flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4 text-gray-400" />
            <span className="truncate">{user.email}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700 flex items-center gap-2"
          >
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
