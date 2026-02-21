import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Key Metrics
  totalEmployees = 245;
  activeEmployees = 220;
  onLeave = 15;
  openPositions = 8;

  // Department Data
  departments = [
    { name: 'Engineering', employees: 85, color: '#3498db' },
    { name: 'Sales', employees: 45, color: '#e74c3c' },
    { name: 'HR', employees: 12, color: '#2ecc71' },
    { name: 'Marketing', employees: 32, color: '#f39c12' },
    { name: 'Finance', employees: 28, color: '#9b59b6' },
    { name: 'Operations', employees: 43, color: '#1abc9c' },
  ];

  // Recent Activities
  recentActivities = [
    { date: '2024-02-18', activity: 'John Smith joined as Senior Developer', type: 'hire' },
    { date: '2024-02-17', activity: 'Maria Garcia approved for 5 days leave', type: 'leave' },
    { date: '2024-02-16', activity: 'Performance review completed for Q1', type: 'review' },
    { date: '2024-02-15', activity: 'Recruitment process started for Marketing Manager', type: 'recruitment' },
    { date: '2024-02-14', activity: 'Payroll processed for all employees', type: 'payroll' },
  ];

  // Upcoming Leave
  upcomingLeave = [
    { name: 'Emma Wilson', leaveType: 'Vacation', from: 'Feb 20', to: 'Feb 25' },
    { name: 'Alex Johnson', leaveType: 'Sick Leave', from: 'Feb 19', to: 'Feb 19' },
    { name: 'Sarah Lee', leaveType: 'Personal', from: 'Feb 22', to: 'Feb 23' },
  ];

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      hire: '👤',
      leave: '📅',
      review: '⭐',
      recruitment: '💼',
      payroll: '💰',
    };
    return icons[type] || '📌';
  }
}
