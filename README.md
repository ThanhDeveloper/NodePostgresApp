This application includes:

- Backend: Nodejs + Expressjs
- Client: Angular js
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
  npm start
  ```

## Back-end Usage(API Endpoints)

Use `http://localhost:5001` as base url for endpoints

| HTTP Requests     | URL            | Method   |
| ----------------- | -------------- | -------- |
| Index entry point | /              | `GET`    |
| Get all users     | api/users      | `GET`    |
| Get user by id    | api/users/:id | `GET`    |
| Create new user   | api/users      | `POST`   |
| Update user       | api/users/:id  | `PATCH`  |
| Delete user       | api/users/:id  | `DELETE` |

## App demo
