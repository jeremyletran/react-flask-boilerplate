# React Flask Boilerplate
This boilerplate uses React 16, Redux 4, Webpack 4, Python 3.7.1, PostgreSQL and Heroku. This repo is based off of [**Flask React Boilerplate**](https://github.com/alexkuz/flask-react-boilerplate), but has been refactored to support newer versions of React, Redux, and Webpack. I've also included React Router in the boilerplate to support multi-page applications.

## Installation
**Prerequisites**:

- [Pip](https://pip.pypa.io/en/latest/installing.html)
- [PostgreSQL](http://www.postgresql.org/download/)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [Heroku](https://devcenter.heroku.com/articles/heroku-cli)

Clone repository:

```
git clone https://github.com/jeremyletran/react-flask-boilerplate.git

cd react-flask-boilerplate
```

Install npm dependencies:

```
npm install
```

Setup python environment and install dependencies:

```
python3.7 -m venv env

source env/bin/activate

pip3 install -r requirements.txt
```

You may need to run the command below if you get `Error: pg_config executable not found.`

```
export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"
```
Copy .env.example config file to .env:

```
cp .env.example .env
```

Start PostgreSQL service if needed. If you've never installed Postgres on your system before, I recommend using [Postgres.app](https://postgresapp.com/) (only works for MacOSX). Else, install Postgres [here](http://www.postgresql.org/download/) and run the command below.

```
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

Create database tables:

```
heroku local initdb
```

Finally, start local server:

```
heroku local web

open http://127.0.0.1:5000/
```

For development / hot-reloading, use:
```
heroku local dev
```

Before deploying to your heroku staging/production server for the first time, be sure to run:
```
heroku run initdb -a [YOUR-APP-NAME]
```

## What do we have here?

- A basket of kittens 🐱
- Simple Flask **API**, powered with [**Flask-RESTful**](https://flask-restful.readthedocs.org/en/0.3.3/), [**SQLAlchemy**](http://www.sqlalchemy.org/) and [**PostgreSQL**](http://www.postgresql.org/)
- **UI**, powered with [**React**](http://facebook.github.io/react/), [**Babel**](https://babeljs.io/), and [**Webpack**](http://webpack.github.io/)

## License

Copyright 2019, Jeremy Le-Tran &lt;me@jeremyletran.com&gt;

This boilerplate is based on [**Flask React Boilerplate**](https://github.com/alexkuz/flask-react-boilerplate): MIT © [Alexander Kuznetsov](https://github.com/alexkuz)
