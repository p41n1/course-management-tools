package com.lunatech.cmt.client

/** Copyright 2022 - Eric Loots - eric.loots@gmail.com / Trevor Burton-McCreadie - trevor@thinkmorestupidless.com
  *
  * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
  * the License. You may obtain a copy of the License at
  *
  * http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
  * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  *
  * See the License for the specific language governing permissions and limitations under the License.
  */

import caseapp.core.app.CommandsEntryPoint
import com.lunatech.cmt.client.command.{
  GotoExercise,
  GotoFirstExercise,
  Install,
  ListExercises,
  ListSavedStates,
  NextExercise,
  PreviousExercise,
  PullSolution,
  PullTemplate,
  RestoreState,
  SaveState,
  SetCurrentCourse,
  Version
}

object Main extends CommandsEntryPoint:
  override def progName = "cmtc"
  override def commands =
    Seq(
      GotoExercise.command,
      GotoFirstExercise.command,
      Install.command,
      ListExercises.command,
      ListSavedStates.command,
      NextExercise.command,
      PreviousExercise.command,
      PullSolution.command,
      PullTemplate.command,
      RestoreState.command,
      SaveState.command,
      SetCurrentCourse.command,
      Version.command)
