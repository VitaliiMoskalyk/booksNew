// import Icons from '../../../images/sprite/sprites.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';
import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
  DeleteButton,
} from './TrainingListItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import trainingActions from '../../../redux/training/trainingActions';

const { deleteBook } = trainingActions;

const TrainingListItem = ({ title, author, year, pages, id, index }) => {
  const dispatch = useDispatch();
  const isStarted = useSelector(state => state.training.isStarted);
  const bookNumber = useSelector(state => state.training.bookNumber);
  const isGoing = useSelector(state => state.training.isGoing);
  return (
    <TrainingListItemStyled>
      <BookIconStyled fill={index === bookNumber ? '#FF6B08' : '#B1B5C2'} />
      {/* <TrainingListItemTitle>Заповіт</TrainingListItemTitle>
      <TrainingListItemAuthor>Тарас Шевченко</TrainingListItemAuthor>
      <TrainingListItemYear>1859</TrainingListItemYear>
      <TrainingListItemPages>320</TrainingListItemPages> */}
      <TrainingListItemTitle>{title}</TrainingListItemTitle>
      <TrainingListItemAuthor>{author}</TrainingListItemAuthor>
      <TrainingListItemYear>{year}</TrainingListItemYear>
      <TrainingListItemPages>{pages}</TrainingListItemPages>

      {!isStarted ? (
        <DeleteButton
          type="button"
          onClick={() =>
            dispatch(deleteBook({ title, author, year, pages, id }))
          }
        >
          <DeleteIcon />
        </DeleteButton>
      ) : (
        <></>
      )}
    </TrainingListItemStyled>
  );
};

export default TrainingListItem;
