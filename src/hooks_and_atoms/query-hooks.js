// to create react-query custom hooks, refer to example hook

import { useQuery } from "react-query"

export const useJsonPlaceholder = () => {
    return useQuery("jsonPlaceholder", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        return response.json()
    })
}