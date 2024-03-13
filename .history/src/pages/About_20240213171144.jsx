import { Link } from '../components/Link'
const i18n = {
  es: {
    title: 'Sobre nosotros',
    description:
      '!Hola me llamo Diego y estoy siguiendo el tutorial de mido de como crear un react router',
    button: 'Ir a Home'
  },
  en: {
    title: 'About us',
    description:
      '!Hello I am Diego and I am following the tutorial of how to create a react router',
    button: 'Go to Home'
  }
}

const usei18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function AboutPage({ routeParams }) {
  const i18n = usei18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg'
          alt='Foto de midudev'
        />
        <p>{i18n.description}</p>
        <p>{i18n.button}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
