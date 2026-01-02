import { Tooltip, TooltipContent, TooltipTrigger } from "..";

interface AppTooltipProps {
  children: React.ReactNode;
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'; 
}

export const AppTooltip = ({children,content,side}:AppTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="cursor-pointer">
          {children}
      </TooltipTrigger>
      <TooltipContent side={side || 'bottom'}>{content}</TooltipContent>
    </Tooltip>
  )
}
