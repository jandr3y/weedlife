import { Lock } from "lucide-react"

type Props = {
  level: number,
  percent: number,
  locked: boolean,
  count: number
}
export default function LevelBlock(props: Props) {
  const blockClass = props.locked
    ? 'flex-1 relative text-center bg-red-200 text-red-800 rounded-md p-2'
    : 'flex-1 text-center bg-green-300 rounded-md p-2'

  return (
    <div className={blockClass}>
      { props.locked && <Lock className="absolute top-1/3 left-6" /> }
      <h3 className="font-bold text-md">{ props.percent }%</h3>
      <small>{ props.level }º</small>
    </div>
  )
}