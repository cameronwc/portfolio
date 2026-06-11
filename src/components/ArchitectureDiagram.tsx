import { motion } from "framer-motion";

const NODES = [
  { id: "cron", label: "CircleCI Cron", sub: "Scheduled trigger" },
  { id: "detect", label: "Ticket Detection", sub: "Open vuln queue scan" },
  { id: "context", label: "Codebase Analysis", sub: "Repo + dependency context" },
  { id: "claude", label: "Claude API", sub: "Fix generation" },
  { id: "pr", label: "Fix Pull Request", sub: "Patch + ticket link" },
  { id: "review", label: "Human Review", sub: "Engineer approves + merges" },
];

const NODE_W = 150;
const NODE_H = 64;

function Diagram({ vertical }: { vertical: boolean }) {
  const gap = vertical ? 40 : 38;
  const positions = NODES.map((_, i) =>
    vertical
      ? { x: 20, y: i * (NODE_H + gap) }
      : { x: i * (NODE_W + gap), y: 20 }
  );
  const width = vertical ? NODE_W + 40 : NODES.length * (NODE_W + gap) - gap;
  const height = vertical
    ? NODES.length * (NODE_H + gap) - gap
    : NODE_H + 40;

  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      className={vertical ? "mx-auto w-full max-w-[240px]" : "w-full"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label="Architecture: CircleCI cron triggers ticket detection, codebase analysis, Claude API fix generation, a fix pull request, and human review"
      role="img"
    >
      {/* Edges */}
      {NODES.slice(0, -1).map((node, i) => {
        const from = positions[i];
        const to = positions[i + 1];
        const d = vertical
          ? `M ${from.x + NODE_W / 2} ${from.y + NODE_H} L ${to.x + NODE_W / 2} ${to.y - 6}`
          : `M ${from.x + NODE_W} ${from.y + NODE_H / 2} L ${to.x - 6} ${to.y + NODE_H / 2}`;
        return (
          <g key={`edge-${node.id}`}>
            <motion.path
              d={d}
              stroke="rgba(6,182,212,0.5)"
              strokeWidth="1.5"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.3 + i * 0.25 },
                },
              }}
            />
            <motion.path
              d={
                vertical
                  ? `M ${to.x + NODE_W / 2 - 5} ${to.y - 10} L ${to.x + NODE_W / 2} ${to.y - 3} L ${to.x + NODE_W / 2 + 5} ${to.y - 10}`
                  : `M ${to.x - 11} ${to.y + NODE_H / 2 - 5} L ${to.x - 4} ${to.y + NODE_H / 2} L ${to.x - 11} ${to.y + NODE_H / 2 + 5}`
              }
              stroke="rgba(6,182,212,0.5)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.2, delay: 0.55 + i * 0.25 },
                },
              }}
            />
          </g>
        );
      })}
      {/* Nodes */}
      {NODES.map((node, i) => {
        const pos = positions[i];
        const isAccent = node.id === "claude";
        return (
          <motion.g
            key={node.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, delay: i * 0.25 },
              },
            }}
          >
            <rect
              x={pos.x}
              y={pos.y}
              width={NODE_W}
              height={NODE_H}
              rx="8"
              fill={isAccent ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.03)"}
              stroke={isAccent ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text
              x={pos.x + NODE_W / 2}
              y={pos.y + 27}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {node.label}
            </text>
            <text
              x={pos.x + NODE_W / 2}
              y={pos.y + 45}
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
            >
              {node.sub}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="glass rounded-xl p-6 sm:p-10">
      <div className="hidden md:block">
        <Diagram vertical={false} />
      </div>
      <div className="md:hidden">
        <Diagram vertical={true} />
      </div>
    </div>
  );
}
