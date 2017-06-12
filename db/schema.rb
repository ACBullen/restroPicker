# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170612223707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_categories_on_group_id", using: :btree
  end

  create_table "category_joins", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_category_joins_on_user_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "group_code",                    null: false
    t.integer  "creator_id",                    null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.boolean  "results_ready", default: false
  end

  create_table "price_joins", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "price_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["price_id"], name: "index_price_joins_on_price_id", using: :btree
    t.index ["user_id"], name: "index_price_joins_on_user_id", using: :btree
  end

  create_table "prices", force: :cascade do |t|
    t.string   "type",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rankings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "rest_id",    null: false
    t.integer  "ranking",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rest_id"], name: "index_rankings_on_rest_id", using: :btree
    t.index ["user_id"], name: "index_rankings_on_user_id", using: :btree
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.string   "name",       null: false
    t.float    "rating"
    t.string   "yelp_url",   null: false
    t.string   "address",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
    t.string   "categories"
    t.index ["group_id"], name: "index_restaurants_on_group_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                      null: false
    t.integer  "group_id"
    t.boolean  "ranking_ready", default: false, null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
