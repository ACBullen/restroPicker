# RestoPicker
/Link to demo/

You're in a group, deciding on where to go to eat. Most people are polite
about their desires and defer to the group, so the one or two people with
the most outspoken opinions control the direction of the group. All well
and good for them, but perhaps those who defer would have been happier
elsewhere? How to make a choice without an extended debate while remaining polite? Enter RestoPicker. This iOS app leverages the Yelp api and a weighted choice algorithm to arrive at a choice of maximum happiness amongst local options for your group of friends or coworkers with a minimum of fuss.
_____

## Technology

### React-Native

This app is constructed using the React-Native framework, allowing for
a primarily JavaScript coded application to be integrated with the native
code of iOS and Android. It is built off the react-redux pattern of
unidirectional data flow from a shared store to the individual components,
keeping the app in line with itself as it runs.

### Yelp Query

The Yelp api is queried at the formation of the group, using the location
of the group creator to create entries in the database for local restaurants
currently open and nearby. This allows the other members of the group to
see the same list, even if they are not yet in the same area as the rest
of the group.

## Features and Implementation

### Groups and Non-Persistence

Given the pop-up nature of groups, ie. the individuals needing to make
a decision together vary based on situation and location, we decided to
make the system using non-persistent users and groups. This reduces the
data that the system needs to store, and removes the necessity for users
to authenticate themselves. When created, a group is assigned a
six-character alphanumeric code generated with SecureRandom, which other
users can then use to join in the session and link up with other users.
24 hours after group creation (and well after any user might need to
refer to the results of a group), a job runs on the server to destroy the
group and all of its associated users, restaurants, and rankings.


### Ranking Interface
/ranking .gif/

With the somewhat limited interface of a phone screen, the need for an
intuitive and easy method for creating a ranked order of restaurants. We
decided to use the react-native-sortable-list package to create a drag-and-drop
list whose order is translated into an array of rankings which can be saved
in the database.

### Weighted Choice Algorithm

In order to save on the resources needed on the phone, the application
runs our weighted choice algorithm on the server side, using a route for
that purpose to gathering the groups rankings and evaluating the top
choices for the group. The algorithm itself weights the ranks according
to an exponentially decreasing level of power, ie. the restaurant a user
has ranked first is worth 1 point, second is worth 1/2 point, third is
worth 1/4, etc.
```Ruby
def best_choice_algo(restaurants)

  rest_options = {}
  restaurants.each do |rest|
    rest_options[rest.id] = []
    rest.rankings.each do |ranking|
      rest_options[rest.id] << ranking.rank
    end
  end
  values = getPowerValues(rest_options)
  rankTotals = {}

  rest_options.each do |key, val|
    n = val.length
    total = 0
    while n > 0
      rank_to_be_added = val[n - 1]
      value_to_be_added = values[rank_to_be_added - 1]
      total += value_to_be_added
      n -= 1
    end
    rankTotals[key] = total
  end
  return rankTotals.to_a.sort {|a,b| b[1] <=> a[1]}.map{|a| a[0]}[0..2]
end
```
(note: getPowerValues returns the values each rank should have in order,
  which ensures correct ranking even if the number of restaurants varies
  for one reason or another)

This ensures that first choices have overwhelming weight when compared to
other choices, and that low choices will largely serve as tie-breakers.

### HTTP Polling

Keeping the group in sync such that the group leader knows when the group
members have submitted their rankings and the server has acknowledged
their receipt is key to ensuring the smooth operation of the app. To
provide this functionality, the app uses interval polling of the server
to check if users have submitted their information as yet, and then, once
the creator submits and the results are calculated, to take them to the results page (and then stop requesting information).
____
## Future Features and Improvements

#### WebSockets

HTTP polling, while reasonably reliable to keep the group informed as to
who has submitted their rankings and who is still considering, is not
the most efficient way of synchronizing the app state. WebSockets would
allow for a lower number of database queries and more immediate feedback
on the state of the group.

#### Input Location

Rather than only going off the current location of whoever creates the
group, it would be an added level of convenience for the group creator to
be able to choose a location for the center of the search area.

#### Yelp GraphQL Querying

GraphQL allows the querier to request more specific data from the API
than a simple GET request to a route. This allows for fetching only what
information is needed for the query and would also potentially allow for
additional filtering.

#### Additional Filters Stage

In order to improve the overall favorability of the result, it would be
beneficial to allow a similar ranking stage for cuisine and potentially
price, rather than only going off of relative location.

#### Android and Web App Versions

Expanding to Android increases the availability of the product,
as would a browser-based version, and with the function largely platform
agnostic, it would not require too much additional logic to be able to
share sessions across devices.
