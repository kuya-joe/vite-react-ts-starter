import { useState } from 'react'
import { ThemeContext } from './contexts/theme-context'

import AppShell from './AppShell'

export default function App(): JSX.Element {
  const [theme, setTheme] = useState('light');

  return  <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <AppShell></AppShell>
        </div>
    </ThemeContext.Provider>
}
