import { createContext } from "react";
import type { SectionId } from "../sections/section-metadata";

interface SectionsContextValue {
  sections: readonly { id: SectionId; label: string }[];
}

export const SectionsContext = createContext<SectionsContextValue>({
  sections: [],
});
