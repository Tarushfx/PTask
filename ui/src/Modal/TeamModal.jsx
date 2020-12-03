import React, {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ModalInput from "../components/modalInput.jsx";

const CreateTeam = (props) => {
  return (
    <div className="modal-body" id="createTeam">
      <h5 style={{textAlign: "center"}}> Create A Team </h5>
      <form name="createTeam">
        <ModalInput
          mode="input"
          placeholder="Team ID"
          type="text"
          id="teamID"
          name="teamID"
          key="title"
          iconType="title"
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
  return (
    <div className="modal-body" id="joinTeam">
      <h5 style={{textAlign: "center"}}>Join a Team</h5>
      <form name="joinTeam">
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
            >
              &times;
            </button>
          </div>
          {teamState === '' ? <ButtonGroup showCreateTeam={() => StateUpdate('createTeam')}
                                           showJoinTeam={() => StateUpdate('joinTeam')}/> : null}
          {teamState === 'createTeam' ? <CreateTeam backToDefaults={() => StateUpdate('')}/> : null}
          {teamState === 'joinTeam' ? <JoinTeam backToDefaults={() => StateUpdate('')}/> : null}

        </div>
      </div>
    </div>
  );
}

export default TeamModal;