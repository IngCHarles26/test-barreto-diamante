

interface AppTitleProps {
  title: string
}

export const AppTitle = ({title}:AppTitleProps) => {
  return (
    <h1 className="font-bold text-gray-700 text-lg ">{title}</h1>
  )
}
