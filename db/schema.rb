# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150712204227) do

  create_table "elements", force: :cascade do |t|
    t.integer  "play_id",    null: false
    t.integer  "role_id"
    t.integer  "play_order", null: false
    t.integer  "scene",      null: false
    t.string   "type",       null: false
    t.text     "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "elements", ["play_id"], name: "index_elements_on_play_id"
  add_index "elements", ["role_id"], name: "index_elements_on_role_id"
  add_index "elements", ["scene"], name: "index_elements_on_scene"

  create_table "plays", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.integer  "play_id",    null: false
    t.integer  "user_id"
    t.text     "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "roles", ["play_id"], name: "index_roles_on_play_id"
  add_index "roles", ["user_id"], name: "index_roles_on_user_id"

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

  create_table "videos", force: :cascade do |t|
    t.integer  "play_id",        null: false
    t.integer  "line_id"
    t.string   "ziggeo_id",      null: false
    t.string   "ziggeo_img_url", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "videos", ["line_id"], name: "index_videos_on_line_id"
  add_index "videos", ["play_id"], name: "index_videos_on_play_id"

end
