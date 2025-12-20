import Home from "./pages/home"
import { Route, Routes } from "react-router"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
