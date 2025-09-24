import { createContext } from "react";
import type { SectionId } from "../App";

interface SectionsContextValue {
  sections: readonly { id: SectionId; label: string }[];
}

export const SectionsContext = createContext<SectionsContextValue>({
  sections: [],
});
