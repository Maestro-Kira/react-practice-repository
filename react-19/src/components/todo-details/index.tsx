import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Todo } from "../../App";

type TodoDetails = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodoDetailsProps = {
  todoDetails: TodoDetails | null;
  openDialogue: boolean;
  setOpenDialogue: React.Dispatch<React.SetStateAction<boolean>>;
  setToDoDetails: React.Dispatch<React.SetStateAction<Todo | null>>;
};

const TodoDetails = ({
  todoDetails,
  openDialogue,
  setOpenDialogue,
  setToDoDetails,
}: TodoDetailsProps) => {
  return (
    <>
      <Dialog
        onClose={() => {
          setToDoDetails(null);
          setOpenDialogue(false);
        }}
        open={openDialogue}
      >
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialogue(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default TodoDetails;
