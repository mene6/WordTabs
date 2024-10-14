type ThemeColors = 'Theme' | 'Orange' | 'Green'
interface ThemeColorStateParams {
  themeColor: ThemeColors
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}
