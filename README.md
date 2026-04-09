#  Book Vibe

Book Vibe is a sophisticated book discovery and management application designed to provide a high-fidelity user experience for book enthusiasts. The system focuses on intuitive navigation, persistent data handling, and advanced organization of reading lists.

---

##  Project Overview
I engineered **Book Vibe** to serve as a comprehensive platform for users to explore, track, and manage their favorite books. The application bridges the gap between static book lists and interactive management systems, allowing users to curate their own reading experiences through state-driven UI components.

##  Technical Stack & Tools
The project utilizes a modern frontend stack to ensure responsiveness and efficient state management:
* **Core Technologies:** HTML5, CSS3, JavaScript (ES6+).
* **Framework:** React.js for building a component-based architecture.
* **Styling:** Tailwind CSS for a utility-first and responsive design approach.
* **Data Persistence:** LocalStorage for maintaining user lists across sessions.
* **Navigation:** React Router for a seamless single-page application (SPA) experience.

##  Main Features
* **Advanced Sorting System:** Users can dynamically sort books based on **Rating**, **Number of Pages**, and **Publishing Year**, making it easy to find specific content.
* **Dual List Management:** Features separate "Read Books" and "Wishlist" categories to help users keep their reading library organized.
* **Data Persistence:** Integrated LocalStorage to ensure that the user's saved lists remain intact even after a page refresh.
* **Visual Progress Tracking:** Includes a dedicated "Pages Read" tab with graphical charts (via Recharts) to visualize the page counts of completed books.
* **Tab-Based Navigation:** A smooth, state-driven interface that allows users to toggle between different lists without page reloads.
* **Responsive Book Catalog:** A mobile-first design where book cards and detail pages adapt perfectly to mobile, tablet, and desktop screens.
* **Interactive Modals/Detail Pages:** Each book includes a deep-dive view showcasing specific metadata such as genre, tags, and publishing history.

  
##  Key Technical Implementations
* **Advanced Sort Functionality:** Implemented a dynamic sorting system that allows users to organize books based on criteria such as **Rating**, **Number of Pages**, and **Publishing Year**.
* **Persistent Reading Lists:** Developed "Read Books" and "Wishlist" sections using LocalStorage to ensure user data remains intact after page refreshes.
* **Interactive Data Visualization:** Integrated chart components (like Recharts) to visualize book metadata (e.g., page counts) for a better overview of reading progress.
* **Responsive Grid Layout:** A mobile-first design where book cards adapt dynamically to different screen sizes.
* **Detailed Metadata Modals/Pages:** Deep-dive views for each book, showcasing specific attributes like genre, tags, and author history.

##  Key Dependencies
* `react-router-dom`: For client-side routing.
* `recharts`: For data visualization and charts.
* `react-toastify`: For interactive user feedback and notifications.
* `tailwind-merge`: For managing dynamic Tailwind classes.

---

##  Local Installation Guide

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Hridrita/Book-vibe.git

2. **Navigate to the Project Directory:**
   cd Book-vibe

3. **Install Dependencies:**
   npm install

4. **Run the Project:**
   npm run dev


## Relevant Links
   Live Demo: https://book-vibe-urgv.vercel.app/
   GitHub Repository: https://github.com/Hridrita/Book-vibe.git
