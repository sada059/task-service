All the APIs as mentioned in the requirements doc is implemented
Authentication is not implemented
request validations is not implemented
Assumed user is coming in req.user

How to Run the APIS 

use the following CURL commands to run the APIS

CREATE TASK API

```
curl --location 'http://localhost:3006/v1/tasks' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'authorizationtoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiNGY1OTQwYzFjOTY5M2YxMzcxYzEiLCJ0eXBlIjoiYXV0aFRva2VuIiwicGFzc1BocmFzZSI6IjY4QjRaRnV1IiwiaWF0IjoxNzAwMjMxNzQyLCJleHAiOjE3MDI4MjM3NDJ9.qoL8aDwRqbuiHPNGXDiJ_r4Wb50y3fzYDgytgGwt32g' \
--header 'x-service-version: 1.0.0' \
--data '{
    "taskName": "sada",
    "description": "Test",
    "priority": 0,
    "assignedTo": "658816ac7ef5df0fe64516b0",
    "status": "Open",
    "dueDate": "2023-12-24T10:48:52.018Z"
}'
```

UPDATE TASK API CURL
```
curl --location --request GET 'http://localhost:3006/v1/tasks' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'authorizationtoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiNGY1OTQwYzFjOTY5M2YxMzcxYzEiLCJ0eXBlIjoiYXV0aFRva2VuIiwicGFzc1BocmFzZSI6IjY4QjRaRnV1IiwiaWF0IjoxNzAwMjMxNzQyLCJleHAiOjE3MDI4MjM3NDJ9.qoL8aDwRqbuiHPNGXDiJ_r4Wb50y3fzYDgytgGwt32g' \
--header 'x-service-version: 1.0.0' \
--data '{
    "dueDate": "2023-12-24T11:31:56.139Z"
}'
```

GET Task API for Admin

```
curl --location 'http://localhost:3006/v1/tasks?sortBy=priority&sortOrder=desc' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'authorizationtoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiNGY1OTQwYzFjOTY5M2YxMzcxYzEiLCJ0eXBlIjoiYXV0aFRva2VuIiwicGFzc1BocmFzZSI6IjY4QjRaRnV1IiwiaWF0IjoxNzAwMjMxNzQyLCJleHAiOjE3MDI4MjM3NDJ9.qoL8aDwRqbuiHPNGXDiJ_r4Wb50y3fzYDgytgGwt32g' \
--header 'x-service-version: 1.0.0' \
--data ''
```

GET USER TASKS

```
curl --location 'http://localhost:3006/v1/userTasks' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'authorizationtoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiNGY1OTQwYzFjOTY5M2YxMzcxYzEiLCJ0eXBlIjoiYXV0aFRva2VuIiwicGFzc1BocmFzZSI6IjY4QjRaRnV1IiwiaWF0IjoxNzAwMjMxNzQyLCJleHAiOjE3MDI4MjM3NDJ9.qoL8aDwRqbuiHPNGXDiJ_r4Wb50y3fzYDgytgGwt32g' \
--header 'x-service-version: 1.0.0' \
--data ''
```

Mark Task as Completed

```
curl --location --request PATCH 'http://localhost:3006/v1/tasks/658825e5e4c15c29543cbe3d/complete' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'authorizationtoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiNGY1OTQwYzFjOTY5M2YxMzcxYzEiLCJ0eXBlIjoiYXV0aFRva2VuIiwicGFzc1BocmFzZSI6IjY4QjRaRnV1IiwiaWF0IjoxNzAwMjMxNzQyLCJleHAiOjE3MDI4MjM3NDJ9.qoL8aDwRqbuiHPNGXDiJ_r4Wb50y3fzYDgytgGwt32g' \
--header 'x-service-version: 1.0.0' \
--data ''
```

Event will be logged in the console once the task is marked as completed

