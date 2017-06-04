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
#### Ranking algorithm
#### UX

## Accomplished over the Weekend

 - Studied GraphQL and Websockets
 - Researched Yelp API and how to retrieve the data we need at different phases of the UX
 - Completed DB schema
 - DB set up according to schema and models have started to be filled out


## Group Members
