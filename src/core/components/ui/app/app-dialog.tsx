'use client'

import { AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/core/components/ui"

interface AppDialogProps {
  tooltip?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  tooltipChild: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
  buttonText?: string
  action?: () => void
  maxWidth?: number
}


export const AppDialog = ({tooltip,tooltipChild,title,description,children,buttonText,
    action = () => null,
    side='bottom',
    maxWidth= 24
  }:AppDialogProps) => {


  return (
    <Dialog>

      <DialogTrigger>
        {tooltip ?
          <AppTooltip content={tooltip} side={side}>
            {tooltipChild}
          </AppTooltip>
          : <>{tooltipChild}</>}

      </DialogTrigger>

      <DialogContent className='w-full' style={{maxWidth: `${maxWidth}rem`}}>
        
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-justify">{description}</DialogDescription>
        </DialogHeader>

        <div className='flex flex-col gap-2' >
          {children}
        </div>
        
        {buttonText &&
          <DialogFooter className='mt-2'>
            <DialogClose asChild>
              <Button onClick={() => action()}>{buttonText}</Button>
            </DialogClose>
          </DialogFooter>
        }
        
      </DialogContent>
    </Dialog>
  )
}

/**
  tooltip=""
  tooltipChild={< className='size-6 p-1'/>}
  title=""
  description=""
  buttonText=""

 */
