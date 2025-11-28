-- schema.sql : bech yecreatiw el base de données
CREATE DATABASE IF NOT EXISTS ds1_isids;
USE ds1_isids;

-- Table ta3 utilisateurs
CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  login VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user','manager') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table ta3 projets
CREATE TABLE IF NOT EXISTS projects (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  proprietaire_id INT UNSIGNED NOT NULL,
  statut VARCHAR(50) DEFAULT 'en cours',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (proprietaire_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table ta3 taches
CREATE TABLE IF NOT EXISTS tasks (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  description TEXT,
  statut ENUM('todo','doing','done') DEFAULT 'todo',
  deadline DATETIME NULL,
  projet_id INT UNSIGNED NOT NULL,
  assigne_id INT UNSIGNED NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (projet_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY (assigne_id) REFERENCES users(id) ON DELETE SET NULL
);
