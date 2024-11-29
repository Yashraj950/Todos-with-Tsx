import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProps = {
    children : ReactNode
}

export type Todo = {
    id: string;
    task : string;
    completed: boolean;
    createdAt: Date; 

}
export type TodosContext = {
    todos:Todo[];
    handleAddToDo: (task: string)=> void;
}
export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:TodosProviderProps)=> {
const [todos, setTodos ]= useState<Todo[]>([])

    const handleAddToDo = (task:string)=> {
        setTodos((prev) => {
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt: new Date()
                },
                ...prev
            ]

            return newTodos
        })

    }
    return<todosContext.Provider value={{todos, handleAddToDo}}>
        {children}
    </todosContext.Provider>

}


export const useTodos = () => {
    const todoConsumer = useContext(todosContext);
    if(!todoConsumer){
        throw new Error("userTodos used outside of Provider")
    }
 return todoConsumer;
}