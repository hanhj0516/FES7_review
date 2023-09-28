import { useState } from "react";

function useInput(initState) {
  const [value, setValue] = useState(initState);
}