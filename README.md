# YCC-API

This is the main repository for the rest api serving data for the ycc events app, a project originally created by 
students in the INFOTC 4500 class at the University of Missouri in 2018.


## Installation

1. `git clone [repository link]`
2. `cd ycc-api`
3. `npm install`
4. [Install a mongodb instance on the server](https://docs.mongodb.com/manual/installation/)

## Configuration

Run the program with the following environment variables:


* **PORT** - number value indicating what port the server should run on
* **EMAIL_ADDRESS** - Email address of the gmail account to use for verification
* **EMAIL_PASSWORD** - Password to the gmail account
* **ADDRESS** - string value of the address the server is running on. This is needed for creating the link in the email verification
* **MONGODB_URI** - string value of the address to the local mongodb instance. This will most likely be `"mongodb://localhost/ycc-api"`
* **SECRET** - string value to use for encrypting tokens, can be any value

## API Documentation

##### Auth

* [Login](/docs/auth/login.md)
* [Register](/docs/auth/register.md)
* [Validate](/docs/auth/validate.md)

##### Category

Endpoints for getting and manipulating event categories
* [delete](/docs/category/delete.md)
* [get](/docs/category/get.md)
* [post](/docs/category/post.md)

##### Event

Endpoints for getting and manipulating upcoming and past events
* [delete](/docs/event/delete.md)
* [get](/docs/event/get.md)
* [post](/docs/event/post.md)

##### Location

Endpoints for getting and manipulating locations associated with events
* [delete](/docs/location/delete.md)
* [get](/docs/location/get.md)
* [post](/docs/location/post.md)

##### Role

Endpoints for getting and manipulating user roles
* [delete](/docs/role/delete.md)
* [get](/docs/role/get.md)
* [post](/docs/role/post.md)

##### User

Endpoints for getting user contact information
* [get](/docs/user/get.md)