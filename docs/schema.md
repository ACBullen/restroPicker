# Schema Information

## Groups
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
group_code      | integer   | not null, indexed, unique
phase           | integer   | not null
creator_id      | integer   | not null, foreign key (references users), indexed

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
filter_ready    | boolean   | not null, default false
ranking_ready   | boolean   | not null, default false
group_id        | integer   | not null, foreign key, indexed

## Restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key, indexed
name        | string    | not null
rating      | float     |
yelp_url    | string    | not null
address     | string    | not null

## Rankings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
rest_id      | integer   | not null, foreign key (references restaurants), indexed
ranking      | integer   |

## Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key, indexed
name        | string    | not null

## Category_join
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
category_id  | integer   | not null, foreign key (references categories), indexed

## Prices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null

## Price_join
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
price_id     | integer   | not null, foreign key (references prices), indexed
