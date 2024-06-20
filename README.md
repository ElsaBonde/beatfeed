# Soundstream
A website where users can share posts with music videos and like each other's posts.

## Installation and Starting the Project

### Step 1: Install Dependencies
```
npm install
```

### Step 2: Create .env files
Create a .env file and a .env.test file and link to the database:

`.env`:
```
DATABASE_URL="file:./dev.db"
```
`.env.test`:
```
DATABASE_URL="file:./test.db"
NODE_ENV=test
```

### Step 3: Initialize and Seed the Database
```
npm run push

npm run seed
```

### Step 4: Start the Development Server
```
npm run dev
```

### Step 5: Run tests
```
npm run test:push

npm test
```

## User Flow Scenarios

### Unsuccessful Login Attempts
#### Scenario: Incorrect Password
Imagine Alex, a user of the application, trying to log in. Alex opens the login page, enters the username coolCat, and types in the wrong password password2. Upon attempting to log in, Alex sees a clear error message: "Invalid username or password." This ensures that users receive immediate feedback when they enter incorrect login details.

#### Scenario: Incorrect Username
Now, consider Casey, another user. Casey mistakenly enters coolCats (with an extra 's') as the username and the correct password password1. After clicking the login button, Casey is also greeted with the message: "Invalid username or password." This helps Casey realize that there might be a typo in the username.

### User Registration
#### Scenario: Successful Registration
Chris is new to the application and wants to join the community. Chris navigates to the registration page, fills in the username frogz and password frogz, and submits the form. The registration is successful. Chris then logs in with these new credentials and sees frogz displayed on the homepage, confirming the successful login.

#### Scenario: Registration with Existing Username
Jordan tries to register with the username coolCat, which already exists. Upon submitting the form with the password password1, Jordan sees an error message: "Username already exists. Please try another." This prevents duplicate usernames and maintains unique user identities.

#### Scenario: Registration with Empty Fields
Taylor visits the registration page but tries to submit the form without entering any details. Taylor is met with an error message: "Username or password is missing." This prompts Taylor to fill in all required fields before proceeding.

### User Logout
Scenario: Successful Logout
After a productive session, Pat decides to log out. Pat logs in with the username coolCat and password password1, then clicks the "Logout" button in the sidebar. The button disappears, confirming that Pat has successfully logged out and ensuring the account's security.

### Viewing Posts
#### Scenario: Viewing All Posts
Jamie visits the homepage to see what's new. Jamie expects to see all posts created by users. The application confirms the number of posts and displays each one, ensuring Jamie doesn’t miss any updates from the community.

### Adding a New Post
#### Scenario: Successful Post Addition
Morgan, an enthusiastic user, logs in with the username coolCat and password password1. Eager to share a new song, Morgan navigates to the "Add Post" page, fills in the details with a title "Crazy frog", content "This song is tha shit, everybody loves it! (or not)", and a YouTube link "https://www.youtube.com/watch?v=P1KT_I1LmtA". After submitting, Morgan sees the new post on the homepage, complete with the embedded video, ensuring that the post was successfully added.

#### Scenario: Unsuccessful Post Addition (Missing Values)
Sam logs in with the username coolCat and password password1 and wants to add a post. However, Sam forgets to fill in the details and submits an empty form. The application stays on the "Add Post" page and displays an error message: "Please fill in all the fields above." This ensures that Sam provides all necessary information before a post is created.

### Liking and Unliking a Post
#### Scenario: Like and Unlike a Post
Riley, a user who loves interacting with posts, registers a new account with the username cool_tjej_96 and password coolgirl. After logging in, Riley likes the first post on the homepage. The post is marked as liked, and the like count increases. Riley then decides to unlike the post, and the like count decreases, reflecting the changes accurately.

#### Scenario: Like a Post When Not Logged In
Casey, browsing the homepage without logging in, tries to like a post. Casey is immediately redirected to the login page, ensuring that only authenticated users can interact with posts.
