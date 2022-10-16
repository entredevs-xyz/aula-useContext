import { createContext, useCallback, useState } from "react"


const modoNoturno = {
    ehModoNoturno: false,
    trocarModo: () => {}
}

export const ContextoModoNoturno = createContext(modoNoturno);


export const ProvedorModoNoturno = (props) => {

    const [ehModoNoturno, setEhModoNoturno] = useState(false)
    const trocarModo = useCallback(() => {
        setEhModoNoturno(modoAtual => !modoAtual)
    },[])

    const valorDoProvedor = {
        ehModoNoturno,
        trocarModo
    }


    return <ContextoModoNoturno.Provider value={valorDoProvedor}> 
        {props.children}
    </ContextoModoNoturno.Provider>

}
