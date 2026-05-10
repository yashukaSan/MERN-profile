export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Therapist Website Frontend",
    description: "Front-end of the Therapist Website with real-time location.",
    fullDescription: "A comprehensive only Frontend of the Therapist website built with the Next.js and Next.js, featuring comforting theme, standard fonts and  device responsive website, which also navigate users to diffect pages for the interaction with the wesite. The application includes a home page, Office page, Contect page, About me page for better connecting with the clients.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yashukaSan/therapist-website-frontend",
    demo: "https://full-frontend-website.vercel.app/",
    features: [
      "User interaction with the website",
      "Comforting theme and standard fonts",
      "Device responsive design for optimal viewing on all devices",
      "Navigation to different pages for better user experience",
      "Real-time location display for therapists",
    ],
    challenges: [
      "Implementing real-time location",
      "Ensuring responsive design across various devices",
      "Creating a comforting and professional theme",
      "Optimizing navigation for user engagement"
    ],
    learnings: [
      "Next.js routing and page structure",
      "Tailwind CSS for responsive design",
      "TypeScript for type safety in React components",
      "Best practices for front-end performance optimization"
    ]
  },
  {
    id: "2",
    title: "Laundary Order Management System",
    description: "An Order management system which takes your orders and tell the amout to be charged",
    fullDescription: "An Laundary Order Management System built with the MERN stack, designed to streamline the process of managing laundry orders for both customers and service providers. The platform allows users to place orders, track their status in real-time, and receive notifications about their laundry. Service providers can manage incoming orders, update order statuses, and communicate with customers through the platform.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yashukaSan/laundry-order-system",
    demo: "https://laundry-order-system-tau.vercel.app/",
    features: [
      "Real-time service updates",
      "Order tracking and status updates",
      "User Login to access personalized dashboard",
      "Money calculation based on the order details",
      "Advanced filtering and search",
      "Dashboard with analytics and insights"
    ],
    challenges: [
      "Implementing real-time updates efficiently",
      "Designing a user-friendly dashboard",
      "Calculating amount based on the order details",
    ],
    learnings: [
      "User personalized dashboard design",
      "Real-time service update implementation",
      "Complex state management with Redux",
      "Performance optimization for real-time applications"
    ]
  },
  {
    id: "3",
    title: "Sales Analytics Dashboard",
    description: "Analytics platform for tracking sales metrics and generating insights.",
    fullDescription: "A comprehensive sales analytics platform that aggregates data from multiple sources, providing detailed insights into sales performance, customer behavior, and market trends. Features include customizable dashboards, automated reporting, and AI-powered recommendations.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yashukaSan/sales-dashboard",
    demo: "https://sales-dashboard-beta-lyart.vercel.app/",
    features: [
      "Analysis of the Sales data using multiple graphs and charts",
      "API Integration for real-time data updates",
      "Customizable charts and graphs for different sales metrics",
      "Competitor analysis tools",
      "Device responsive and interactive dashboard",
    ],
    challenges: [
      "Multiple Graphs and charts rendering with Recharts",
      "Processing and visualizing large datasets",
      "Integrating third-party APIs for real-time data",
      "Creating responsive and interactive charts"
    ],
    learnings: [
      "Third-party API integration patterns",
      "Data visualization with Recharts",
      "Performance optimization for large datasets",
      "Advanced React patterns for interactive dashboards"
    ]
  },
  {
    id: "4",
    title: "To-Do List Application",
    description: "A simple and efficient to-do list application with task management and organization features.",
    fullDescription: "A modern to-do list application built with React and Node.js. The platform allows users to create, edit, and manage their tasks with features like due dates, priority levels, and task categorization.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1657256031844-ba7ada043ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzc3NzEzMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yashukaSan/To-Do-List",
    demo: "https://remote-sable.vercel.app/boards",
    features: [
      "Task creation and management",
      "Due dates and priority levels",
      "Task categorization",
      "Progress tracking",
      "Reminders and notifications",
      "Search and filtering",
      "Data synchronization across devices"
    ],
    challenges: [
      "Implementing real-time synchronization across devices",
      "Designing an intuitive user interface for task management",
      "Ensuring data persistence and security",
      "Optimizing performance for large task lists"
    ],
    learnings: [
      "Real-time data synchronization techniques",
      "Design patterns for task management applications",
      "Data modeling for task organization",
      "Message queuing and delivery patterns"
    ]
  }
];