import Field from "../Field/Field.jsx";
import {useContext} from "react";
import {TaskContext} from "../../context/TasksContext.jsx";

const SearchTaskForm = (props) => {
  const { styles } = props
  const {
    searchQuery,
    setSearchQuery
  } = useContext(TaskContext)

  return (
      <form className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Field
          className={styles.field}
          label="Search task"
          id="search-task"
          type="search"
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
        />
      </form>
  )
}

export default SearchTaskForm