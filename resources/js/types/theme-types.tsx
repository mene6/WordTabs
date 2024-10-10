type ThemeColors = 'Theme' | 'Orange'
interface ThemeColorStateParams {
  themeColor: ThemeColors
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}
