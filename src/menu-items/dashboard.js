// assets
import { IconHierarchy, IconBuildingStore, IconKey, IconTool } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'agentworkshop',
            title: 'Agent Workshop',
            type: 'item',
            url: '/canvas',
            breadcrumbs: true
        },
        {
            id: 'myagents',
            title: 'My Agents ',
            type: 'item',
            url: '/myagents',
            breadcrumbs: true
        },
        {
            id: 'engines',
            title: 'Engines',
            type: 'item',
            url: '/engines',
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            breadcrumbs: true
        },
        {
            id: 'knowledgebas',
            title: 'Knowledgebas',
            type: 'item',
            url: '/knowledgebas',
            breadcrumbs: true
        },
        {
            id: 'engineroom',
            title: 'Engine Room',
            type: 'item',
            url: '/engineroom',
            breadcrumbs: true
        },
    ]
}

export default dashboard
