import { useEffect } from "react"
import { TypeModal } from "../../constants/enums"
import GenericModal from "../../modals/genericModal"
import IconComponent from "../genericIconComponent"
import { Input } from "../ui/input"

export default function TextAreaComponent({
  value,
  onChange,
  disabled,
  editNode = false
}) {
  // Clear text area
  useEffect(() => {
    if (disabled) {
      onChange("")
    }
  }, [disabled])

  return (
    <div className="flex w-full items-center">
      <Input
        value={value}
        disabled={disabled}
        className={editNode ? "input-edit-node" : ""}
        placeholder={"Type something..."}
        onChange={event => {
          onChange(event.target.value)
        }}
      />
      <div>
        <GenericModal
          type={TypeModal.TEXT}
          buttonText="Finishing Editing"
          modalTitle="Edit Text"
          value={value}
          setValue={value => {
            onChange(value)
          }}
        >
          {!editNode && (
            <IconComponent
              name="ExternalLink"
              className={
                "icons-parameters-comp" +
                (disabled ? " text-ring" : " hover:text-accent-foreground")
              }
            />
          )}
        </GenericModal>
      </div>
    </div>
  )
}
