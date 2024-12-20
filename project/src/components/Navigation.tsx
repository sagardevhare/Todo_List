import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListTodo, Users } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                location.pathname === '/'
                  ? 'border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <ListTodo className="mr-2" size={20} />
              Tasks
            </Link>
            
            <Link
              to="/employees"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                location.pathname === '/employees'
                  ? 'border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <Users className="mr-2" size={20} />
              Employees
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;