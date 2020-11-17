# PTask
This README file is an overview of the project progress and workflow to be used by all the developers.
## Step 1:
### Implementation of the basic MERN Stack
This is the beginning of the project setup. Here all the components of the stack are integrated together.
The backend server is implemented using Express and Apollo Server (for GraphQL), the database is MongoDB (NO SQL JSON),
the front-end is written in React (.jsx) and is compiled using Babel to browser compatible javascript. Webpack is
used for packaging the frontend code.

### Authentication and Authorisation
The authorisation and authentication of the project is implemented using JWT. The routes have not been finalised but 
they are assured to be REST API-like.
The frontend is currently implemented in pure HTML and need to be converted to React for integration with the project.

The Signup part of the current UI needs to be extended to support the functionality of inputting interests of the user 
at the time of Signup (Updating these fields will be enabled through the dashboard)

## Step 2:
### Dashboard
The frontend part needs to be converted from HTML to React and some changes will be made as necessary. The server route
for the dashboard would be 
> /dashboard/:userId?graphQLQueryString (not finalised) 
#### Major Functionality of the project would be through this Dashboard.
#### Settings:
> Edit profile

> Manage teams

> Personalisation(optional)
#### Messaging
> Chat area (add functionality) with description
> 
> Transferring of messages

#### Dropdown implement (project differentiation)

> 3 states of a task. [not started, in process, completed]

#### Teams and projects schema to be added

#### Notifications
> These will be probably be implemented using Toastify

#### All the front end functionality will be implemented using React, Bootstrap and Front-End routing will be implemented using a React Router
#### All the API calls will be GraphQL queries.

# Step 3:
## Additional Functionality
#### MongoDB Quote schema to be remade
> interest->fetch from the Database 

> sorted -> array -> randomise fetch and display

#### Sticky tags : make a button to display n store it in state
#### Graphs- d3js freecodecamp


# Project WorkFlow
#### 1. All the code will be pushed to this git repository, so it is advised you clone it on your local machines and understand the basic working of git.
#### 2. All packages will be installed using npm, so you should understand how npm and package.json file works (Never add node_modules to your commits).
#### 3. A common version of node and npm will be decided and should be used by all to avoid any inconveniences.
#### 4. When Implementing any new functionality please create a new branch with an appropriate name, commit and push changes on that branch when satisfied create a pull request to the main branch.
#### 5. In case of merge conflicts the entire team will decide which version of the code is to be used else the code will be reverted to the last working version.
#### 6. Please using meaningful commit messages and pull request comments.

Basics of git are covered here:
https://github.com/atishekk/atishekk.github.io
