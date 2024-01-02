import React from 'react';
import './style.css';

const USER_DATA = {
  name: 'DJ Rajkhowa',
  img: 'https://avatars.githubusercontent.com/u/2480220?s=400&u=7737ef7a910c97a14a25f1ebac474d99fa467a02&v=4',
  handle: 'djdev',
};

function Avatar({ name, img }) {
  return <img alt={name} src={img} />;
}

function Name({ name }) {
  return <h4>{name}</h4>;
}

function Handle({ handle }) {
  return <p>@{handle}</p>;
}

function Badge({ user, style }) {
  return (
    <div style={style}>
      <Avatar name={user.name} img={user.img} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />

        <button onClick={() => alert('Friend added!')}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={USER_DATA}
      style={{
        width: 300,
        margin: '0 auto',
        border: '1px solid var(--beige-10)',
        borderRadius: 8,
        backgroundColor: 'var(--charcoal)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center',
      }}
    />
  );
}
