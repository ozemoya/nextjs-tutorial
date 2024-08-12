import { editTask } from "@/utils/actions";
export const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  console.log(task);
  return (
    <form
      action={editTask}
      className="max max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered mb-4 w-full"
      />
      <div className = "form-control">
        <label htmlFor="completed" className="cursor-pointer label">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              defaultChecked={completed}
              name="completed"
              id="completed"
              className="checkbox checkbox-primary checkbox-sm"/>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block bnt-sm">
        Update Task
        </button>
    </form>
  );
};
