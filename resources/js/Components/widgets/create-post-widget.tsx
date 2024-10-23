"use client"

import * as React from "react"

import { Button } from "@/Components/ui/button"
import { Input } from '@/Components/ui/input'
import { SelectDocument } from '@/Components/ui/select-document'
import { Plus } from 'lucide-react'
import { toast } from "sonner"

const labels = [
    "Websites",
    "Project",
    "Product",
    "Page",
    "Section",
]

export function ComboboxDropdownMenu() {
    const [label, setLabel] = React.useState("feature")
    const [open, setOpen] = React.useState(false)
    toast("Event has been created.")

    return (
        <div className="flex flex-row justify-between items-start sm:items-center space-x-2 bg-popover px-4 py-3 border rounded-md w-full">

            {/* <span className="bg-primary mr-2 px-2 py-1 rounded-lg text-primary-foreground text-xs">
                    {label}
                </span> */}
            <span className="flex text-muted-foreground">Create new...</span>
            <SelectDocument />
            <div className="flex flex-row flex-grow justify-center items-center space-x-2 font-medium text-sm leading-none space-between">
                <Input placeholder="Document Title" className='flex w-full' />
            </div>

            <Button
                variant={"default"}
                className="flex items-center mr-2 px-4 py-2 rounded text-white"
            >
                <Plus className="mr-2" size={16} />
                Create
            </Button>



        </div>
    )
}
