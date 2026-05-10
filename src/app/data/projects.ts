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
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    fullDescription: "A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart functionality, order processing, and integrated payment gateway. The application includes an admin dashboard for managing products, orders, and users.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.ecommerce.com",
    features: [
      "User authentication and authorization with JWT",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and management",
      "Admin dashboard for product and order management",
      "Real-time inventory updates",
      "Email notifications for order confirmations"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across multiple components",
      "Optimizing database queries for large product catalogs",
      "Handling concurrent inventory updates"
    ],
    learnings: [
      "Advanced React state management with Redux",
      "RESTful API design and implementation",
      "Payment gateway integration best practices",
      "Database indexing and query optimization"
    ]
  },
  {
    id: "2",
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    fullDescription: "A sophisticated task management application that enables teams to collaborate effectively. Features include real-time updates using WebSockets, drag-and-drop task organization, customizable workflows, and comprehensive reporting tools.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://demo.taskmanager.com",
    features: [
      "Real-time collaboration with WebSocket integration",
      "Drag-and-drop task organization",
      "Custom workflows and task statuses",
      "Team member assignments and notifications",
      "File attachments and comments",
      "Activity timeline and audit logs",
      "Advanced filtering and search",
      "Dashboard with analytics and insights"
    ],
    challenges: [
      "Implementing real-time updates efficiently",
      "Designing intuitive drag-and-drop interactions",
      "Managing complex user permissions",
      "Scaling WebSocket connections"
    ],
    learnings: [
      "WebSocket implementation with Socket.io",
      "React DnD for drag-and-drop functionality",
      "Role-based access control (RBAC)",
      "Performance optimization for real-time applications"
    ]
  },
  {
    id: "3",
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media metrics and generating insights.",
    fullDescription: "A comprehensive social media analytics platform that aggregates data from multiple social networks, providing detailed insights into engagement, reach, and audience demographics. Features include customizable dashboards, automated reporting, and AI-powered recommendations.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Nzc3MTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/social-analytics",
    demo: "https://demo.socialanalytics.com",
    features: [
      "Multi-platform social media integration",
      "Real-time metrics and KPI tracking",
      "Customizable dashboard widgets",
      "Automated report generation",
      "Competitor analysis tools",
      "Sentiment analysis using NLP",
      "Scheduled post analytics",
      "Export data in multiple formats"
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Processing and visualizing large datasets",
      "Implementing efficient data caching strategies",
      "Creating responsive and interactive charts"
    ],
    learnings: [
      "Third-party API integration patterns",
      "Data visualization with Recharts",
      "Caching strategies with Redis",
      "Natural Language Processing basics"
    ]
  },
  {
    id: "4",
    title: "Real-Time Chat Application",
    description: "Instant messaging platform with group chats, file sharing, and video calling capabilities.",
    fullDescription: "A modern real-time chat application built with the MERN stack and Socket.io. The platform supports one-on-one messaging, group chats, file sharing, voice and video calls, and includes features like message reactions, typing indicators, and read receipts.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1657256031844-ba7ada043ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzc3NzEzMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://demo.chatapp.com",
    features: [
      "Real-time messaging with Socket.io",
      "One-on-one and group conversations",
      "File and image sharing",
      "Voice and video calling with WebRTC",
      "Message reactions and emojis",
      "Typing indicators and read receipts",
      "Message search and history",
      "User presence and status updates"
    ],
    challenges: [
      "Implementing WebRTC for video calls",
      "Managing message delivery across devices",
      "Optimizing real-time performance",
      "Handling file uploads efficiently"
    ],
    learnings: [
      "WebRTC peer-to-peer connections",
      "Socket.io room management",
      "File upload optimization with multer",
      "Message queuing and delivery patterns"
    ]
  },
  {
    id: "5",
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe platform with social features and meal planning tools.",
    fullDescription: "A vibrant recipe sharing platform where users can discover, share, and save their favorite recipes. The platform includes social features like following other cooks, commenting on recipes, meal planning tools, and automatic grocery list generation.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1758279745466-f5f4087a87d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBjb29raW5nJTIwZm9vZHxlbnwxfHx8fDE3Nzc3MTMzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/recipe-platform",
    demo: "https://demo.recipeplatform.com",
    features: [
      "Recipe creation with rich text editor",
      "Image uploads and galleries",
      "Social features (follow, like, comment)",
      "Advanced recipe search and filtering",
      "Meal planning calendar",
      "Automatic grocery list generation",
      "Nutritional information display",
      "Recipe rating and reviews"
    ],
    challenges: [
      "Implementing advanced search with multiple filters",
      "Managing recipe variations and substitutions",
      "Calculating nutritional information",
      "Creating an intuitive meal planning interface"
    ],
    learnings: [
      "Full-text search with MongoDB",
      "Image optimization and CDN integration",
      "Complex data modeling for recipes",
      "Calendar integration patterns"
    ]
  },
  {
    id: "6",
    title: "Fitness Tracking App",
    description: "Personal fitness tracker with workout logging, progress visualization, and goal setting.",
    fullDescription: "A comprehensive fitness tracking application that helps users monitor their workouts, track progress over time, set fitness goals, and stay motivated. Features include exercise libraries, custom workout plans, progress photos, and integration with wearable devices.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1606170750739-460f27c2d30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3NzcwNjE3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://demo.fitnesstracker.com",
    features: [
      "Workout logging and tracking",
      "Exercise library with instructions",
      "Custom workout plan creation",
      "Progress visualization with charts",
      "Goal setting and achievement tracking",
      "Progress photo timeline",
      "Body measurement tracking",
      "Calendar view of workout history"
    ],
    challenges: [
      "Designing flexible workout data models",
      "Creating intuitive workout logging UI",
      "Visualizing progress across multiple metrics",
      "Implementing reminder notifications"
    ],
    learnings: [
      "Chart visualization techniques",
      "Progressive Web App features",
      "Local storage strategies",
      "Data export and import functionality"
    ]
  }
];