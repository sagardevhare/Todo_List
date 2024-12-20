import React from 'react';
import { Laptop } from 'lucide-react';
import { Employee } from '../types/todo';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-full">
          <Laptop className="text-blue-500" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{employee.name}</h3>
      </div>
      
      {employee.data && (
        <div className="space-y-2">
          {employee.data["CPU model"] && (
            <p className="text-gray-600">
              <span className="font-medium">CPU:</span> {employee.data["CPU model"]}
            </p>
          )}
          {employee.data["Hard disk size"] && (
            <p className="text-gray-600">
              <span className="font-medium">Storage:</span> {employee.data["Hard disk size"]}
            </p>
          )}
          {employee.data.year && (
            <p className="text-gray-600">
              <span className="font-medium">Year:</span> {employee.data.year}
            </p>
          )}
          {employee.data.price && (
            <p className="text-gray-600">
              <span className="font-medium">Price:</span> ${employee.data.price}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;