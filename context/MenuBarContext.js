import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '../util/hooks'

export const MenuBarContext = React.createContext([{}, () => {}])

export const MenuBarProvider = (props) => {
    // use localstorage hook to hydrate menu bar state context
    const [state, setState] = useLocalStorage('isMenu', false);

    return (
        <MenuBarContext.Provider value={[state, setState]}>
          {props.children}
        </MenuBarContext.Provider>
    )
}
