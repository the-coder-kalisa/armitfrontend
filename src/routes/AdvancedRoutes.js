import { lazy } from 'react'

// project imports
import Loadable from 'ui-component/loading/Loadable'
import MinimalLayout from 'layout/MinimalLayout'


// canvas routing
const HomePage = Loadable(lazy(() => import('views/advanced/pages/MainPage')))
const FlowPage = Loadable(lazy(() => import('views/advanced/pages/FlowPage')))

// ==============================|| CANVAS ROUTING ||============================== //

const ChatbotRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/advanced',
            element: <HomePage />
        },
        {
            path: '/advanced/*',
            element: <HomePage />
        },
        {
            path: '/flow/:id/',
            element: <FlowPage />
        }
    ]
}

export default ChatbotRoutes
