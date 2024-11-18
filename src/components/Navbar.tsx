import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, FileText, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="font-bold text-xl">AttendanceHub</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/attendance" className="flex items-center space-x-1 hover:text-indigo-200">
              <Calendar className="h-5 w-5" />
              <span>Mark Attendance</span>
            </Link>
            <Link to="/reports" className="flex items-center space-x-1 hover:text-indigo-200">
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <Link to="/onboarding" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserPlus className="h-5 w-5" />
              <span>Onboarding</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;