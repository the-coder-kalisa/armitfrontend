import { Switch } from "../ui/switch"

export default function ToggleShadComponent({
  enabled,
  setEnabled,
  disabled,
  size
}) {
  let scaleX, scaleY
  switch (size) {
    case "small":
      scaleX = 0.6
      scaleY = 0.6
      break
    case "medium":
      scaleX = 0.8
      scaleY = 0.8
      break
    case "large":
      scaleX = 1
      scaleY = 1
      break
    default:
      scaleX = 1
      scaleY = 1
  }

  return (
    <div className={disabled ? "pointer-events-none cursor-not-allowed " : ""}>
      <Switch
        style={{
          transform: `scaleX(${scaleX}) scaleY(${scaleY})`
        }}
        disabled={disabled}
        className=""
        checked={enabled}
        onCheckedChange={isEnabled => {
          setEnabled(isEnabled)
        }}
      ></Switch>
    </div>
  )
}
