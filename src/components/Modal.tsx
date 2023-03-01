interface ModalProps {
  setModal: any;
  title: string;
  description: string;
  completed: boolean;
}

const Modal: React.FC<ModalProps> = ({
  setModal,
  title,
  description,
  completed,
}) => {
  const handleChange = () => {
    console.log(
      "there should be an event handler, but this was not in the task"
    );
  };
  const handleChangeTask = () => {
    console.log(
      "there should be an event handler, but this was not in the task"
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99,
        backgroundColor: "lightgray",
        width: "320px",
        height: "500px",
        top: "45px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        gap: "30px",
        alignItems: "flex-start",
        border: "1px grey solid",
      }}
    >
      <h2 style={{ alignSelf: "center", textAlign: "center" }}>{title}</h2>
      <span>Description:</span>
      <textarea
        spellCheck="false"
        value={description}
        onChange={handleChangeTask}
        title="description"
        style={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "lightgray",
          border: "none",
        }}
      ></textarea>
      <div>
        <span>Status:</span>
        <input
          title="checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleChange}
        />
      </div>
      <button onClick={() => setModal(false)}>Close</button>
    </div>
  );
};

export default Modal;
