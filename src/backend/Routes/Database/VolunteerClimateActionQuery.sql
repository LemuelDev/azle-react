CREATE DATABASE volunteer_climate_action_database;
USE volunteer_climate_action_database;
CREATE TABLE adminTable(
	admin_id int primary key auto_increment,
    username varchar(255),
    password varchar(255)
);
INSERT INTO adminTable(admin_id, username, password) VALUES
	(1, "Admin", 123);

CREATE TABLE events (
	event_id bigint primary key auto_increment,
    event_name varchar(255),
    event_details varchar(255),
    event_date date,
    event_time varchar(255),
    event_address varchar(255)
);

CREATE TABLE volunteers (
	volunteer_id int primary key auto_increment,
    firstname varchar(255),
    lastname varchar(255),
    middlename varchar(255),
    extensionname varchar(255),
    contact_name varchar(255),
    gender varchar(255),
    age varchar(255),
    address varchar(255),
    event_id bigint,
    constraint fk_volunteer_event foreign key (event_id) REFERENCES events(event_id)
);

CREATE TABLE events_reports(
	event_reports_id int primary key auto_increment,
    report_description varchar(255),
    report_img blob,
    event_id bigint,
    constraint fk_reports_event foreign key (event_id) REFERENCES events(event_id)
);