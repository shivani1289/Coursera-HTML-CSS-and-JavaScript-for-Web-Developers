{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17440\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // ******************************* \
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT\
// *******************************\
//\
// Module 4 Assignment Instructions.\
//\
// The idea of this assignment is to take an existing array of names\
// and then output either Hello 'Name' or Good Bye 'Name' to the console.\
// The program should say "Hello" to any name except names that start with a "J"\
// or "j", otherwise, the program should say "Good Bye". So, the final output\
// on the console should look like this:\
/*\
Hello Yaakov\
Good Bye John\
Good Bye Jen\
Good Bye Jason\
Hello Paul\
Hello Frank\
Hello Larry\
Hello Paula\
Hello Laura\
Good Bye Jim\
WARNING!!! WARNING!!!\
The code does NOT currently work! It is YOUR job to make it work\
as described in the requirements and the steps in order to complete this\
assignment.\
WARNING!!! WARNING!!!\
*/\
\
\
(function () \{\
\
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];\
\
for (var i = 0; i < names.length; i++) \{\
  var firstLetter = names[i].charAt(0).toLowerCase();\
\
  if (firstLetter === 'j') \{\
    byeSpeaker(names[i]);\
  \}\
  else \{\
    helloSpeaker(names[i]);\
  \}\
\}\
\
\})();\
\
\
}