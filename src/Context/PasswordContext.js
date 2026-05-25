import React, { createContext, useEffect, useState } from "react";

const PasswordContext = createContext();

export const PasswordContextprovider = ({ children }) => {
    const [password, setPassword] = useState("")
    const [copiedPassword, setCopiedPassword] = useState("")
    const [recentPasswords, setRecentPasswords] = useState([])
    const [showRecentModal, setShowRecentModal] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [characterLength, setCharacterLength] = useState("4")
    // COPY +
    const copyClick = () => {
        if (!password) {
            return
        }
        navigator.clipboard.writeText(password).then(() => {
        });
        setCopiedPassword(password)
        setShowToast(true)
    };
    const copyRecentPassword = (recentPassword) => {
        navigator.clipboard.writeText(recentPassword).then(() => {
        });
        setCopiedPassword(recentPassword)
        setShowToast(true)
        setShowRecentModal(false)
    }
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
        border: easyActive ? "2px solid #ffd166" : "",
        backgroundColor: easyActive ? "#ffd166" : ""
    }
    useEffect(() => {
        if (sumCalculate > 0 && sumCalculate <= 25) {
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
        border: mediumActive ? "2px solid #ffd166" : "",
        backgroundColor: mediumActive ? "#ffd166" : ""
    }
    useEffect(() => {
        if (sumCalculate > 25 && sumCalculate <= 50) {
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
        border: hardActive ? "2px solid #ffd166" : "",
        backgroundColor: hardActive ? "#ffd166" : ""
    }
    useEffect(() => {
        if (sumCalculate > 50 && sumCalculate <= 75) {
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
        border: expertActive ? "2px solid #ffd166" : "",
        backgroundColor: expertActive ? "#ffd166" : ""
    }
    useEffect(() => {
        if (sumCalculate > 75) {
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
        const selectedGroups = [pwUpper, pwLower, pwNumeric, pwSymbols].filter(Boolean)
        const sifre = selectedGroups.join("")
        const passwordLength = Math.max(Number(characterLength), selectedGroups.length)
        const letters = selectedGroups.map((group) => group[Math.floor(Math.random() * group.length)])

        for (let i = letters.length; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * sifre.length)
            letters.push(sifre[randomIndex])
        }

        const shuffledLetters = letters.sort(() => Math.random() - 0.5).join("")
        setPassword(shuffledLetters);
        setRecentPasswords((prevPasswords) => [
            shuffledLetters,
            ...prevPasswords.filter((prevPassword) => prevPassword !== shuffledLetters)
        ].slice(0, 5))
    }
    // GENERATE -
    const data = {
        password,
        setPassword,
        copyClick,
        copyRecentPassword,
        copiedPassword,
        recentPasswords,
        showRecentModal,
        setShowRecentModal,
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
