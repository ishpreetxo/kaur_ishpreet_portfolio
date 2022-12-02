-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 02, 2022 at 07:35 AM
-- Server version: 10.6.10-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u928855400_db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `ik_portfolio`
--

CREATE TABLE `ik_portfolio` (
  `id` int(11) NOT NULL,
  `project_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_info` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `built_with` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_image` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ik_portfolio`
--

INSERT INTO `ik_portfolio` (`id`, `project_name`, `project_info`, `built_with`, `project_image`) VALUES
(1, ' Roku Build', 'The Flashback app is part of the Roku streaming service. Subscribers can use this app to access three separate flashback features; movies, television (tv) and music. Each of these three sections are comprised exclusively of entertainment from 1950, 1960, 1970, 1980, and 1990 respectively.', 'Prototyping Stage, Adobe XD', 'roku.svg'),
(2, 'Hackathon - Brand Built', 'HouseCom™ ThermoSecurity™ System is a fully digital, hardwired, and wireless (WiFi,Bluetooth) enabled home personal and secure environment control system. It was a group project which was completed within 24 hours.', 'Cinema4d, Photoshop, Illustrator', 'hackathonsvg.svg'),
(3, 'Brand-Mashup', 'For this brand mashup, we were given two brands which are completely different from one another. My project partner and I got Heineken Beer and Pampers Diapers. The best mashup we could make was Beer for Babies and Beer for Pregnant Women. Through our branding, we showed how and why Pampers Beer is a great drink for babies.', 'Adobe Photoshop, Cinema 4D, After Effects', 'brand-mashup.svg'),
(4, 'Make-Up Brand Built', 'For This Brand We were given a name for make-up brand and we had to create Complete branding for the Brand Name Seven from Scratch, My role in this Project was to design overall branding and It\'s Commercial Videos.', 'Adobe Photoshop, Cinema 4D, After Effects', 'makeup.svg'),
(5, '3D Morphing Commericial', 'For This Project, we were given free choice of choosing any theme for the commerical ad and create a 3d product transiting commerical out of it, For this project I came up with Toy store Theme, in which the 3D Toys model will be changing as per the time frames and will be replacing a new model.', 'Cinema 4D And After-Effects', 'morphing.svg'),
(6, 'SportsNet - Video Info', 'As an end of term project, we were asked to create a video intro that could be used for a sports network. All the modelling, texturing, and animation was done by myself in Cinema4D. I edited the video in Premier Pro and After Effects.', 'Cinema 4D, After-Effects', 'sportsnet.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ik_portfolio`
--
ALTER TABLE `ik_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ik_portfolio`
--
ALTER TABLE `ik_portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
