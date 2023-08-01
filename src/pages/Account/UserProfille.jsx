import { UserContainer, UserLeft, UserRight, UserInternal, Title, LineContainer } from './UserStyle'
import { UserContentTwo } from './UserStyle'
import UserImg from '../../assets/persons/bx-user.svg'

function UserProfille() {
  return (
    <>
      <UserContainer>
        <UserContentTwo>
          <Title>Informações do Usuário</Title>
          <LineContainer/>
          <UserInternal>
            <UserLeft>
              <img src={UserImg} alt="icone de pessoa" />
            </UserLeft>
            <UserRight>

            </UserRight>
          </UserInternal>
        </UserContentTwo>
      </UserContainer >
    </>
  )
}

export default UserProfille