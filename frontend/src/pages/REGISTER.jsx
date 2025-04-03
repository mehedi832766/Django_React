import Form from '../components/Form'

function REGISTER() {
  return (
    <div className='h-dvh bg-cyan-950 flex items-center justify-center'> 
    <Form route="/api/user/register/" method="register"/>
    </div>
  )
}

export default REGISTER