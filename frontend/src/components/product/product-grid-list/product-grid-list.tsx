type Props = {
  children: React.ReactNode,
  title: string
}
export default function ProductGridList({ title, children }: Props) {
  return (
    <div className=" flex flex-col gap-5 mb-8">
      <h2 className="text-xl font-semibold mb-4">{ title }</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        { children }  
      </div>    
    </div>  
  )
}

export { default as ProductGridListItem } from "./product-grid-list-item"