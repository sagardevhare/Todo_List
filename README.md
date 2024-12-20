# Todo_List
# Task and Employee Management System

A modern React application for managing tasks and employee information, built with React, Redux Toolkit, and Tailwind CSS.

# Live Preview- https://creative-marzipan-ddb297.netlify.app
![Screenshot 2024-12-20 142010](https://github.com/user-attachments/assets/5a970d30-49a8-4f3a-a972-63faf8db73c6)
![Screenshot 2024-12-20 141942](https://github.com/user-attachments/assets/4d088260-f7ff-4c4a-9d02-a0eb97abe324)


## Features

### Task Management
- Create, toggle, and delete tasks
- Real-time task status updates
- Clean and intuitive user interface
- Persistent state management with Redux

### Employee Directory
- Fetch and display employee information
- View detailed employee system specifications
- Responsive grid layout
- Loading states and error handling

## Tech Stack

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Axios** - API requests
- **Lucide React** - Icons
- **Vite** - Build tool

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/         # React components
├── store/             # Redux store and slices
├── types/             # TypeScript interfaces
└── main.tsx          # Application entry point
```

## API Integration

The employee directory fetches data from:
```
https://api.restful-api.dev/objects
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.
