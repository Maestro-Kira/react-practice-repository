import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodoItemProps {
  todo: Todo;
  fetchDetailsOfCurrent: (id: number) => void;
}

const TodoItem = ({ todo, fetchDetailsOfCurrent }: TodoItemProps) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"textSecondary"}>
          {todo.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrent(todo?.id)}
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#fff",
              opacity: "1",
            },
          }}
        >
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
