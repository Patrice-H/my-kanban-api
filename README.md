# My Kanban API

- This repo contains the API code you will need to run the My Kanban app.
  It goes hand in hand with [the repository of the frontend part](https://github.com/Patrice-H/MyKanban.git).

- This API works with MariaDB [XAMPP Apache + MariaDB](https://www.apachefriends.org/fr/index.html)

## Install the API locally

To install the API locally on your machine, you must :

1. Clone it on your computer `git clone https://github.com/Patrice-H/my-kanban-api.git`
2. Install `node_modules` with `npm install`
3. Run the API with `npm start`

## Consume the API

Once launched, this API makes several routes available to you :

- Route to retrieve all tasks :
  `GET /tasks`

- Route to retrieve all details of a task :
  `GET /task/?id={id}`

- Route to create a task :
  `POST /tasks`

- Route to update a task :
  `PUT /task/?id={id}`

- Route to delete a task :
  `DELETE /task/?id={id}`

The server should now be running at http://locahost:3001
