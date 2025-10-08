const { Schema, model } = require('mongoose');

const AnnouncementSchema = new Schema({
  announcer: {
    type: String,
    required: [true, 'Announcement Must has an Announcer'],
  },
  announcerImgUrl: {
    type: String,
    required: false,
  },
  course: {
    type: String,
    require: [true, 'Announcement Must has a Course'],
  },
  content: {
    type: String,
    required: [true, 'Announcement Must has a Content'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AnnouncementModel = model('Announcement', AnnouncementSchema);
module.exports = AnnouncementModel;
