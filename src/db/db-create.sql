CREATE DATABASE IF NOT EXISTS `nutrition`;

USE `nutrition`;

CREATE TABLE `USER` (
	us_id	    INT NOT NULL AUTO_INCREMENT,
    us_password VARCHAR(255) NOT NULL,
    us_name     VARCHAR(50) NOT NULL,
  	us_mail     VARCHAR(50)	NOT NULL,
    us_age      INT NOT NULL,
    us_weight   DECIMAL(4,1) NOT NULL,
    us_height   INT NOT NULL,
    PRIMARY KEY (us_id)
);

CREATE TABLE `RECIPE` (
    re_id               INT NOT NULL AUTO_INCREMENT,
    us_id               INT NOT NULL,
    re_name             VARCHAR(50) NOT NULL,
    re_person_quantity  INT NOT NULL,
    PRIMARY KEY (re_id),
    FOREIGN KEY (us_id) REFERENCES USER(us_id)
);

CREATE TABLE `ALIMENT` (
    al_id       INT NOT NULL AUTO_INCREMENT,
    al_name     VARCHAR(50) NOT NULL,
    al_barcode  VARCHAR(255),
    al_hydrates DECIMAL(4,1) NOT NULL,
    al_proteins DECIMAL(4,1) NOT NULL,
    al_fat      DECIMAL(4,1) NOT NULL,
    al_calcium  INT NOT NULL,
    PRIMARY KEY (al_id)
);

CREATE TABLE `UNIT`(
    un_id INT NOT NULL AUTO_INCREMENT,
    un_name VARCHAR(50),
    PRIMARY KEY (un_id)
);

CREATE TABLE `RECIPE_ALIMENT` (
    al_id INT NOT NULL,
    re_id INT NOT NULL,
    quantity INT NOT NULL,
    un_id INT NOT NULL,
    PRIMARY KEY (al_id, re_id),
    FOREIGN KEY (al_id) REFERENCES ALIMENT(al_id),
    FOREIGN KEY (re_id) REFERENCES RECIPE(re_id),
    FOREIGN KEY (un_id) REFERENCES UNIT(un_id)
);

CREATE TABLE `ALIMENT_UNIT` (
    al_id INT NOT NULL,
    un_id  INT NOT NULL,
    grams_per_unit INT NOT NULL,
    PRIMARY KEY (al_id, un_id),
    FOREIGN KEY (al_id) REFERENCES ALIMENT(al_id),
    FOREIGN KEY (un_id) REFERENCES UNIT(un_id)
);

CREATE TABLE `MEAL_TYPE` (
    mety_id INT NOT NULL AUTO_INCREMENT,
    mety_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (mety_id)
);

CREATE TABLE `MEAL`(
    me_id INT NOT NULL AUTO_INCREMENT,
    us_id INT NOT NULL,
    mety_id INT NOT NULL,
    me_date DATE NOT NULL,
    PRIMARY KEY (me_id),
    FOREIGN KEY (us_id) REFERENCES USER(us_id),
    FOREIGN KEY (mety_id) REFERENCES MEAL_TYPE(mety_id)
);

CREATE TABLE `MEAL_RECIPE`(
    me_id INT NOT NULL,
    re_id INT NOT NULL,
    PRIMARY KEY (me_id, re_id),
    FOREIGN KEY (me_id) REFERENCES MEAL(me_id),
    FOREIGN KEY (re_id) REFERENCES RECIPE(re_id)
);

CREATE TABLE `MEAL_ALIMENT` (
    al_id INT NOT NULL,
    me_id INT NOT NULL,
    quantity INT NOT NULL,
    un_id INT NOT NULL,
    PRIMARY KEY (al_id, me_id),
    FOREIGN KEY (al_id) REFERENCES ALIMENT(al_id),
    FOREIGN KEY (me_id) REFERENCES MEAL(me_id),
    FOREIGN KEY (un_id) REFERENCES UNIT(un_id)
);