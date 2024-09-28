# Netfix-GPT

Netfix-GPT is a web application that allows users to browse and search for movies across various categories such as Now Playing, Popular, Top Rated, and Upcoming. Additionally, users can search for specific genres or themes and get movie suggestions based on their preferences using OpenAI's GPT technology.

## Features

- **Movie Listings:** Browse Now Playing Movies, Popular Movies, Top Rated Movies, and Upcoming Movies.
- **Search Functionality:** Search for specific movies or genres.
- **Personalized Suggestions:** Get movie suggestions based on your preferences (e.g., search for "funny movies" to get comedy suggestions).
- **Multi-language Support:** Available in multiple languages including English, Hindi, and Spanish.
- **Authentication:** Secure login and authentication using Firebase.
- **State Management:** Managed using Redux.
- **Responsive Design:** Styled using Tailwind CSS for a responsive and modern UI.

## Technologies Used

- **JavaScript**
- **RegEx**: 
- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: For styling the application.
- **Firebase**: For authentication.
- **Redux**: For state management.
- **TMDB API**: To fetch movie data.
- **OpenAI API**: To generate movie suggestions based on user input.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js and npm installed on your system.
- API keys for TMDB and OpenAI.

 ### API Keys

You need to obtain API keys for both TMDB and OpenAI.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/netfix-gpt.git
   cd netfix-gpt

2. **Install dependencies:**

   ```bash
   npm install

3. **Create a .env file in the root directory of the project and add your API keys as shown below:**

     VITE_TMDB_KEY=your_tmdb_api_key
   
     VITE_OPENAI_KEY=your_openai_api_key

5. **Start the development server:**

   ```bash
    npm run dev
 The app should now be running at http://localhost:3000.

