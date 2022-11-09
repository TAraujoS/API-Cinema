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

---

<h2 align ='center'> <strong>1. USERS<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The User object is defined as:

| Field     | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| id        | string  | User's unique identifier                          |
| name      | string  | User name  *                                        |
| email     | string  | User email  *                                      |
| isAdm     | boolean | Defines whether a user is an administrator or not |
| isActive  | boolean | Defines whether a user is active or not           |
| createdAt | string  | Date when the user was created                    |
| updatedAt | string  | Date when the user was updated                    |
| password | string   | User password *
| isEmployee | boollean | Define wheater a user is an employee or not 

<br>

<br>

### **Endpoints**

<br>

| Method | Routes          | Description                              |
| ------ | --------------- | ---------------------------------------- |
| POST   | /users          | Create user                              |
| POST   | /login         | Login user
| GET    | /users          | List all users                           |
| GET    | /users/:id      | Lists a user using its ID as a parameter |
| PATCH  | /user/:id       | Update user
| DELETE  | /delete/:id     | Soft delete user

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
  "isAdm": true,
  "contact": "xx 9xxxx xxxx",
  "birthDate": "2000/01/01",
  "isEmployee" : false,
  "password": "1234"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  
  {
    "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
    "name": "Thiago",
    "bithDate": "2000/01/01",
    "isAdm": true,
    "isEmployee": false,
    "contact" : "99988866677",
    "email": "thiago@mail.com",
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

#### **Status `409 - CONFLICTS`** - Email already exists

```json
{
  "message": "This email already exists"
}
```

#
## **1.2 Login**
[Back to Endpoints](#3-endpoints)

<br>

<!-- LOGIN -->

## SIGN `/login`

<br>

### **Request**
- SIGN /login
- Host: http://suaapi.com/v1
- Authorization: None
- Content-type: application/json
- User must be created

<br>

### **Request body**:

```json
{
  "email": "thiago@mail.com",
  "password": "1234"
}
```

<br>

### **Expected Response**:

<br>

#### **Status  `200 - OK`**


```json
{
  "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNFbXBsb3llZSI6dHJ1ZSwiaWF0IjoxNjY3OTY0MDY2LCJleHAiOjE2NjgwNTA0NjYsInN1YiI6ImE4M2MxMjVjLWNjZjctNDA4NC04NTg1LWFhZDYyMWZiMjY5MSJ9.LHflvucPDWutAUSUa-O9NY516Y1s5bNVnVtdKPsu89k"
}

```

### **Error Response**:

<br>

#### **Status `403 - FORBIDDEN`** - "Invalid user or password"

```json
{
  "message": "Invalid user or password"
}
```

<!-- GET ALL -->

#

## **1.3 List Users**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/users`

<br>

### **Request**:

- GET /users
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
  
   [
    {
      "id": "f1719800-2e5a-4270-88de-64380f73dd3d",
      "name": "Thiago",
      "bithDate": "2000/01/01",
      "isAdm": true,
      "isEmployee": false,
      "contact" : "99988866677",
      "email": "thiago@mail.com",
      "isActive": true,
      "createdAt": "2022-10-29T00:41:28.717Z",
      "updatedAt": "2022-10-29T00:41:28.717Z"
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

#### **Status `403 - UNAUTHORIZED`** - "User is not an admin"

```json
{
  "message": "User is not an admin"
}
```

<!-- GET by ID -->

#

## **1.4 List User by Id**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/users/:id`

<br>

### **Request**:

- GET /users/:id
- Host: http://suaapi.com/v1
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be an Adm or employee

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
  
   [
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

#### **Status `403 - FORBIDDEN`** - "User is not an admin and employee"

```json
{
  "message": "User is not an admin"
}
or
{
  "message": "User is not employee
}
```
<!-- Patch -->

#

## **1.5 Update User by id**

[Back to Endpoints](#3-endpoints)

<br>

## PATCH `/users/:id`

<br>

### **Request**:

- PATCH /users/:id
- Host: http://suaapi.com/v1
- Authorization: Bearer Token
- Content-type: application/json
- User must be an Adm and employee

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
  
  {
    "name": "Thiago",
    "birthDate": "2000/01/01",
    "contact" : "99988866677",
    "email": "thiago@mail.com",
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

#### **Status `403 - FORBIDDEN`** - "User is not an admin and employee"

```json
{
  "message": "User is not an admin"
}
or
{
  "message": "User is not employee
}
```

<!-- DELETE -->

#

## **1.6 Delete User by id**

[Back to Endpoints](#3-endpoints)

<br>

## DELETE `/users/:id`

<br>

### **Request**:

- DELETE /users/:id
- Host: http://suaapi.com/v1
- Authorization: Bearer Token
- Content-type: application/json
- User must be an Adm and employee

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

#### **Status `204 - No Content`**

```json
No body returned for response
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

#### **Status `403 - FORBIDDEN`** - "User is not an admin and employee"

```json
{
  "message": "User is not an admin"
}
or
{
  "message": "User is not employee
}
```
### **Status `400 - Bad Request`** - "User already deleted"

``` json
{
  "message": "User already deleted"
}

```

### **Status `404 - Not Found`** - "User not found id invalid"

``` json
{
  "message": "User not found"
}

```


