create table users(
	pageUserName varchar(50) not null,
	userName varchar(50) not null,
	lastName1 varchar(50) not null,
	lastName2 varchar(50) not null,
	password varchar(50) not null,
	email varchar(50) not null,
	phoneNumber varchar(50) not null,
	areaCode varchar(50) not null,

	constraint primary_key primary key (pageUserName)
);
