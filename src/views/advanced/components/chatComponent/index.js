import { useContext, useEffect, useRef, useState } from "react"
import { useNodes } from "reactflow"
import BuildTrigger from "./buildTrigger"
import ChatTrigger from "./chatTrigger"

import * as _ from "lodash"
import { TabsContext } from "../../contexts/tabsContext"
import { getBuildStatus } from "../../controllers/API"
import FormModal from "../../modals/formModal"

export default function Chat({ flow }) {
  const [open, setOpen] = useState(false)
  const [canOpen, setCanOpen] = useState(false)
  const { tabsState, isBuilt, setIsBuilt } = useContext(TabsContext)

  useEffect(() => {
    const handleKeyDown = event => {
      if (
        (event.key === "K" || event.key === "k") &&
        (event.metaKey || event.ctrlKey) &&
        isBuilt
      ) {
        event.preventDefault()
        setOpen(oldState => !oldState)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isBuilt])

  useEffect(() => {
    // Define an async function within the useEffect hook
    const fetchBuildStatus = async () => {
      const response = await getBuildStatus(flow.id)
      setIsBuilt(response.built)
    }

    // Call the async function
    fetchBuildStatus()
  }, [flow])

  const prevNodesRef = useRef()
  const nodes = useNodes()
  useEffect(() => {
    const prevNodes = prevNodesRef.current
    const currentNodes = nodes.map(node => _.cloneDeep(node.data.node.template))
    if (
      tabsState &&
      tabsState[flow.id] &&
      tabsState[flow.id].isPending &&
      JSON.stringify(prevNodes) !== JSON.stringify(currentNodes)
    ) {
      setIsBuilt(false)
    }
    if (
      tabsState &&
      tabsState[flow.id] &&
      tabsState[flow.id].formKeysData &&
      tabsState[flow.id].formKeysData.input_keys !== null
    ) {
      setCanOpen(true)
    } else {
      setCanOpen(false)
    }

    prevNodesRef.current = currentNodes
  }, [tabsState, flow.id])

  return (
    <>
      <div>
        <BuildTrigger
          open={open}
          flow={flow}
          setIsBuilt={setIsBuilt}
          isBuilt={isBuilt}
        />
        {isBuilt &&
          tabsState[flow.id] &&
          tabsState[flow.id].formKeysData &&
          canOpen && (
            <FormModal
              key={flow.id}
              flow={flow}
              open={open}
              setOpen={setOpen}
            />
          )}
        <ChatTrigger
          canOpen={canOpen}
          open={open}
          setOpen={setOpen}
          isBuilt={isBuilt}
        />
      </div>
    </>
  )
}
