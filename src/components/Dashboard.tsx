import React from 'react';
import { Users, UserCheck, UserX, FileBarChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
            </div>
            <Users className="h-10 w-10 text-indigo-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Present Today</p>
              <p className="text-2xl font-bold text-green-600">142</p>
            </div>
            <UserCheck className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Absent Today</p>
              <p className="text-2xl font-bold text-red-600">14</p>
            </div>
            <UserX className="h-10 w-10 text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Attendance</p>
              <p className="text-2xl font-bold text-indigo-600">91%</p>
            </div>
            <FileBarChart className="h-10 w-10 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-800">Employee #{i}</p>
                <p className="text-xs text-gray-500">Marked present at 9:00 AM</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                Present
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;