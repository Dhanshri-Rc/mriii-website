// models/eventModel.js
// All MySQL queries for events table

const db = require("../config/db");

const EventModel = {
  // Get all events ordered by event date
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT * FROM events ORDER BY date DESC"
    );
    return rows;
  },

  // Get single event by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM events WHERE id = ?", [id]);
    return rows[0] || null;
  },

  // Create new event
  create: async (data) => {
    const {
      title,
      description,
      image,
      date,
      location,
      organizer,
      eventType,
      category,
      shortDescription,
    } = data;

    const [result] = await db.query(
      `INSERT INTO events 
        (title, description, image, date, location, organizer, eventType, category, shortDescription) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description,
        image,
        date,
        location,
        organizer,
        eventType,
        category,
        shortDescription,
      ]
    );
    return result.insertId;
  },

  // Update event by ID
  update: async (id, data) => {
    const {
      title,
      description,
      image,
      date,
      location,
      organizer,
      eventType,
      category,
      shortDescription,
    } = data;

    const [result] = await db.query(
      `UPDATE events 
       SET title=?, description=?, image=?, date=?, location=?, organizer=?,
           eventType=?, category=?, shortDescription=?
       WHERE id=?`,
      [
        title,
        description,
        image,
        date,
        location,
        organizer,
        eventType,
        category,
        shortDescription,
        id,
      ]
    );
    return result.affectedRows;
  },

  // Delete event by ID
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM events WHERE id = ?", [id]);
    return result.affectedRows;
  },

  // Get total count
  getCount: async () => {
    const [rows] = await db.query("SELECT COUNT(*) as total FROM events");
    return rows[0].total;
  },

  // Get recent/upcoming events
  getRecent: async (limit = 5) => {
    const [rows] = await db.query(
      "SELECT * FROM events ORDER BY date DESC LIMIT ?",
      [limit]
    );
    return rows;
  },
};

module.exports = EventModel;
