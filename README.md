# ![logo](frontend/public/favicon.ico) Lnkr

Simple link shortening

### Live demo: [lnkr.space](https://lnkr.space/)

# Stack 🛠

Frontend:

- React
- Chakra UI
- Axios
- React QR code

Backend:

- Koa
- Mongoose

# Easy local launch 🚀

1. Clone repo: `https://github.com/vafomin/lnkr.git`
2. Run `cd lnkr`
3. Run `yarn install` for installing dependencies
4. Run [MongoDB](https://www.mongodb.com/) and create database
5. Change the environment variables in the `.env` files
6. Run `yarn frontend` for starting frontend
7. Run `yarn server` for starting backend
8. Congratulations! By default, the site will start on localhost:3000 🎉

# Environment variables 🌎

- `PORT` - specify the port to start the server
- `DATABASE` - Enter the address to connect to the MongoDB
- `VITE_DOMAIN` - specify the address where the frontend is running
- `VITE_API` - specify the address where the server is running

# License 📜

[MIT](LICENSE)
