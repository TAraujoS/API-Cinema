<h1 align ='center'> <strong>API Documentation<strong> </h1>

## **Content Table**

- [1. Overview](#1-overview)
- [2. Entity Relationship Diagram](#2-entity-relationship-diagram)
- [3. Endpoints](#3-endpoints)

<br>

---

## **1. Overview**

Essa Api foi desenvolvida ....

<br>

## **2. Entity Relationship Diagram**

![Diagram](diagram_api_cine.png)

<br>

## **3. Endpoints**

[Back to the top](#content-table)

### Index

- [Users](#1-users)
- [Sessions](#6-sessions)

---

<h2 align ='center'> <strong>1. USERS<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The User object is defined as:

| Field     | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| id        | string  | User's unique identifier                          |
| name      | string  | User name                                         |
| email     | string  | User email                                        |
| isAdm     | boolean | Defines whether a user is an administrator or not |
| isActive  | boolean | Defines whether a user is active or not           |
| createdAt | string  | Date when the user was created                    |
| updatedAt | string  | Date when the user was updated                    |

<br>

### **Endpoints**

<br>

| Method | Routes          | Description                              |
| ------ | --------------- | ---------------------------------------- |
| POST   | /users          | Create user                              |
| GET    | /users          | List all users                           |
| GET    | /users/:user_id | Lists a user using its ID as a parameter |

---

<br>

## **1.1 User Creation**

[Back to Endpoints](#3-endpoints)

<br>

## POST `/users`

<br>

### **Request**:

- POST /users
- Host: http://suaapi.com/v1
- Authorization: None
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "name": "Thiago",
  "email": "thiago@mail.com",
  "isAdm": true
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "message": "User Created successfully",
  "user": {
    "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
    "name": "Thiago",
    "email": "thiago@mail.com",
    "isAdm": true,
    "isActive": true,
    "createdAt": "2022-10-29T00:41:28.717Z",
    "updatedAt": "2022-10-29T00:41:28.717Z"
  }
}
```

<br>

### **Error Responses**:

<br>

#### **Status `400 - BAD REQUEST`** - Missing required field

```json
{
  "message": "(any object key) is a required field"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Email already exists

```json
{
  "message": "This email already exists"
}
```

#

## **1.2 List Users**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/users`

<br>

### **Request**:

- POST /users
- Host: http://suaapi.com/v1
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
  "message": "User Created successfully",
  "users": [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Thiago",
      "email": "thiago@mail.com",
      "isAdm": true,
      "isActive": true,
      "createdAt": "",
      "updatedAt": ""
    }
    ...
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

<br>

#### **Status `401 - UNAUTHORIZED`** - "User is not an admin"

```json
{
  "message": "User is not an admin"
}
```

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
	"movie_id": "2"	
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
			"id": 2,
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

#### **Status `400 - BAD REQUEST`** - Missing required field

```json
{
  "message": "(any object key) is a required field"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Email already exists

```json
{
  "message": "This email already exists"
}
```

#

## **1.2 List Users**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/users`

<br>

### **Request**:

- POST /users
- Host: http://suaapi.com/v1
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
  "message": "User Created successfully",
  "users": [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Thiago",
      "email": "thiago@mail.com",
      "isAdm": true,
      "isActive": true,
      "createdAt": "",
      "updatedAt": ""
    }
    ...
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

<br>

#### **Status `401 - UNAUTHORIZED`** - "User is not an admin"

```json
{
  "message": "User is not an admin"
}
```
