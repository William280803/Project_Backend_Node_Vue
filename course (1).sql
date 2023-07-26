-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Jan 2023 pada 09.21
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_lists`
--

CREATE TABLE `course_lists` (
  `course_id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_detail` varchar(255) NOT NULL,
  `course_price` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `course_lists`
--

INSERT INTO `course_lists` (`course_id`, `author`, `course_name`, `course_detail`, `course_price`, `createdAt`, `updatedAt`) VALUES
(1, 'William', 'Basic Python With William', 'Pasti Bisa', '10.000', '2023-01-16 21:55:49', '2023-01-16 21:55:49'),
(2, 'William', 'Cloud Coumputing With William', 'Cloud computing is a field of delivering a variety of services over the internet, Cloud computing courses can vary in cost widely depending on the provider, the level and duration of the course, with a wide range of options from online providers starting ', '300.000\r\n', '2023-01-16 21:55:49', '2023-01-16 21:55:49'),
(5, 'Wilsen', 'How To Be a Better Person', 'Want to improve yourself and become a better person? Look no further! Our program teaches practical strategies and techniques for personal growth and self-improvement. Learn how to develop empathy, practice kindness, and build strong relationships. Take t', '300000', '2023-01-26 18:30:23', '2023-01-26 18:30:23'),
(6, 'Divony Wesly', 'Law Of Psycoloy', 'Unlock the secrets of the mind and transform your life with our \"Law of Psychology\" program. Discover how to harness the power of your thoughts and emotions to achieve your goals and live a fulfilling life. Learn about the laws that govern the human mind ', '120000', '2023-01-26 18:33:18', '2023-01-26 18:33:18'),
(10, '2', '2', '', '2', '2023-01-28 19:36:27', '2023-01-28 19:51:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `events`
--

INSERT INTO `events` (`event_id`, `title`, `start`, `end`, `createdAt`, `updatedAt`) VALUES
(1, 'Bootcamp Python', '2023-01-26', '2023-01-31', '2023-01-27 23:07:06', '2023-01-27 23:07:06'),
(7, 'Literasi Bangsa', '2023-01-28', '2023-01-29', '2023-01-29 07:13:10', '2023-01-29 07:13:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `takes`
--

CREATE TABLE `takes` (
  `take_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `takes`
--

INSERT INTO `takes` (`take_id`, `user_id`, `course_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-01-17 15:10:49', '2023-01-17 15:10:49'),
(3, 1, 2, '2023-01-26 18:15:14', '2023-01-26 18:15:14'),
(4, 1, 6, '2023-01-26 18:33:25', '2023-01-26 18:33:25'),
(5, 1, 5, '2023-01-26 18:33:53', '2023-01-26 18:33:53'),
(6, 2, 1, '2023-01-27 16:05:45', '2023-01-27 16:05:45'),
(7, 3, 2, '2023-01-28 06:49:10', '2023-01-28 06:49:10'),
(8, 3, 2, '2023-01-28 16:10:36', '2023-01-28 16:10:36'),
(9, 3, 1, '2023-01-28 16:19:44', '2023-01-28 16:19:44'),
(10, 3, 6, '2023-01-28 16:22:24', '2023-01-28 16:22:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `NoHP` varchar(10) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinytext NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `NoHP`, `Email`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '0823913972', 'william@gmail.com', 'William', '$2b$10$33/d/aOr8/lL7J8Nn.cp3.YOXKTumxm01IN/FGsWWHTsO/uU3APx6', '1', '2023-01-04 23:10:49', '2023-01-28 19:19:47'),
(2, '0856363452', 'wilsen@gmail.com', 'Wilsen', '$2b$10$2NTsPVsprinni3AHq.T/hOfVkDiFRJiAjCAQxlwGTakzo54D2GM1q', '1', '2023-01-26 04:35:14', '2023-01-26 04:35:14'),
(3, '0812312335', 'Divoni@gmail.com', 'Divoni Wesly', '$2b$10$GqRSUaL2tDRP.Uow4IYW5Oxx2BRVTiLyb4isGEa2Cs8aGgy8KpOES', '1', '2023-01-26 04:37:07', '2023-01-26 04:37:07');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `course_lists`
--
ALTER TABLE `course_lists`
  ADD PRIMARY KEY (`course_id`);

--
-- Indeks untuk tabel `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indeks untuk tabel `takes`
--
ALTER TABLE `takes`
  ADD PRIMARY KEY (`take_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `course_lists`
--
ALTER TABLE `course_lists`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `takes`
--
ALTER TABLE `takes`
  MODIFY `take_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `takes`
--
ALTER TABLE `takes`
  ADD CONSTRAINT `takes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `takes_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course_lists` (`course_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
