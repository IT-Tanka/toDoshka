interface NewTodoFormProps {
  title: string;
  description: string;
  emptyDescription: boolean;
  emptyTitle: boolean;
  updateTitle: (str: string) => void;
  updateDescription: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({
  emptyTitle,
  emptyDescription,
  title,
  description,
  updateTitle,
  updateDescription,
  handleAction,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <label>
        Title:
        <div>
          <input
            placeholder="Enter title"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
            style={
              emptyTitle ? { borderColor: "red" } : { borderColor: "grey" }
            }
          />
          {emptyTitle && (
            <div style={{ position: "absolute", color: "red" }}>
              This field is empty
            </div>
          )}
        </div>
      </label>
      <label>
        Description:
        <div>
          <input
            placeholder="Enter description"
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
            style={
              emptyDescription
                ? { borderColor: "red" }
                : { borderColor: "grey" }
            }
          />
          {emptyDescription && (
            <div style={{ position: "absolute", color: "red" }}>
              This field is empty
            </div>
          )}
        </div>
      </label>
      <button
        style={{ height: "25px", alignSelf: "end" }}
        onClick={handleAction}
      >
        Create
      </button>
    </div>
  );
};

export default NewTodoForm;
