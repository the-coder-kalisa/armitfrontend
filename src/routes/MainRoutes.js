import { lazy } from 'react'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/loading/Loadable'


// marketplaces routing
const Marketplaces = Loadable(lazy(() => import('views/marketplaces')))

// agentworkshop routing

const Agentworkshop = Loadable(lazy(() => import('views/agentworkshop')))

// agentworkshop routing

const Myagents = Loadable(lazy(() => import('views/myagents')))

// agentworkshop routing

const Engines = Loadable(lazy(() => import('views/engines')))

// agentworkshop routing

const Knowledgebas = Loadable(lazy(() => import('views/knowledgebas')))

// agentworkshop routing

const Engineroom = Loadable(lazy(() => import('views/engines')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Myagents />
        },
        {
            path: '/agentworkshop',
            element: <Agentworkshop />
        },
        {
            path: '/myagents',
            element: <Myagents />
        },
        {
            path: '/engines',
            element: <Engines />
        },
        {
            path: '/knowledgebas',
            element: <Knowledgebas />
        },
        {
            path: '/engineroom',
            element: <Engineroom />
        },
        {
            path: '/marketplaces',
            element: <Marketplaces />
        },
    ]
}

export default MainRoutes
