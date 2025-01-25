import type { Route } from './auth/+types/login'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Register() {
  return <div>Register</div>
}
