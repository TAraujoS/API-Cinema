### Index

- [Payments](#1-payments)

---

<h2 align ='center'> <strong>2. Payments<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Payments object is defined as:

| Field   | Type   | Description                                   |
| ------- | ------ | --------------------------------------------- |
| id      | string | Payment unique identifier                     |
| name    | string | User name                                     |
| number  | string | Card number                                   |
| dueDate | string | Expiration date of this credit card           |
| code    | string | Security code of credit card                  |
| userId  | string | Define wich user is reference to this payment |

<br>

### **Endpoints**

<br>

| Method | Routes           | Description                                             |
| ------ | ---------------- | ------------------------------------------------------- |
| POST   | /paymentInfo     | To create a new payment data                            |
| PATCH  | /paymentInfo/:id | To update the data payment using id user as a parameter |
| GET    | /paymentInfo     | To list all payment data this user logged               |
| GET    | /paymentInfo/:id | To list data payment using the id user as a parameter   |
| DELETE | /paymentInfo/:id | To delete a data payment using id user as a parameter   |

---

<br>

## **2.1 Data Payment Creation**

[Back to Endpoints](#5-endpoints)

<br>

## POST - `/paymentInfo`

<br>

### **Request**:

- POST /paymentInfo
- Host: https://cine-express-projeto-m4.herokuapp.com/paymentInfo
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "name": "Joana",
  "number": "1326598745632156",
  "dueDate": "2023-06",
  "code": "963",
  "userId": "e64c6322-2a32-41be-8be9-37da17161ee2"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "id": "d0980b56-56d8-47bb-b15a-7a5bd4f26074",
  "name": "Joana",
  "number": "1326598745632156",
  "dueDate": "2023-06"
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

#### **Status `400 - BAD REQUEST`** - "Invalid card number"

```json
{
  "message": "Invalid card number"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - "Date is required"

```json
{
  "message": "Date is required"
}
```

<br>

#### **Status `400 - NOT FOUND`** - "Invalid code number"

```json
{
  "message": "Invalid code number"
}
```

## **2.2 Update Payment Data**

[Back to Endpoints](#5-endpoints)

<br>

## PATCH - `/paymentInfo/:id`

<br>

### **Request**:

- PATCH /paymentInfo/:id
- Host: https://cine-express-projeto-m4.herokuapp.com/paymentInfo/id
- Authorization: Bearer Token
- Content-type: application/json
- User must be logged at your account

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
  "name": "Joana Maria",
  "number": "1326598745632165",
  "dueDate": "2023-06",
  "code": "369",
  "userId": "e64c6322-2a32-41be-8be9-37da17161ee2"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": "d0980b56-56d8-47bb-b15a-7a5bd4f26074",
  "name": "Joana Maria",
  "number": "1326598745632165",
  "dueDate": "2023-06",
  "code": "369"
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

#### **Status `404 - NOT FOUND`** - "User not found"

```json
{
  "message": "User not found"
}
```

## **2.3 List General Payment Data**

[Back to Endpoints](#5-endpoints)

<br>

## GET - `/paymentInfo`

<br>

### **Request**:

- GET /paymentInfo
- Host: https://cine-express-projeto-m4.herokuapp.com/paymentInfo
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be logged

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
  "id": "d0980b56-56d8-47bb-b15a-7a5bd4f26074",
  "name": "Joana",
  "number": "1326598745632156",
  "dueDate": "2023-06"
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

## **2.4 List Payment Data by Id**

[Back to Endpoints](#5-endpoints)

<br>

## GET - `/paymentInfo/:id`

<br>

### **Request**:

- GET /paymentInfo/:id
- Host: https://cine-express-projeto-m4.herokuapp.com/paymentInfo/id
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be logged

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
  "id": "d0980b56-56d8-47bb-b15a-7a5bd4f26074",
  "name": "Joana",
  "number": "1326598745632156",
  "dueDate": "2023-06"
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

## **2.5 Delete Payment Data**

[Back to Endpoints](#5-endpoints)

<br>

## DELETE - `/paymentInfo/:id`

<br>

### **Request**:

- DELETE /paymentInfo/id
- Host: https://cine-express-projeto-m4.herokuapp.com/paymeentInfo/id
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be logged

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

#### **Status `204 - NO BODY`**

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```
