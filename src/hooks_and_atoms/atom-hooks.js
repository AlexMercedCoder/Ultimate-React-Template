// use this file to create recoil related hooks for your atom, refer to example

import { useRecoilState } from "recoil";
import { exampleAtom } from "./atom";

export const useExampleAtom = () => useRecoilState(exampleAtom)