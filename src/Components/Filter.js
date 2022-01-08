import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/contacts/contacts-actions";

export default function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label filter="true">
      Фильтр
      <input
        type="text"
        name="filter"
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        value={filter}
      ></input>
    </label>
  );
}
