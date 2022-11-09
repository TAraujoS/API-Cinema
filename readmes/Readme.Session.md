#

<h2 align ='center'> <strong>6. SESSIONS<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Session object is defined as:

| Field   | Type   | Description                   |
| ------- | ------ | ----------------------------- |
| id      | string | Unique Session Id             |
| day     | string | Session date                  |
| hour    | string | Session Hour                  |
| roomId  | string | Id of a room already created  |
| movieId | string | Id of a movie already created |

<br>

### **Endpoints**

<br>

| Method | Routes               | Description                              |
| ------ | -------------------- | ---------------------------------------- |
| POST   | /sessions            | Create user                              |
| GET    | /sessions            | List all users                           |
| GET    | /sessions/:movieId   | Lists a user using its ID as a parameter |
| PATCH  | /sessions/:sessionId | Update session                           |

---

<br>

## **6.1 Session Creation**

[Back to Endpoints](#3-endpoints)

<br>

## POST `/sessions`

<br>

### **Request**:

- POST /sessions
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: None
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "day": "2022/11/12",
  "hour": "13:00",
  "room_id": "1",
  "movie_id": "1"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "session": {
    "day": "2022-11-15",
    "hour": "19:00:00",
    "room": {
      "id": 1,
      "capacity": 100
    },
    "movie": {
      "id": 1,
      "name": "A Família Adams",
      "gender": "Comédia",
      "avaliation": "4.9",
      "duration": "1:55",
      "onDisplay": true,
      "cinema": {
        "id": 1,
        "name": "Cine Express"
      }
    },
    "id": 4
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

#### **Status `400 - BAD REQUEST`** - Missing required field

```json
{
  "message": "Missing required field"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - This room dont exist

```json
{
  "message": "This room dont exist"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - This movie dont exist

```json
{
  "message": "This movie dont exist"
}
```

#

## **6.2 List Sessions**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/sessions`

<br>

### **Request**:

- GET /sessions
- Host: https://cine-express-projeto-m4.herokuapp.com
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
{
  "sessions": [
    {
      "id": 1,
      "day": "2022-11-16",
      "hour": "19:00:00",
      "room": {
        "id": 7,
        "capacity": 50
      },
      "movie": {
        "id": 2,
        "name": "A Família Buscapé",
        "gender": "Comédia",
        "avaliation": "5.0",
        "duration": "1:58",
        "onDisplay": true,
        "cinema": null
      }
    },
    {
      "id": 2,
      "day": "2022-11-15",
      "hour": "15:00:00",
      "room": {
        "id": 7,
        "capacity": 50
      },
      "movie": {
        "id": 1,
        "name": "A Família Adams",
        "gender": "Comédia",
        "avaliation": "4.9",
        "duration": "1:55",
        "onDisplay": true,
        "cinema": null
      }
    }
  ]
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

#

## **6.3 List Sessions per Movie**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/sessions/movie/:movieId`

<br>

### **Request**:

- GET /sessions/movie/:movieId
- Host: https://cine-express-projeto-m4.herokuapp.com
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
{
  "movie": {
    "id": 2,
    "name": "A Família Buscapé",
    "gender": "Comédia",
    "avaliation": "5.0",
    "duration": "1:58",
    "onDisplay": true,
    "sessions": [
      {
        "id": 1,
        "day": "2022-11-16",
        "hour": "19:00:00",
        "room": {
          "id": 7,
          "capacity": 50
        }
      },
      {
        "id": 3,
        "day": "2022-11-17",
        "hour": "21:00:00",
        "room": {
          "id": 7,
          "capacity": 50
        }
      }
    ],
    "cinema": {
      "id": 1,
      "name": "Cine Express"
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

#### **Status `404 - NOT FOUND`** - "Movie not found"

```json
{
  "message": "This movie dont exist"
}
```

#

## **6.4 Update Sessions**

[Back to Endpoints](#3-endpoints)

<br>

## PATCH `/sessions/:id`

<br>

### **Request**:

- PATCH /sessions/:id
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Body must contain any of the keys
- User must be an Employee

### **Request body**:

```json
{
  "day"?: "2022/11/17",
  "hour"?: "21:00",
  "roomId"?: "7",
  "movieId"?: "2"
}
```

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

#### **Status `201 - OK`**

```json
{
  "id": 1,
  "day": "2022-11-15",
  "hour": "15:00:00",
  "room": {
    "id": 1,
    "capacity": 100
  },
  "movie": {
    "id": 1,
    "name": "Jason 2",
    "gender": "Horror",
    "avaliation": "4.3",
    "duration": "2:00",
    "onDisplay": true,
    "cinema": {
      "id": 1,
      "name": "Cine Express"
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

#### **Status `404 - NOT FOUND`** - "Session not found"

```json
{
  "message": "This session dont exist"
}
```
