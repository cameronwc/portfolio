import { Suspense, lazy } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const CaseStudyAIRemediation = lazy(() =>
  import("./pages/CaseStudyAIRemediation").then((m) => ({
    default: m.CaseStudyAIRemediation,
  }))
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Home />, entry: "src/pages/Home.tsx" },
      {
        path: "work/ai-remediation",
        element: (
          <Suspense fallback={null}>
            <CaseStudyAIRemediation />
          </Suspense>
        ),
        entry: "src/pages/CaseStudyAIRemediation.tsx",
      },
      { path: "*", element: <NotFound />, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
