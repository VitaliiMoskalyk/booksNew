import {
  Container,
  UserTitle,
  Title,
  ButtonStyled,
  ContainerButton,
} from './Logout.styled';

function Logout({ onClose }) {
  const user = {
    name: 'Taras Bulba',
    avatar: null,
  };
  //   const navigate = useNavigate();
  //     const [logout] = useLogoutMutation(token);

  // const logoutUser = token => {
  //   console.log(token);
  //   togleModal();
  //       logout(token);
  //       dispatch(logAct(false));
  //       dispatch(tokenAct(''));
  //       toast.success('You are logged out.');
  //       navigate('/login');
  // };
  return (
    <Container>
      <UserTitle>{user.name}!</UserTitle>

      <Title>
        Якщо вивийдетез програми, не збереженні дані будуть втрачені
      </Title>
      <ContainerButton>
        <li>
          <ButtonStyled type="button" onClick={onClose}>
            Відміна
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled type="button" autoFocus={true}>
            Вийти
          </ButtonStyled>
        </li>
      </ContainerButton>
    </Container>
  );
}

export default Logout;
