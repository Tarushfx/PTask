const mongoose = require('mongoose');
const { TeamSchema } = require('../models/teams.model.js');
const { UserSchema} = require('../models/user.model.js')

const Team = mongoose.model('teams', TeamSchema);
const User = mongoose.model('users', UserSchema)

async function AddTeam(_, { team }){
  console.log(team);
  const savedUser = await Team.create(team);
  if(savedUser) return savedUser;
  else return null;
}

// mutation teamAdd($team: TeamInput!) {
//   TeamAdd(team:$team){
//     _id title description
//   }
// }

async function joinATeam(_, { team }){
  const foundUser = await User.findOne({_id: team._id});
  const foundTeam = await Team.findOne({_id: team.team_id });
  if(foundTeam){
    foundUser.teams.push(foundTeam);
    await User.create(foundUser);
    return true;
  }
  else {
    return false;
  }
}

// mutation teamJoin($team: TeamJoin!) {
//   JoinTeam(team: $team)
// }

module.exports = { AddTeam, joinATeam };
