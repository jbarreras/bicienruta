name := """bicienruta"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  javaJdbc,
  javaJpa,
  cache,
  javaWs,
  "org.hibernate" % "hibernate-entitymanager" % "3.6.9.Final",
  "org.hibernate" % "hibernate-core" % "3.6.9.Final",
  "org.postgresql" % "postgresql" % "9.4.1209.jre7"
)
