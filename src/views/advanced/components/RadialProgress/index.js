export default function RadialProgressComponent({ value, color }) {
  const style = {
    "--value": value * 100,
    "--size": "1.5rem",
    "--thickness": "2px"
  }

  return (
    <div className={"radial-progress " + color} style={style}>
      <strong className="text-[8px]">{Math.trunc(value * 100)}%</strong>
    </div>
  )
}
