


# Assignment MyGram API

  

## Setup

 

-  **Install all dependencies:**

<The  request  typ>

	npm install  

-  **Create Database:**

<The  request  typ>

	npx sequelize db:create

*before creating the database make sure to check the database configuration here: 

-  **Migrate all table to database:**

<The  request  typ>

	npx sequelize db:migrate

-  **Start nodemon:**

<The  request  type>

	npm run dev

  

-  **The application is run at `http://localhost:8000`**

  

## Register

  

-  **URL:**

<The  request  type>

	/users/register
	
-  **Method:**

<The  request  type>

	POST

-  **Success response:**

Code: 201

![response register success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/regist.png)

-  **Error response:**

<The  request  type>

	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	Code: 500
	Content: { "message": "Internal Server Error" }

  

## Login

  

-  **URL:**

<The  request  type>

	/users/login

-  **Method:**

<The  request  type>

	POST

-  **Success response:**

Code: 200

![response login success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/login.png)

-  **Error response:**

<The  request  type>

	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
		
	Code: 401
	Content: { "message": "User with email .... not found!" }

	Code: 401
	Content: { "message": "Wrong password!" }

	Code: 500

	Content: { "message" : "Internal Server Error" }

  

## Users

### Edit one user


**_Need login before edit user for get the token_**

-  **URL:**

<The  request  type>

	/users/:id

-  **Method:**

<The  request  type>

	PUT

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 403
	Content: { "message": "User with email ... does not have permission to access user with id ..." }

	Code: 404
	Content: { "message": "User with id=... not found" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  

### Delete one user

  

**_Need login before  delete user for get the token_**

  

-  **URL:**

<The  request  type>

	/users/:id

-  **Method:**

<The  request  type>

	DELETE

-  **Success response:**

Code: 200

![response delete user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/delete-user.png)

-  **Error response:**

<The  request  type>

	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 403
	Content: { "message": "User with email ... does not have permission to access user with id ..." }

	Code: 404
	Content: { "message": "User with id=... not found" }

	Code: 500
	Content: { "message" : "Internal Server Error" }


## Photos

### Upload one photo


**_Need login before upload a photo for get the token_**

-  **URL:**

<The  request  type>

	/photos

-  **Method:**

<The  request  type>

	POST

-  **Success response:**

Code: 201

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  

### Get all photos

  

**_Need login before  get all photos  for get the token_**

  

-  **URL:**

<The  request  type>

	/photos

-  **Method:**

<The  request  type>

	GET

-  **Success response:**

Code: 200

![response delete user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/delete-user.png)

-  **Error response:**

<The  request  type>

	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }


### Edit one photo


**_Need login before edit a photo for get the token_**

-  **URL:**

<The  request  type>

	/photos/:photoId

-  **Method:**

<The  request  type>

	PUT

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }
	
	Code: 403
	Content: { "message": "User with email ... does not have permission to access photo with id ..." }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  
### Delete one photo


**_Need login before delete a photo for get the token_**

-  **URL:**

<The  request  type>

	/photos/:photoId

-  **Method:**

<The  request  type>

	DELETE

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 403
	Content: { "message": "User with email ... does not have permission to access photo with id ..." }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }


## Comments

### Create a comment


**_Need login before create a comment for get the token_**

-  **URL:**

<The  request  type>

	/comments

-  **Method:**

<The  request  type>

	POST

-  **Success response:**

Code: 201

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  

### Get all user comments

  

**_Need login before  get all user comments for get the token_**

  

-  **URL:**

<The  request  type>

	/comments

-  **Method:**

<The  request  type>

	GET

-  **Success response:**

Code: 200

![response delete user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/delete-user.png)

-  **Error response:**

<The  request  type>

	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }


### Edit one user comment


**_Need login before edit a comment for get the token_**

-  **URL:**

<The  request  type>

	/comments/:commentId

-  **Method:**

<The  request  type>

	PUT

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }
	
	Code: 403
	Content: { "message": "User with email ... does not have permission to access comment with id ..." }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  
### Delete one comment


**_Need login before delete a comment for get the token_**

-  **URL:**

<The  request  type>

	/comments/:commentId

-  **Method:**

<The  request  type>

	DELETE

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 403
	Content: { "message": "User with email ... does not have permission to access comment with id ..." }
	
	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

## SocialMedias

### Create a social media


**_Need login before create a social media for get the token_**

-  **URL:**

<The  request  type>

	/socialmedias

-  **Method:**

<The  request  type>

	POST

-  **Success response:**

Code: 201

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  

### Get all user social medias

  

**_Need login before  get all social medias for get the token_**

  

-  **URL:**

<The  request  type>

	/socialmedias

-  **Method:**

<The  request  type>

	GET

-  **Success response:**

Code: 200

![response delete user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/delete-user.png)

-  **Error response:**

<The  request  type>

	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }


### Edit one social media


**_Need login before edit a social media for get the token_**

-  **URL:**

<The  request  type>

	/socialmedias/:socialMediaId

-  **Method:**

<The  request  type>

	PUT

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 400
	Content: { "message": "Sequelize validation error or sequelize unique constraint error" }
	
	code: 401
	Content: { "message": "jwt must be provided" }
	
	Code: 403
	Content: { "message": "User with email ... does not have permission to access social media with id ..." }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }

  
### Delete one social media


**_Need login before delete a social media for get the token_**

-  **URL:**

<The  request  type>

	/socialmedias/:socialMediaId

-  **Method:**

<The  request  type>

	DELETE

-  **Success response:**

Code: 200

![response edit user success](https://github.com/fadlan7/final-project2/blob/main/postmanResult/edit-user.png)

-  **Error response:**

<The  request  type>
	
	code: 401
	Content: { "message": "jwt must be provided" }

	Code: 403
	Content: { "message": "User with email ... does not have permission to access social media with id ..." }

	Code: 404
	Content: { "message": "User with email ... not found in database" }

	Code: 500
	Content: { "message" : "Internal Server Error" }