### Index

- [Movies](#1-movies)

---

<h2 align ='center'> <strong>4. Movies<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Movie object is defined as:

| Field      | Type    | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| id         | string  | Movie unique identifier                         |
| name       | string  | Movie name                                      |
| gender     | string  | Movie gender                                    |
| avaliation | string  | Defines movie avaliation                        |
| duration   | string  | Defines the duration of the movie               |
| onDisplay  | boolean | Define if movie is on display                   |
| cinema     | string  | Define cinema id where movie is being displayed |

<br>

### **Endpoints**

<br>

| Method | Routes            | Description                                   |
| ------ | ----------------- | --------------------------------------------- |
| POST   | /movies           | To create a new                               |
| GET    | /movies           | To list all movies                            |
| GET    | /movies/:movie_id | To list a movie using its ID as a parameter   |
| PATCH  | /movies/:movie_id | To update a movie using its ID as a parameter |
| DELETE | /movies/:movie_id | To delete a movie using its ID as a parameter |

---

<br>

## **4.1 Movie Creation**

[Back to Endpoints](#5-endpoints)

<br>

## POST - `/movies`

<br>

### **Request**:

- POST /movies
- Host: https://cine-express-projeto-m4.herokuapp.com/movies
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "name": "Jason 5",
  "gender": "Horror",
  "avaliation": "4.3",
  "duration": "2:00",
  "onDisplay": true,
  "cinema": "1"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "name": "Jason 5",
  "gender": "Horror",
  "avaliation": "4.3",
  "duration": "2:00",
  "onDisplay": true,
  "cinema": {
    "id": 1,
    "name": "Cine Gusta"
  },
  "id": 4
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Movie already exists

```json
{
  "message": "Movie already exists"
}
```

#### **Status `403 - FORBIDDEN`** - "User is not an admin"

```json
{
  "message": "User is not an adm"
}
```

#

## **4.2 List Movies**

[Back to Endpoints](#5-endpoints)

<br>

## GET - `/movies`

<br>

### **Request**:

- GET /movies
- Host: https://cine-express-projeto-m4.herokuapp.com/movies/
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
[
	{
		"id": 1,
		"name": "Jason 3",
		"gender": "Horror",
		"avaliation": "4.3",
		"duration": "2:00",
		"onDisplay": true,
		"cinema": {
			"id": 1,
			"name": "Cine Gusta"
		}
	}
  ...
]
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

## **4.3 List Movie by Id**

[Back to Endpoints](#5-endpoints)

<br>

## GET - `/movies/movieId`

<br>

### **Request**:

- GET /users
- Host: https://cine-express-projeto-m4.herokuapp.com/movies/movieId
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be an Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": 1,
  "name": "Jason 3",
  "gender": "Horror",
  "avaliation": "4.3",
  "duration": "2:00",
  "onDisplay": true,
  "cinema": {
    "id": 1,
    "name": "Cine Gusta"
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

## **4.4 Update Movie**

[Back to Endpoints](#5-endpoints)

<br>

## PATCH - `/movies/movieId`

<br>

### **Request**:

- PATCH /movies/movieId
- Host: https://cine-express-projeto-m4.herokuapp.com/movies/movieId
- Authorization: Bearer Token
- Content-type: application/json
- User must be an Employee

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

### **Request body**:

```json
{
  "name": "Jason 39",
  "gender": "Horror",
  "avaliation": "4.3",
  "duration": "2:00",
  "onDisplay": true,
  "cinema": "1"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "message": {
    "id": 4,
    "name": "Jason 39",
    "gender": "Horror",
    "avaliation": "4.3",
    "duration": "2:00",
    "onDisplay": true,
    "cinema": {
      "id": 1,
      "name": "Cine Gusta"
    }
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "User is not an admin"

```json
{
  "message": "User is not an adm"
}
```

## **4.5 Delete Movie**

[Back to Endpoints](#5-endpoints)

<br>

## DELETE - `/movies/movieId`

<br>

### **Request**:

- DELETE /movies/movieId
- Host: https://cine-express-projeto-m4.herokuapp.com/movies/movieId
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be an Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `204 - OK`**

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "User is not an admin"

```json
{
  "message": "User is not an adm"
}
```
