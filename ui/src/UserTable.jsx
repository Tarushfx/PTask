import React from 'react';

function UserRow(props) {
  const { user } = props;

  return (
    <tr>
      <td>{ user.id }</td>
      <td>{ user.name }</td>
      <td>{ user.age }</td>
      <td>{ user.created.toDateString() }</td>
    </tr>
  );
}


export default function UserTable(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const userRow = props.users.map(user => <UserRow key={user.id} user={user} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {userRow}
      </tbody>
    </table>
  );
}
