# Nuxt 3 Minimal Starter

## Setup


```bash
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Run the application and open it in multiple browsers to simulate a chat among several people.

Features:

1. Articles are saved in MongoDB Atlas.

2. Requests for likes on articles occur every 5 seconds, but the server saves the hash state. Therefore, if the number of likes remains unchanged, there will be no unnecessary queries to the database.