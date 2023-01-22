import React, { createContext, useEffect, useState } from "react";

const PasswordContext = createContext();

export const PasswordContextprovider = ({ children }) => {
    const [password, setPassword] = useState("")
    const [showToast, setShowToast] = useState(false);
    const [characterLength, setCharacterLength] = useState("5")
    // COPY +
    const copyClick = () => {
        let trimPassword = []
        trimPassword.push(password.reduce((a, b) => a + b + '').trim())
        navigator.clipboard.writeText(trimPassword).then(() => {
        });
        setShowToast(!showToast)
    };
    const handleChange = (e) => {
        setCharacterLength(e.target.value)
    }
    // COPY -

    // UPPER +
    const [activeUpper, setActiveUpper] = useState(false)
    const [pwUpper, setPwUpper] = useState("")
    const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const UpperClick = () => {
        setActiveUpper(!activeUpper)
    }
    useEffect(() => {
        return activeUpper ? setPwUpper(Upper) : setPwUpper("")
    }, [activeUpper])
    // UPPER -

    // LOWER +
    const [activeLower, setActiveLower] = useState(false)
    const [pwLower, setPwLower] = useState("")
    const Lower = "abcdefghijklmnopqrstuvwxyz";
    const LowerClick = () => {
        setActiveLower(!activeLower)
    }
    useEffect(() => {
        return activeLower ? setPwLower(Lower) : setPwLower("")
    }, [activeLower])
    // LOWER -

    // NUMERİC +
    const [activeNumeric, setActiveNumeric] = useState(false)
    const [pwNumeric, setPwNumeric] = useState("")
    const Numbers = "1234567890";
    const NumberClick = () => {
        setActiveNumeric(!activeNumeric)
    }
    useEffect(() => {
        return activeNumeric ? setPwNumeric(Numbers) : setPwNumeric("")
    }, [activeNumeric])
    // NUMERİC -

    // SYMBOLS +
    const [activeSymbols, setActiveSymbols] = useState(false)
    const [pwSymbols, setPwSymbols] = useState("")
    const Symbols = ".!#+%?";
    const SymbolsClick = () => {
        setActiveSymbols(!activeSymbols)
    }
    useEffect(() => {
        return activeSymbols ? setPwSymbols(Symbols) : setPwSymbols("")
    }, [activeSymbols])
    // SYMBOLS -

    // DİFFİCULTY +
    const [difficulty, setDifficulty] = useState("")
    const strength = []
    if (activeUpper) {
        strength.push(2)
    } else {
        strength.push(0)
    }
    if (activeLower) {
        strength.push(2)
    } else {
        strength.push(0)
    }
    if (activeNumeric) {
        strength.push(2)
    } else {
        strength.push(0)
    }
    if (activeSymbols) {
        strength.push(4)
    } else {
        strength.push(0)
    }
    // CALCULATE +
    let sum = strength.reduce((total, currentValue) => total + currentValue)
    let sumCalculate = sum * characterLength
    // CALCULATE -

    // EASY +
    const [easyActive, setEasyActive] = useState(false)
    const easy = {
        border: easyActive ? "2px solid yellow" : "",
        backgroundColor: easyActive ? "yellow" : ""
    }
    useEffect(() => {
        if (sumCalculate > 0 && sumCalculate <= 20) {
            console.log("sumCalculate EASY " + sumCalculate);
            setEasyActive(true)
            setDifficulty("Easy")
        }
        return () => {
            setEasyActive(false)
            setDifficulty("")
        }
    }, [sumCalculate])
    // EASY -

    // MEDİUM +
    const [mediumActive, setMediumActive] = useState(false)
    const medium = {
        border: mediumActive ? "2px solid yellow" : "",
        backgroundColor: mediumActive ? "yellow" : ""
    }
    useEffect(() => {
        if (sumCalculate > 21 && sumCalculate <= 40) {
            console.log("sumCalculate medium " + sumCalculate);
            setEasyActive(true)
            setMediumActive(true)
            setDifficulty("Medium")
        }
        return () => {
            setEasyActive(false)
            setMediumActive(false)
            setDifficulty("")
        }
    }, [sumCalculate])
    // MEDİUM -

    // HARD +
    const [hardActive, setHardActive] = useState(false)
    const hard = {
        border: hardActive ? "2px solid yellow" : "",
        backgroundColor: hardActive ? "yellow" : ""
    }
    useEffect(() => {
        if (sumCalculate > 41 && sumCalculate <= 60) {
            console.log("sumCalculate hard " + sumCalculate);
            setEasyActive(true)
            setMediumActive(true)
            setHardActive(true)
            setDifficulty("Hard")
        }
        return () => {
            setEasyActive(false)
            setMediumActive(false)
            setHardActive(false)
            setDifficulty("")
        }
    }, [sumCalculate])
    // HARD -

    // EXPERT +
    const [expertActive, setExpertActive] = useState(false)
    const expert = {
        border: expertActive ? "2px solid yellow" : "",
        backgroundColor: expertActive ? "yellow" : ""
    }
    useEffect(() => {
        if (sumCalculate > 61 && sumCalculate <= 100) {
            console.log("sumCalculate expert " + sumCalculate);
            setEasyActive(true)
            setMediumActive(true)
            setHardActive(true)
            setExpertActive(true)
            setDifficulty("Expert")
        }
        return () => {
            setEasyActive(false)
            setMediumActive(false)
            setHardActive(false)
            setExpertActive(false)
            setDifficulty("")
        }
    }, [sumCalculate])
    // EXPERT -
    // DİFFİCULTY -

    // GENERATE +
    const handleClick = () => {
        const sifre = pwUpper + pwLower + pwNumeric + pwSymbols
        let letters = []
        for (let i = 0; i < characterLength; i++) {
            const randomIndex = Math.floor(Math.random() * sifre.length);
            letters.push(sifre[randomIndex])
        }
        setPassword(letters);
    }
    // GENERATE -
    const data = {
        password,
        setPassword,
        copyClick,
        showToast,
        setShowToast,
        handleChange,
        characterLength,
        UpperClick,
        activeUpper,
        pwUpper,
        LowerClick,
        activeLower,
        pwLower,
        NumberClick,
        activeNumeric,
        pwNumeric,
        SymbolsClick,
        activeSymbols,
        pwSymbols,
        setDifficulty,
        difficulty,
        easy,
        medium,
        hard,
        expert,
        handleClick
    }

    return <PasswordContext.Provider value={data}>
        {children}
    </PasswordContext.Provider>
}

export default PasswordContext;
