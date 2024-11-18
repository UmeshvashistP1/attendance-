export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  joinDate: string;
  status: 'active' | 'pending';
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  checkIn?: string;
  checkOut?: string;
}