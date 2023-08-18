import AgentNotebookIcon from "assets/images/AgentNotebookicon.svg";
import EnginesIcon from "assets/images/Enginesicon.svg";
import KnowledgebaseIcon from "assets/images/Knowledgebasesicon.svg";
import MarketplaceIcon from "assets/images/Marketplaceicon.svg";
import MyAgentsIcon from "assets/images/MyAgentsicon.svg";

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: "dashboard",
  title: "",
  type: "group",
  children: [
    {
      id: "agentworkshop",
      title: "Agent Workshop",
      type: "item",
      url: "/canvas",
      breadcrumbs: true,
      icon: AgentNotebookIcon,
      background: "#CBBBF7",
      border: "#430070",
      color: "#21004C",
    },
    {
      id: "myagents",
      title: "My Agents ",
      type: "item",
      url: "/myagents",
      breadcrumbs: true,
      icon: MyAgentsIcon,
      background: "#B2E5DD",
      border: "#004C40",
      color: "#00382F",
    },
    {
      id: "engines",
      title: "Engines",
      type: "item",
      url: "/engines",
      breadcrumbs: true,
      icon: EnginesIcon,
      background: "#E5C8E3",
      border: "#700070",
      color: "#40004C",
    },
    {
      id: "marketplaces",
      title: "Marketplaces",
      type: "item",
      url: "/marketplaces",
      breadcrumbs: true,
      icon: MarketplaceIcon,
      background: "#CBBBF7",
      border: "#430070",
      color: "#21004C",
    },
    {
      id: "knowledgebas",
      title: "Knowledgebas...",
      type: "item",
      url: "/knowledgebas",
      breadcrumbs: true,
      icon: KnowledgebaseIcon,
      background: "#CBCBCB",
      border: "#A5A5A5",
      color: "#BABABA",
    },
    {
      id: "engineroom",
      title: "Engine Room",
      type: "item",
      url: "/engineroom",
      breadcrumbs: true,
      icon: EnginesIcon,
      background: "#E5C8E3",
      border: "#700070",
      color: "#40004C",
    },
  ],
};

export default dashboard;
