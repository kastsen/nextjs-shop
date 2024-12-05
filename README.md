# slmax-meow-react-testovoe-zadanie
Dynamic Next.js app with ISR, featuring TypeScript, showcasing static generation and incremental updates.

### Prerequisites
- Node.js v22.12.0
- npm v10.9.0


## Getting Started

### Clone the repo:
   ```bash
   git clone https://github.com/kastsen/slmax-meow-react-testovoe-zadanie
   cd slmax-meow-react-testovoe-zadanie
   ``` 
  
### Install dependencies:
   ```bash
   npm install
  ``` 

### Set up environment variables in .env.local
```
BASE_API_URL=http://localhost:3000/api/
```

### Run the development server:
```bash
npm run dev
```

## Why a Server and Mock API Were Used

I implemented a server and mock API to simplify data handling and create a more realistic application architecture. The ISR approach requires a server to handle data updates and page generation, making this solution aligned with the task requirements.
