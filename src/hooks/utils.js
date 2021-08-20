import React from "react";
function useSyncLocalStorage(
  key,
  defaultValue,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocal = window.localStorage.getItem(key);
    if (valueInLocal) {
      return deserialize(valueInLocal);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });
  const prevKeyRef = React.useRef(key);
  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    window.localStorage.setItem(key, serialize(state));
  }, [state, key, serialize]);
  return [state, setState];
}
export {useSyncLocalStorage}