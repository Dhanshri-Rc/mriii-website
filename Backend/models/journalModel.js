// models/journalModel.js

const db = require("../config/db");

const JournalModel = {
  // ─────────────────────────────────────────────────────────
  // GET ALL JOURNALS
  // ─────────────────────────────────────────────────────────
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT * FROM journals ORDER BY createdAt DESC"
    );

    return rows;
  },

  // ─────────────────────────────────────────────────────────
  // GET JOURNAL BY ID
  // ─────────────────────────────────────────────────────────
  getById: async (id) => {
    const [rows] = await db.query(
      "SELECT * FROM journals WHERE id = ?",
      [id]
    );

    return rows[0] || null;
  },

  // ─────────────────────────────────────────────────────────
  // CREATE JOURNAL
  // ─────────────────────────────────────────────────────────
  create: async (data) => {
    const {
      title = "",
      description = "",
      image = null,
      pdf = null,
      author = "",
      publishDate = null,
      eissn = "",
      pissn = "",
      journalUrl = "",
      publisher = "",
      frequency = "",
      subjectArea = "",
      status = "active",
    } = data;

    const sql = `
      INSERT INTO journals (
        title,
        description,
        image,
        pdf,
        author,
        publishDate,
        eissn,
        pissn,
        journalUrl,
        publisher,
        frequency,
        subjectArea,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      title,
      description,
      image,
      pdf,
      author,
      publishDate,
      eissn,
      pissn,
      journalUrl,
      publisher,
      frequency,
      subjectArea,
      status,
    ];

    const [result] = await db.query(sql, values);

    return result.insertId;
  },

  // ─────────────────────────────────────────────────────────
  // UPDATE JOURNAL
  // ─────────────────────────────────────────────────────────
  update: async (id, data) => {
    const {
      title = "",
      description = "",
      image = null,
      pdf = null,
      author = "",
      publishDate = null,
      eissn = "",
      pissn = "",
      journalUrl = "",
      publisher = "",
      frequency = "",
      subjectArea = "",
      status = "active",
    } = data;

    const sql = `
      UPDATE journals SET
        title = ?,
        description = ?,
        image = ?,
        pdf = ?,
        author = ?,
        publishDate = ?,
        eissn = ?,
        pissn = ?,
        journalUrl = ?,
        publisher = ?,
        frequency = ?,
        subjectArea = ?,
        status = ?
      WHERE id = ?
    `;

    const values = [
      title,
      description,
      image,
      pdf,
      author,
      publishDate,
      eissn,
      pissn,
      journalUrl,
      publisher,
      frequency,
      subjectArea,
      status,
      id,
    ];

    const [result] = await db.query(sql, values);

    return result.affectedRows;
  },

  // ─────────────────────────────────────────────────────────
  // DELETE JOURNAL
  // ─────────────────────────────────────────────────────────
  delete: async (id) => {
    const [result] = await db.query(
      "DELETE FROM journals WHERE id = ?",
      [id]
    );

    return result.affectedRows;
  },

  // ─────────────────────────────────────────────────────────
  // GET TOTAL COUNT
  // ─────────────────────────────────────────────────────────
  getCount: async () => {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS total FROM journals"
    );

    return rows[0].total;
  },

  // ─────────────────────────────────────────────────────────
  // GET RECENT JOURNALS
  // ─────────────────────────────────────────────────────────
  getRecent: async (limit = 5) => {
    const [rows] = await db.query(
      "SELECT * FROM journals ORDER BY createdAt DESC LIMIT ?",
      [Number(limit)]
    );

    return rows;
  },
};

module.exports = JournalModel;