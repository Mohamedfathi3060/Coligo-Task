const Announcement = require('../models/anouncementModel');
const mongoose = require('mongoose');

exports.getAllAnnouncements = async (req, res) => {
  try {
    const filter = {};
    // Allow Filter by course For now
    if (req.query.course) {
      filter.course = req.query.course;
    }

    const announcements = await Announcement.find(filter).sort({
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      count: announcements.length,
      data: announcements,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAnnouncementById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid ID format' });
    }

    const announcement = await Announcement.findById(id);

    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, message: 'Announcement not found' });
    }

    res.status(200).json({ success: true, data: announcement });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAnnouncement = async (req, res) => {
  try {
    const { announcer, announcerImgUrl, course, content } = req.body;

    if (!announcer || !course || !content) {
      return res.status(400).json({
        success: false,
        message: 'announcer, course, and content are required fields',
      });
    }

    const newAnnouncement = await Announcement.create({
      announcer,
      announcerImgUrl,
      course,
      content,
    });

    res.status(201).json({
      success: true,
      message: 'Announcement created successfully',
      data: newAnnouncement,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid ID format' });
    }

    const updated = await Announcement.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: 'Announcement not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Announcement updated successfully',
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid ID format' });
    }

    const deleted = await Announcement.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: 'Announcement not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Announcement deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
