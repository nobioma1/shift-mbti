# Shift-MBTI

## Installation

Clone project

`git clone https://github.com/nobioma1/shift-mbti.git`

## Prerequisites

- Docker

## Steps

- Migrate database:
  `docker-compose run api npm run db:migrate`

- Seed database:
  `docker-compose run api npm run db:seed`

- Start services:
  `docker-compose up`

- Open browser and go to `http://localhost:3000`

## API

### API Endpoints

| ENDPOINT                                        | DESCRIPTION                           |
| ----------------------------------------------- | ------------------------------------- |
| [GET /api](#get-api)                            | Base URL                              |
| [GET /api/questions](#get-apiquestions)         | Get Questions                         |
| [POST /api/responses](#post-apiresponses)       | Returns personality for user by email |
| [POST /api/responses/new](#get-apiresponsesnew) | Create new user and records responses |

#### GET /api

Response body:

```json
{
  "message": "Welcome to Shift MBTI API"
}
```

### Questions

#### GET /api/questions

_**Description**: Returns all questions_.

Request body:

```json
{
  "email": "john@email.com"
}
```

Response body:

```json
{
  "questions": [
    {
      "id": 1,
      "questionText": "You find it takes effort to introduce yourself to other people."
    },
    ...
  ]
}
```

### Responses

#### POST /api/responses

_**Description**: Returns a users already saved personality and responses_.

Request body:

```json
{
  "email": "john@email.com"
}
```

Response body:

```json
{
    "personality": "ESTJ",
    "responses": [
        {
            "id": 1,
            "response": 4,
            "userId": 1,
            "questionId": 1,
            "createdAt": "2020-12-13T17:08:54.000Z"
        },
        {
            "id": 2,
            "response": 4,
            "userId": 1,
            "questionId": 2,
            "createdAt": "2020-12-13T17:08:54.000Z"
        },
        {
            "id": 3,
            "response": 4,
            "userId": 1,
            "questionId": 3,
            "createdAt": "2020-12-13T17:08:54.000Z"
        },
        ...
    ]
}
```

#### POST /api/responses/new

_**Description**: Creates new user and returns personality_.

Request body:

```json
{
  "email": "john@email.com",
  "responses": {
    "1": 4,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4,
    "7": 4,
    "8": 4,
    "9": 4,
    "10": 4
  }
}
```

Response body:

```json
{
  "personality": "ESTJ"
}
```
