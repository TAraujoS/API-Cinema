#

<h2 align ='center'> <strong>7. TICKETS<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Ticket object is defined as:

| Field     | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| id        | string | Unique ticket Id             |
| chair     | string | Ticket chair                 |
| sessionId | number | Sessions's unique identifier |
| userId    | string | User's unique identifier     |

<br>

### **Endpoints**

<br>

| Method | Routes       | Description       |
| ------ | ------------ | ----------------- |
| POST   | /tickets     | Create user       |
| GET    | /tickets     | List all tickets  |
| GET    | /tickets/:id | List ticket by id |

---

<br>

## **3.1 Ticket Creation**

[Back to Endpoints](#3-endpoints)

<br>

## POST `/tickets`

<br>

### **Request**:

- POST /tickets
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "chair": "5",
  "session": 2,
  "user": "1597a7b4-24e5-4856-a52c-70576459de11"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "id": "d1eaa744-85d5-4eef-8f38-53a92320e786",
  "chair": "5",
  "session": {
    "id": 2,
    "day": "2022-11-10",
    "hour": "15:00:00",
    "room": {
      "id": 14,
      "capacity": 70
    }
  },
  "price": 15
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

#### **Status `400 - BAD REQUEST`** - Chair already in use

```json
{
  "message": "Chair already in use"
}
```

#

## **3.2 List all Tickets**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/tickets`

<br>

### **Request**:

- PATCH /tickets/
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Body must contain any of the keys
- User must be an Employee

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
		"id": "dc750695-f69a-4f79-9a9b-14a705c7a5c1",
		"price": 15,
		"chair": 11,
		"session": {
			"id": 2,
			"day": "2022-11-10",
			"hour": "15:00:00",
			"room": {
				"id": 14,
				"capacity": 70
			}
		}
	},
    ...
]
```

#

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

#### **Status `401 - UNAUTHORIZED`** - User is not Employee

```json
{
  "message": "User is not employee"
}
```

#

## **3.3 List Ticket by ID**

[Back to Endpoints](#3-endpoints)

<br>

## GET `/tickets/:id`

<br>

### **Request**:

- PATCH /tickets/:id
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Body must contain any of the keys

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
	"id": "dc750695-f69a-4f79-9a9b-14a705c7a5c1",
	"price": 15,
	"chair": 11,
	"session": {
		"id": 2,
		"day": "2022-11-10",
		"hour": "15:00:00",
		"room": {
			"id": 14,
			"capacity": 70
		}
	}
},
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

#### **Status `404 - NOT FOUND`** - "Ticket not found"

```json
{
  "message": "Ticket not found"
}
```
