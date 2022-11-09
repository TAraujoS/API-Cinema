#

<h2 align ='center'> <strong>3. CINEMA<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Cinema object is defined as:

| Field | Type   | Description      |
| ----- | ------ | ---------------- |
| id    | string | Unique Cinema Id |
| name  | string | Session Hour     |

<br>

### **Endpoints**

<br>

| Method | Routes      | Description    |
| ------ | ----------- | -------------- |
| POST   | /cinema     | Create user    |
| PATCH  | /cinema/:id | Update session |

---

<br>

## **3.1 Cinema Creation**

[Back to Endpoints](#3-endpoints)

<br>

## POST `/cinema`

<br>

### **Request**:

- POST /cinema
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "name": "Cine Express"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "name": "Cine Express",
  "id": 1
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

#

## **3.2 Update Cinema**

[Back to Endpoints](#3-endpoints)

<br>

## PATCH `/cinema/:id`

<br>

### **Request**:

- PATCH /cinema/:id
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Body must contain any of the keys
- User must be an Employee

### **Request body**:

```json
{
  "name": "Cine-Express"
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
  "id": 2,
  "name": "Cine-Express"
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

#### **Status `404 - NOT FOUND`** - "Cinema not found"

```json
{
  "message": "Cinema not found"
}
```
