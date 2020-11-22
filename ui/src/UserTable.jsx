import React from 'react';

function UserRow(props) {
  const { user } = props;

  return (
    <tr>
      <td>{ user.name }</td>
      <td>{ user.email }</td>
      <td>{ user.password }</td>
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
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {userRow}
      </tbody>
    </table>
  );
}
