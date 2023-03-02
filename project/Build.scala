import sbt._
import sbt.Keys._
import sbtbuildinfo.BuildInfoKey
import sbtbuildinfo.BuildInfoKeys._

object Build {

  object CompileOptions {
    val compileOptions =
      Seq(
        "-source:future",
        "-deprecation",
//        "-Wunused:locals,privates,implicits,imports",   // New linter features available as of 3.0.0
      )
  }

  lazy val commonSettings = Seq(
    organization := "com.github.lunatech-labs",
    version := "2.0.0-SNAPSHOT",
    scalaVersion := Version.scalaVersion,
    scalacOptions ++= CompileOptions.compileOptions,
    buildInfoPackage := "cmt.version",
    Test / parallelExecution := false,
    Test / logBuffered := false,
    // ThisBuild / parallelExecution := false,
    libraryDependencies ++= Dependencies.cmtDependencies)

  lazy val commonBuildInfoKeys = Seq[BuildInfoKey](version, scalaVersion, sbtVersion)

  def buildKeysWithName(projectName: String): Seq[BuildInfoKey] =
    BuildInfoKey.map(name) { case (k, _) =>
      k -> projectName
    } +: commonBuildInfoKeys
}
