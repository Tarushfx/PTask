import React, {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ModalInput from "../components/modalInput.jsx";
import graphQLFetch from "../graphQLFetch";
import authservice from "../../services/authservice";
import jwt from "jsonwebtoken"

const CreateTeam = (props) => {

  async function joinTeam(team) {
    const query = `mutation teamJoin($team: TeamJoin!) {
      JoinTeam(team: $team)
    }`;
  
    const data = await graphQLFetch(query, {team: team})
  }

  async function createTeam(team) {
    const query = `mutation teamAdd($team: TeamInput!) {
      TeamAdd(team:$team){
        _id title description
      }
    }`;

    const data = await graphQLFetch(query, {team: team});

    return data.TeamAdd;
  }

  async function handleSubmitCreateTeam(e) {
    e.preventDefault();

    const form = document.forms.createTeam;

    const team = {
      title: form.teamTitle.value,
      description: form.teamTitle.value,
    };

    const status = await createTeam(team);

    const id = jwt.decode(authservice.getToken())._id;
    const addTeam = {
      _id: id,
      team_id: status._id,
    }

    await joinTeam(addTeam)
  
    await props.loadData();
    if (status) {
      document.getElementById("successContent").innerHTML = "Teams created !!! = Use this code to invite others  " + String(status._id);
      document.getElementById("successButton").click();
      document.getElementById("teamModalClose").click();
    } else {
      document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
      document.getElementById("errorButton").click();
      document.getElementById("teamModalClose").click();
    }

  }

  return (
    <div className="modal-body" id="createTeam">
      <h5 style={{textAlign: "center"}}> Create A Team </h5>
      <form name="createTeam" onSubmit={handleSubmitCreateTeam}>
        <ModalInput
          mode="input"
          placeholder="Title"
          type="text"
          id="teamTitle"
          name="teamTitle"
          key="title"
          iconType="title"team2
        />
        <ModalInput
          mode="textarea"
          placeholder="Team Description"
          type="text"
          id="teamDesc"
          name="teamDesc"
          key="desc"
        />

        <div className="form-group row mt-2">
          <button
            type="button"
            className="add-button ml-2"
            onClick={props.backToDefaults}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="add-button ml-2"
            id="teamCreateSubmit"
          >
            Create Team
          </button>
        </div>
      </form>
    </div>
  );
}

const JoinTeam = (props) => {

  async function joinTeam(team) {
    const query = `mutation teamJoin($team: TeamJoin!) {
    JoinTeam(team: $team)
  }`;

    const data = await graphQLFetch(query, {team: team})

    return data.JoinTeam;
  }

  async function handleSubmitJoinTeam(e) {
    e.preventDefault();
    const form = document.forms.joinTeam;

    const id = jwt.decode(authservice.getToken())._id;

    const team = {
      _id: id,
      team_id: form.joinTeamID.value,
    };

    console.log(team);
    const status = await joinTeam(team);
    await props.loadData()
    if (status) {
      document.getElementById("successContent").innerHTML = "Joined the team !!!";
      document.getElementById("successButton").click();
      document.getElementById("teamModalClose").click();

    } else {
      document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
      document.getElementById("errorButton").click();
      document.getElementById("teamModalClose").click();
    }
  }

  return (
    <div className="modal-body" id="joinTeam">
      <h5 style={{textAlign: "center"}}>Join a Team</h5>
      <form name="joinTeam" onSubmit={handleSubmitJoinTeam}>
        <ModalInput
          mode="input"
          placeholder="Team ID"
          type="text"
          id="joinTeamID"
          name="joinTeamID"
          key="title"
          iconType="title"
        />
        <div className="form-group row mt-2">
          <button
            type="button"
            className="add-button ml-2"
            onClick={props.backToDefaults}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="add-button ml-2"
            id="teamJoinSubmit"
          >
            Join Team
          </button>
        </div>
      </form>
    </div>
  )
}

const ButtonGroup = (props) => {
  return (
    <div className="modal-body" id="buttonGroup">
      <div className="form-group row">
        <button
          type="button"
          className="add-button ml-4"
          data-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="add-button ml-2"
          onClick={props.showCreateTeam}
        >
          Create A Team
        </button>
        <button
          type="submit"
          className="add-button ml-2"
          onClick={props.showJoinTeam}
        >
          Join A Team
        </button>
      </div>
    </div>
  );
}

const TeamModal = (props) => {

  const [teamState, StateUpdate] = useState('');

  return (
    <div id="teamModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Teams</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              id="teamModalClose"
              onClick={() => StateUpdate('')}
            >
              &times;
            </button>
          </div>
          {teamState === '' ? <ButtonGroup showCreateTeam={() => StateUpdate('createTeam')}
                                           showJoinTeam={() => StateUpdate('joinTeam')}/> : null}
          {teamState === 'createTeam' ? <CreateTeam backToDefaults={() => StateUpdate('')} loadData = {props.loadData}/> : null}
          {teamState === 'joinTeam' ? <JoinTeam backToDefaults={() => StateUpdate('')} loadData={props.loadData}/> : null}

        </div>
      </div>
    </div>
  );
}

export default TeamModal;