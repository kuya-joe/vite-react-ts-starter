// TODO: use react-bulma-components import { Button } from 'react-bulma-components';

export default function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <input name="fullname" />
        <input name="email" />
        <input type="password" />
        <button type="submit" color="primary">
          Join
        </button>
      </form>
    </div>
  )
}
