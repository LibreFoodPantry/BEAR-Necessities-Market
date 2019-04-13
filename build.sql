-- CREATE DATABASE payments;
DROP DATABASE IF EXISTS bear_necessities_database;
CREATE DATABASE bear_necessities_database;

-- CREATE DATABASE test_payments;
DROP DATABASE IF EXISTS development;
CREATE DATABASE development;

-- CREATE DATABASE reporting;
DROP DATABASE IF EXISTS test_database;
CREATE DATABASE test_database;

-- CREATE USER reporting;
CREATE USER IF NOT EXISTS 'testuser'
IDENTIFIED BY 'secretpassword'
PASSWORD EXPIRE NEVER;

-- GRANT ALL ON reporting TO reporting
GRANT ALL ON reporting.* TO 'testuser';

USE test_database;

-- Dumping structure for table payments.chargebacks
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `authenticated` BOOLEAN NOT NULL DEFAULT 0,
  `registered_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;
