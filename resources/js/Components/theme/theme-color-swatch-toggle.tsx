'use client'

import { useTheme } from 'next-themes'

import { useThemeContext } from '@/context/theme-data-provider'
import { cn } from '@/lib/utils'

import {
    SelectContentSwatch,
    SelectItemSwatch,
    SelectSwatch,
    SelectTrigger,
    SelectValue
} from './select'

const availableThemeColors = [
    {
        name: 'Theme',
        light: 'bg-zinc-600',
        dark: 'bg-zinc-700',
    },
    {
        name: 'Orange',
        light: 'bg-orange-500',
        dark: 'bg-orange-700'
    },
    // { name: 'Red', light: 'bg-red-600', dark: 'bg-red-700' },
    { name: 'Green', light: 'bg-green-600', dark: 'bg-green-700' },
    // { name: 'Purple', light: 'bg-purple-600', dark: 'bg-purple-500' },

]

export function ThemeColorSwatchToggle() {
    const { themeColor, setThemeColor } = useThemeContext()
    const { theme } = useTheme()

    const createSelectItems = () => {
        //console.log(theme);
        //console.log(themeColor);
        return availableThemeColors.map(({ name, light, dark }) => (
            <SelectItemSwatch key={name} value={name}>
                <div className="flex flex-row justify-center items-center mr-1 ml-1 h-full">
                    <div
                        className={cn(
                            'rounded-full',
                            'w-[20px]',
                            'h-[20px]',
                            theme === 'light' ? light : dark,
                        )}
                    ></div>
                    {/* <div className="text-sm">{name}</div> */}
                </div>
            </SelectItemSwatch>
        ))
    }

    return (
        <div className="themeSelector">
            <SelectSwatch
                onValueChange={(value) => setThemeColor(value as ThemeColors)}
                defaultValue={themeColor}
            >
                <SelectTrigger className="focus:ring-transparent ring-offset-transparent">
                    {/* <SelectTrigger className="focus:ring-transparent ring-offset-transparent w-[135px]"> */}
                    <SelectValue placeholder="Select Color" />
                </SelectTrigger>
                <SelectContentSwatch className="border-border">
                    {createSelectItems()}
                </SelectContentSwatch>
            </SelectSwatch>
        </div>
    )
}
