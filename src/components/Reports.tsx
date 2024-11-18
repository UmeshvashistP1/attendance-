import React, { useState } from 'react';
import { Download, Calendar, FileText } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Reports = () => {
  const [reportType, setReportType] = useState('weekly');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Attendance Report', 20, 10);
    
    const tableData = [
      ['John Doe', 'Engineering', '90%', '2 days'],
      ['Jane Smith', 'Design', '95%', '1 day'],
      ['Mike Johnson', 'Marketing', '85%', '3 days'],
    ];

    doc.autoTable({
      head: [['Employee', 'Department', 'Attendance Rate', 'Absences']],
      body: tableData,
      startY: 20,
    });

    doc.save('attendance-report.pdf');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Attendance Reports</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="weekly">Weekly Report</option>
              <option value="monthly">Monthly Report</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          onClick={generatePDF}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2"
        >
          <Download className="h-5 w-5" />
          <span>Download Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="h-5 w-5 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">Recent Reports</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Weekly Report #{i}</p>
                    <p className="text-xs text-gray-500">Generated on March {i}, 2024</p>
                  </div>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Attendance Overview</h2>
          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    Overall Attendance
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    90%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div className="w-[90%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;