This application includes:

- Backend: Nodejs + Expressjs
- Frontend: Reactjs
- Database: Postgres SQL
- Nodejs ORM library: Sequelize

## Sequelize and migrations
Make sure you run this command ```npm install --save sequelize-cli -g ```

Describe the commands and configurations that make up this project.

- Step 1: ```sequelize init``` => Initializes project (auto create new folder config, model, migrations, seeders). You don't need to run this command
 ![image](https://user-images.githubusercontent.com/48196420/154190233-e7529cfc-b938-4c06-8657-db98e25ed3c4.png)

- Step 2: Change connection and dialect configuration (here I use postgres. You can also use other databases like mySQL, sqllite, SQL Server, etc..)

   ![image](https://user-images.githubusercontent.com/48196420/154189136-66eb2b04-e2ec-46bf-9055-a4375e1ed074.png)

- Step 3: ```sequelize db:create``` => Create the database with the connection file configured (can be omitted if you created the database manually)

   ![image](https://user-images.githubusercontent.com/48196420/154190353-1e448064-72e2-4b17-8d34-1e2deed90973.png)
   
- Step 4: ```sequelize model:generate --name user --attributes id:integer,name:string,age:integer``` => Create a user model mapping with the users table in the database and migrate it. You don't need to run this command
   ![image](https://user-images.githubusercontent.com/48196420/154191638-85c07b7e-3e2a-4e8a-acbd-8428f50a194f.png)

- Step 5: ```sequelize db:migrate``` => Run pending migrations (I made some minor modifications in the model and migration file. Please check these files before running)

  ![image](https://user-images.githubusercontent.com/48196420/154192237-f37b3311-50e3-482f-b18a-582c713bee0c.png)     

  ![image](https://user-images.githubusercontent.com/48196420/154192455-3b96184b-885d-4886-9f3a-db3726026aec.png)


Read more about migrations at https://sequelize.org/master/manual/migrations.html

## Warning
This project has had a few modifications and bug fixes. Please check and compare with your file when initializing

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
![image](https://user-images.githubusercontent.com/48196420/153742627-7314e834-e0b7-45de-a6d2-f64cb2d90d4d.png)

## Test and CI/CD
updating

## Deploy on heroku
updating
