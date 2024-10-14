'use client'

import { useTheme } from 'next-themes'

import { useThemeContext } from '@/context/theme-data-provider'
import { cn } from '@/lib/utils'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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

export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeContext()
  const { theme } = useTheme()

  const createSelectItems = () => {
    //console.log(theme);
    //console.log(themeColor);
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex flex-row justify-center items-center space-x-3 h-full">
          <div
            className={cn(
              'rounded-full',
              'w-[20px]',
              'h-[20px]',
              theme === 'light' ? light : dark,
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ))
  }

  return (
    <div className="themeSelector">
      <Select

        onValueChange={(value) => setThemeColor(value as ThemeColors)}
        defaultValue={themeColor}
      >
        <SelectTrigger className="focus:ring-transparent ring-offset-transparent w-[135px]">
          <SelectValue placeholder="Select Color" />
        </SelectTrigger>
        <SelectContent className="border-input">
          {createSelectItems()}
        </SelectContent>
      </Select>
    </div>
  )
}
