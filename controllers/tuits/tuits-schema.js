import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  title: String,
  username: String,
  handle: String,
  topic: String,
  time: String,
  image: String,
  replies: Number,
  retuits: Number,
  disliked: Boolean,
  dislikes: Number,
}, {collection: 'tuits'});

export default schema;