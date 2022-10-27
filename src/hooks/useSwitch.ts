import React, { useCallback, useState } from "react";

export type UseSwitchType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  ((value: boolean) => void) | undefined
];

export default function useSwitch(initialState: boolean): UseSwitchType {
  const [isSwitchOn, setIsSwitchOn] = useState(initialState);

  const isSwitchOnChangeHandler = useCallback((isSwitchOn: boolean) => {
    setIsSwitchOn(isSwitchOn);
  }, []);

  return [isSwitchOn, setIsSwitchOn, isSwitchOnChangeHandler];
}
