-- ============================================================
-- MRI India Admin - MySQL Database Schema
-- Database: journal_admin
-- ============================================================

-- Step 1: Create and select database
CREATE DATABASE IF NOT EXISTS journal_admin
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE journal_admin;

-- ============================================================
-- TABLE: journals
-- ============================================================
CREATE TABLE IF NOT EXISTS journals (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  title        VARCHAR(255)  NOT NULL,
  description  TEXT,
  image        VARCHAR(255),                -- stored filename
  pdf          VARCHAR(255),                -- stored filename
  author       VARCHAR(255),
  publishDate  DATE,
  eissn        VARCHAR(50)   NOT NULL,
  pissn        VARCHAR(50),
  journalUrl   VARCHAR(500),
  publisher    VARCHAR(255),
  frequency    VARCHAR(100),
  subjectArea  VARCHAR(255),
  status       ENUM('Published', 'Draft') DEFAULT 'Published',
  createdAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- TABLE: events
-- ============================================================
CREATE TABLE IF NOT EXISTS events (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  title            VARCHAR(255) NOT NULL,
  description      TEXT,
  image            VARCHAR(255),            -- stored filename
  date             DATE         NOT NULL,
  location         VARCHAR(500),
  organizer        VARCHAR(255),
  eventType        VARCHAR(100),            -- e.g. Conference, Seminar, Workshop
  category         VARCHAR(100),
  shortDescription VARCHAR(500),
  createdAt        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt        TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- SAMPLE DATA: journals
-- ============================================================
INSERT INTO journals
  (title, description, eissn, pissn, author, publishDate, publisher, frequency, subjectArea, status)
VALUES
  (
    'Journal of Indian Mathematics',
    'A leading journal covering pure and applied mathematics research from Indian mathematicians.',
    '2582-1299', '0970-3773', 'MRI Editorial Board', '2025-01-15',
    'Mathematical Research Institute of India', 'Quarterly', 'Mathematics', 'Published'
  ),
  (
    'Proceedings of MRI India',
    'Annual proceedings featuring research papers presented at MRI conferences.',
    '2321-2406', NULL, 'MRI Editorial Board', '2025-03-20',
    'Mathematical Research Institute of India', 'Yearly', 'Mathematics', 'Published'
  ),
  (
    'Annals of Mathematical Sciences',
    'Covers a broad spectrum of mathematical sciences including statistics and operations research.',
    '2582-1302', NULL, 'Dr. Ananya Sharma', '2025-02-10',
    'MRI Publications', 'Monthly', 'Mathematics', 'Published'
  ),
  (
    'Indian Journal of Applied Mathematics',
    'Focuses on applications of mathematics in engineering, physics and computer science.',
    '2394-1558', NULL, 'Prof. R. Krishnamurthy', '2025-04-01',
    'MRI Publications', 'Quarterly', 'Applied Mathematics', 'Draft'
  ),
  (
    'Computational Mathematics Review',
    'Dedicated to numerical analysis, computational methods and algorithms.',
    '2582-1302', NULL, 'Dr. Vikram Nair', '2025-04-15',
    'MRI Publications', 'Quarterly', 'Computer Science', 'Draft'
  );

-- ============================================================
-- SAMPLE DATA: events
-- ============================================================
INSERT INTO events
  (title, description, date, location, organizer, eventType, category, shortDescription)
VALUES
  (
    'International Conference on Number Theory and its Applications',
    'A four-day international conference bringing together leading mathematicians to discuss advances in number theory and its applications in cryptography, coding theory and more.',
    '2025-06-15', 'Bengaluru, India',
    'Mathematical Research Institute of India', 'Conference', 'Mathematics',
    'Leading conference on number theory - 15 to 18 June 2025'
  ),
  (
    'MRI Colloquium Talk by Prof. Manjul Bhargava',
    'An online colloquium talk by Fields Medal winner Prof. Manjul Bhargava on recent developments in algebraic number theory.',
    '2025-06-22', 'Online (Zoom)',
    'MRI India', 'Seminar', 'Mathematics',
    'Online seminar - 22 June 2025 at 5:00 PM IST'
  ),
  (
    'Workshop on Algebraic Topology and its Applications',
    'A five-day workshop covering foundational and advanced topics in algebraic topology with applications to data science.',
    '2025-07-05', 'TIFR, Mumbai, India',
    'TIFR & MRI India', 'Workshop', 'Mathematics',
    'Hands-on workshop on algebraic topology - 5 to 9 July 2025'
  );

-- ============================================================
-- VERIFY INSERTS
-- ============================================================
SELECT 'journals' AS table_name, COUNT(*) AS record_count FROM journals
UNION ALL
SELECT 'events', COUNT(*) FROM events;
