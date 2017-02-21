-- MySQL dump 10.13  Distrib 5.5.53, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: c9
-- ------------------------------------------------------
-- Server version	5.5.53-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `loan_matches`
--

DROP TABLE IF EXISTS `loan_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loan_matches` (
  `lender_fullname` varchar(50) DEFAULT NULL,
  `borrower_fullname` varchar(50) NOT NULL DEFAULT '',
  `lender_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`borrower_fullname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan_matches`
--

LOCK TABLES `loan_matches` WRITE;
/*!40000 ALTER TABLE `loan_matches` DISABLE KEYS */;
INSERT INTO `loan_matches` VALUES ('Hagrid',' Harry','hagrid@hogwarts.wiz'),('John Doe',' Matt Mortgage','jd@gmail.com'),('Steve',' Mike Builder','steve@eng.com'),('noam','avril','nhacker95@gmail.com'),('Hagrid','Harry','hagrid@hogwarts.wiz'),('Joe','Helen',''),('ash','Jen Nobel','ash@queensu.ca'),('Nath','John Smith','asdf@gmail.com'),('michael','Mark Sprint','n'),('noam','Mike Brown','nhacker95@gmail.com'),('uh','Mr. Burns','fdf'),('Michael Chen','Nathan','mc@school.com'),('Jen','Steven','jen@rogers.com'),('brandon','The True Hacker','email@email.com'),('steve','Tim H','');
/*!40000 ALTER TABLE `loan_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loans`
--

DROP TABLE IF EXISTS `loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loans` (
  `fullname` varchar(50) NOT NULL DEFAULT '',
  `amount` int(11) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `industry` varchar(50) DEFAULT NULL,
  `interest_rate` double DEFAULT NULL,
  `duration_days` int(11) DEFAULT NULL,
  PRIMARY KEY (`fullname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loans`
--

LOCK TABLES `loans` WRITE;
/*!40000 ALTER TABLE `loans` DISABLE KEYS */;
INSERT INTO `loans` VALUES (' Amy Profit',450,'http://i.imgur.com/kadxbue.jpg','Stock Markets',5,10),(' Andrew Smile',50000,'http://i.imgur.com/NYpxTGC.png','Dentistry',3.5,36),(' Freddy Tuner',250,'http://i.imgur.com/5q4upzi.jpg','Music',10,4),(' Harry',9900,'http://i.imgur.com/LF7mBnK.png','Witchcraft and Wizardry',8.1,24),(' Helen Baker',100,'http://i.imgur.com/i1S7RF8.png','Restaurants',3.6,7),(' Jen Nobel',490,'http://i.imgur.com/Kg5TgrC.jpg','Chemistry',5.5,18),(' John Planter',500,'http://i.dailymail.co.uk/i/pix/2012/10/04/article-2212937-15584721000005DC-642_634x449.jpg','Agriculture',12.1,14),(' Mark Sprint',1500,'http://i.imgur.com/jOIRMSw.jpg','Athletics',5,9),(' Mark Zuckerberg',1000,'https://res.cloudinary.com/crunchbase-production/image/upload/v1448830269/gzcifut4c2xah95x0ewd.jpg','Software',5.6,12),(' Matt Mortgage',25000,'http://i.imgur.com/FXoukiY.jpg','Real Estate',5.6,5),(' Mike Builder',2000,'http://kindersay.com/files/images/construction-worker.png','Engineering',8.6,28),(' Mr. Burns',30000,'http://vignette1.wikia.nocookie.net/simpsons/images/b/ba/Burnsy.png/revision/latest?cb=20141024234437','Nuclear Enegery',14,10);
/*!40000 ALTER TABLE `loans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-21  3:35:09
