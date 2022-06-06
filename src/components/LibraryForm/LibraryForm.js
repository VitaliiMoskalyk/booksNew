import { useState } from 'react';
import {
  Form,
  Input,
  Container,
  LabelOne,
  LabelTwo,
  DivInput,
  OtherInput,
  NumberDiv,
  ButtonDiv,
  BasicDiv,
} from './LibraryForm.styled.jsx';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

function LibraryForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [pages, setPages] = useState('');

  const onChangeLibrary = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'author':
        return setAuthor(value);
      case 'date':
        return setDate(value);
      case 'pages':
        return setPages(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const state = { title, author, date, pages };

    console.log(state);
    reset();
  };

  const reset = () => {
    setTitle('');
    setAuthor('');
    setDate('');
    setPages('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DivInput>
          <BasicDiv>
            <LabelOne>
              Book title
              <Input
                onChange={onChangeLibrary}
                value={title}
                name="title"
                type="text"
                pattern="^[a-zA-Zа-яА-Я0-9]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="..."
                required
              />
            </LabelOne>
          </BasicDiv>
          <OtherInput>
            <BasicDiv>
              <LabelOne>
                Author
                <Input
                  onChange={onChangeLibrary}
                  value={author}
                  name="author"
                  type="text"
                  pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  placeholder="..."
                  required
                />
              </LabelOne>
            </BasicDiv>
            <NumberDiv>
              <LabelTwo>
                Publication date
                <Input
                  onChange={onChangeLibrary}
                  value={date}
                  name="date"
                  type="text"
                  pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
                  title="DD.MM.YYYY"
                  placeholder="..."
                  required
                />
              </LabelTwo>
              <LabelTwo className="labelLibrary">
                Amount of pages
                <Input
                  onChange={onChangeLibrary}
                  value={pages}
                  name="pages"
                  type="number"
                  pattern="[0-9]{,4}"
                  placeholder="..."
                  required
                />
              </LabelTwo>
            </NumberDiv>
          </OtherInput>
          <ButtonDiv>
            <ButtonAdd className="" />
          </ButtonDiv>
        </DivInput>
      </Form>
    </Container>
  );
}

export default LibraryForm;
