import { TodoProvider } from "../../components/ContextExample/Context";
import { TodoForm } from "../../components/ContextExample/Context/TodoForm";
import { TodoList } from "../../components/ContextExample/Context/TodoList";

export const Context2 = () => {
    return (
        <TodoProvider>
            <TodoForm />
            <TodoList />
        </TodoProvider>
    );
}