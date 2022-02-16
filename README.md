## Setup

- Open docker desktop

- Installing the project dependencies
  > Run the command below
  ```shell
  npm install
  cd client/ 
  npm install
  cd -
  ```
- Create image and start container on detach mode
    > run the command below
  ```shell
  docker-compose up --detach
  ```
- Migration database (Change configuration to run migrations from host machine at config file:  port => 6996, host => 127.0.0.1)
    > run the command below
  ```shell
  sequelize db:create
  sequelize db:migrate
  ```
- Start application at : ```http://localhost:2468```