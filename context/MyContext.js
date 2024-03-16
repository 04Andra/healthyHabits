import {createContext} from "react";

export const MyContext = createContext({

    selectDataType: {},
    setSelectDataType: () => {},
    selectDataMuscle: {},
    setSelectDataMuscle: () => {},
    selectDataDifficulty: {},
    setSelectDataDifficulty: () => {},
    completeDayExercise: {},
    setCompleteDayExercise: () => {},
})