# Spotify Distribution Project (Start Date 01/21/2023)

## **View what the website currently looks like here! https://bchh325.github.io/spotify-distribution/**
### **Backend repo: https://github.com/bchh325/graphify-server**

The end goal is for users to be able to view a data visualization of their genres in a given spotify playlist <br>
and interact with others who are also using the site at the same time.

## Technologies I'm planning to use
* React
* Express/Node (BFF Proxy / Auth Code Flow w/ PKCE)
* Spotify Web API
* Spotify Web Playback SDK
* WebSockets (Socket.io)
* MongoDB
* Deployment Options TBD

## Completed Tasks
* Sample UI Design
* Authorization endpoint to redirect user to Spotify's authentication URL
* State comparisons before/after redirect and obtained auth_code
* Connected MongoDB for express-sessions and storage of session cookie on the client

## Planned Tasks (I always find something to add to this list)
* BFF Proxy for OAuth Flow as end goal as described here: (https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps#name-backend-for-frontend-bff-pr)
* Create controller function for requesting access tokens with auth_code and code_verifier
* Create controller function for requesting resources from Spotify's Web API
* Create controller function to handle refreshing access tokens
