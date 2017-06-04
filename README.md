# RestoPick

### RestoPick is a project which helps indecisive groups of friends decide where to eat.

## Background and Overview

Picking restaurants in a group is hard, particularly if the majority of the group is attempting to be polite.  We intend to solve this problem by giving group members the option to assign rank values to nearby restaurants.  

Our approach:

  * Query the Yelp API to find types of restaurants in the area near the group
  * Allow one member of the group to create a 'room' to which other members can subscribe
  * Offer each group member a list of cuisines and price ranges based on the results of our API search
  * Offer a list of restaurants for group members to rank based on cuisine/price results
  * Apply a ranking algorithm to determine the best choice for the group

## Functionality and MVP

  - [] Get potential restaurants from Yelp based on location (using GraphQL)
  - [] Create a 'room' to which users can subscribe (using Websockets)
  - [] Take in a user choices and dynamically update the group (Websockets)
  - [] Return top 3 restaurants based on algorithm results
  - [] Delete group and dependancies after a set period of time
  - [] Be adequately styled

#### Bonus Features

 - [] Allow users to input a search location as opposed to using the actual location of the group creator
 - [] A live chat feature via which users can communicate while waiting for results
 - [] Display a Google Map on the results/rankings pages
 - [] Display directions to first restaurant on the results page

## Technologies

##### Backend: Ruby/Rails/ActionCable/Yelp GraphQL
##### Frontend: React/Redux

#### Establishing the appropriate connection with Websockets

In order to ensure the smooth operation of the group experience, the app will use ActiveCable to connect the users via websockets. At each stage of the choosing process, data from the users will be collected and their status dynamically updated via their connection to the server, keeping each of their stores in alignment and ensuring that all will get access to the right forms at the right time and the same end result once all of the choices have been made and the sorting algorithm has been run.

#### Querying the Yelp API

Querying the Yelp API will be carried out using the new GraphQL version of the Yelp API. This will allow us to search for restraurants based on the location of the group leader, while returning in the query only the data we want about each restaurant at each stage of the app.

```JavaScript

"data": {
  "search": {
    "total": 134,
    "business": [
      {
        "name": "Rambler",
        "rating": 4,
        "review_count": 154,
        "categories": [
          {
            "title": "American (New)",
            "alias": "newamerican"
          }
        ]
      },
    }
  }
```

#### Ranking algorithm

After having offered the users a list of restaurants matching their price and cuisine preferences and allowed them to rank those restaurants, the algorithm will assign a power value to each rank number (eg 1 = 1, 2 = 0.5, 3 = .25, etc.) in order to compute a total group preference score for each restaurant. This allow the program to suggest the top 3 choices based on the group members' rankings.

#### UX

##### Frontend

The app will connect users to a group (using a live websocket connection). React components will render based on group phase, offering the correct forms at the correct time. The group creator will have control over the flow of the phases via a button that will execute the sending of information to the back-end, possibly short-circuiting group members who have not submitted their responses. This will allow the group creator to keep the process going even in the event of a user disconnect or loss of coverage.

##### Backend

The app's backend will be responsible for maintaining the connection between users, as well as querying the Yelp API and its own databases to serve the correct data to the user for the given stage of the group.

## Accomplished over the Weekend

 - Studied GraphQL and Websockets
 - Researched Yelp API and how to retrieve the data we need at different phases of the UX
 - Completed DB schema, wireframes, API endpoints
 - DB set up according to schema and models have started to be filled out
 - wrote the sorting algorithm and GraphQL queries
 - learned how to create a working chatroom using ActionCable that can be adapted to our information serving purposes
 - test version of the user and group controllers made


## Group Members Work Breakdown

#### Alex Scott, Alex Bullen, Alissara Rojanapairat

### Day 1
Alex B: Finishing API controllers and set up figaro
Alex S: Finalizing GraphQL logic to dynamically generate queries based on user input
Alissara: Continue working on websockets and multi-chatroom

### Day 2
all three: continue Day 1 tasks

### Day 3
Alex S: Start base React components for forms
Alex B: Build out reducers and actions and waiting rooms
Alissara: Modals/Splash page and waiting rooms

### Day 4
all three: continue frontend Day 3 tasks

### Day 5
Alex S: Styling splash and logo
Alex B: Styling on waiting rooms and results
Alissara: Styling forms

### Weekend
Functionality testing, yelp compliance assurance, bugfixing, additional styling, and bonus
