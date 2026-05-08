// controllers/dashboardController.js
// Aggregates stats, recent journals and events for the dashboard

const JournalModel = require("../models/journalModel");
const EventModel = require("../models/eventModel");

const getDashboard = async (req, res) => {
  try {
    // Run all queries in parallel for performance
    const [
      totalJournals,
      totalEvents,
      recentJournals,
      recentEvents,
    ] = await Promise.all([
      JournalModel.getCount(),
      EventModel.getCount(),
      JournalModel.getRecent(5),
      EventModel.getRecent(5),
    ]);

    return res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully.",
      stats: {
        totalJournals,
        totalEvents,
      },
      recentJournals,
      recentEvents,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching dashboard data.",
    });
  }
};

module.exports = { getDashboard };
