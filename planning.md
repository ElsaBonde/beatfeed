## Register a user
- Successfully register a user
- Unsuccessfully register a user, "username already taken", maybe "this password is not safe enough"?

## Login a user
- Successfully logged in a user (username and password is a match)
- Failed to login (username or password isn't a match)

## Logout user
- Successfully logout user

## Show posts
- Show all posts
- Show all posts from latest to oldest
- Show specified post if I have time

## Create a post
- Check if user is logged in and has fileld in all mandatory input fields to create
- Fail to create if mandatory fields are not filled in, maybe zod?

## Delete a post
- Check if user is logged in and owns a post to delete
- Shouldn't be able to delete someone elses post
