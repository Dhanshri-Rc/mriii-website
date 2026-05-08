// // src/api/dashboardApi.js
// import axiosInstance from "./axiosInstance";

// // Fetch all dashboard stats + recent data
// export const getDashboardData = async () => {
//   const response = await axiosInstance.get("/dashboard");
//   return response.data;
// };


// src/api/dashboardApi.js
import axiosInstance from "./axiosInstance";

// Fetch all dashboard stats + graph + recent data
export const getDashboardData = async () => {
  try {
    const response = await axiosInstance.get("/dashboard");

    // always return safe structure
    return {
      success: true,
      ...response.data,
    };
  } catch (error) {
    console.error("Dashboard API Error:", error);

    return {
      success: false,
      stats: {
        totalJournals: 0,
        totalEvents: 0,
        totalMembers: 0,
        memberships: 0,
      },
      graphData: {
        labels: [],
        journals: [],
        events: [],
      },
      recentJournals: [],
      recentEvents: [],
    };
  }
};