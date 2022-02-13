This application includes:

- Backend: Nodejs + Expressjs
- Client: Reactjs
- Database: Postgres SQL

## Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  npm install
  ```
- Start your node server
  > run the command below
  ```shell
  npm run server
  ```
- Start client
    > run the command below
  ```shell
  npm run client
  ```
- Start concurrently client and server
    > run the command below
  ```shell
  npm run dev
  ```

## Back-end Usage(API Endpoints)

Use `http://localhost:5001` as base url for endpoints

| HTTP Requests     | URL              | Method   |
| ----------------- | ---------------- | -------- |
| Index entry point | /                | `GET`    |
| Get all users     | api/v1/users     | `GET`    |
| Get user by id    | api/v1/users/:id | `GET`    |
| Create new user   | api/v1/users     | `POST`   |
| Update user       | api/v1/users/:id | `PATCH`  |
| Delete user       | api/v1/users/:id | `DELETE` |

## App demo
