export default function AboutPage({ routeParams }) {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg'
          alt='Foto de midudev'
        />
        <p>Descripción de clon react router</p>
      </div>
      <Link to='/home'>Ir a Home</Link>
    </>
  )
}
