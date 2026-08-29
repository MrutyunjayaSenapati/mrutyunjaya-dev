interface SchematicProps {
  projectId: string;
}

const MONO = "JetBrains Mono, ui-monospace, monospace";
const INK = "#0b0b0a";
const SURFACE = "#141413";
const ELEVATED = "#1d1d1b";
const LINE = "#33332f";
const MUTED = "#8a887f";
const SECONDARY = "#c8c6be";
const ACCENT = "#4ade80";

function Node({
  x,
  y,
  w,
  label,
  strong = false,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  strong?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={30}
        rx={4}
        fill={strong ? ACCENT : ELEVATED}
        stroke={strong ? ACCENT : LINE}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + 19}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize={9}
        letterSpacing={0.5}
        fill={strong ? INK : SECONDARY}
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={ACCENT}
      strokeWidth={1}
      strokeOpacity={0.7}
      markerEnd="url(#schem-arrow)"
    />
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 340 216"
      className="h-auto w-full"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="schem-arrow"
          viewBox="0 0 8 8"
          refX={7}
          refY={4}
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-reverse"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT} fillOpacity={0.8} />
        </marker>
        <pattern id="schem-dots" width={16} height={16} patternUnits="userSpaceOnUse">
          <circle cx={1} cy={1} r={0.75} fill={LINE} />
        </pattern>
      </defs>

      <rect x={0.5} y={0.5} width={339} height={215} rx={10} fill={SURFACE} stroke={LINE} />
      <rect x={1} y={1} width={338} height={214} rx={9.5} fill="url(#schem-dots)" opacity={0.35} />
      {children}
    </svg>
  );
}

function PlantDoctorSchematic() {
  const y = 93;
  return (
    <Frame>
      <Node x={22} y={y} w={58} label="Camera" />
      <Arrow x1={82} y1={y + 15} x2={106} y2={y + 15} />
      <Node x={108} y={y} w={64} label="FastAPI" />
      <Arrow x1={174} y1={y + 15} x2={198} y2={y + 15} />
      <Node x={200} y={y} w={72} label="PyTorch·LLM" />
      <Arrow x1={274} y1={y + 15} x2={296} y2={y + 15} />
      <rect x={298} y={y} width={26} height={30} rx={4} fill={ELEVATED} stroke={LINE} />
      <text x={311} y={y + 19} textAnchor="middle" fontFamily={MONO} fontSize={9} fill={SECONDARY}>
        DB
      </text>

      {/* capture ticks */}
      <path
        d={`M51 ${y - 14} v-8 M170 ${y - 14} v-8 M236 ${y - 14} v-8`}
        stroke={MUTED}
        strokeWidth={1}
        strokeDasharray="2 3"
        opacity={0.6}
      />
      <text x={24} y={40} fontFamily={MONO} fontSize={9} letterSpacing={1} fill={MUTED}>
        CAPTURE → INFERENCE → RAG → STORE
      </text>
      <text x={24} y={182} fontFamily={MONO} fontSize={9} fill={MUTED}>
        offline cache: SQLite
      </text>
      <circle cx={310} cy={178} r={3} fill={ACCENT} opacity={0.85} />
    </Frame>
  );
}

function FoodyGoSchematic() {
  const cx = 170;
  const cy = 118;
  return (
    <Frame>
      <text x={24} y={40} fontFamily={MONO} fontSize={9} letterSpacing={1} fill={MUTED}>
        TURBOREPO · 4 PORTALS · POSTGRESQL
      </text>

      <Node x={cx - 75} y={cy - 15} w={150} label="Express · PostgreSQL" strong />

      {/* spokes */}
      <line x1={cx} y1={cy - 15} x2={cx - 92} y2={52} stroke={LINE} strokeWidth={1} />
      <line x1={cx} y1={cy - 15} x2={cx + 92} y2={52} stroke={LINE} strokeWidth={1} />
      <line x1={cx} y1={cy + 15} x2={cx - 92} y2={184} stroke={LINE} strokeWidth={1} />
      <line x1={cx} y1={cy + 15} x2={cx + 92} y2={184} stroke={LINE} strokeWidth={1} />

      <Node x={cx - 148} y={37} w={112} label="Customer App" />
      <Node x={cx + 36} y={37} w={112} label="Driver App" />
      <Node x={cx - 148} y={169} w={112} label="Admin Web" />
      <Node x={cx + 36} y={169} w={112} label="Merchant Web" />

      <text x={24} y={196} fontFamily={MONO} fontSize={9} fill={MUTED}>
        shared types · single repo
      </text>
    </Frame>
  );
}

function ChatAppSchematic() {
  return (
    <Frame>
      <text x={24} y={40} fontFamily={MONO} fontSize={9} letterSpacing={1} fill={MUTED}>
        SOCKET.IO · JWT · MONGODB
      </text>

      <Node x={24} y={93} w={76} label="Client A" />
      <Node x={240} y={93} w={76} label="Client B" />
      <Node x={132} y={93} w={76} label="Socket.io" strong />

      <Arrow x1={102} y1={104} x2={130} y2={104} />
      <line x1={208} y1={110} x2={238} y2={110} stroke={ACCENT} strokeWidth={1} strokeOpacity={0.7} markerEnd="url(#schem-arrow)" />
      <line x1={238} y1={98} x2={210} y2={98} stroke={ACCENT} strokeWidth={1} strokeOpacity={0.7} markerEnd="url(#schem-arrow)" />
      <line x1={130} y1={116} x2={102} y2={116} stroke={ACCENT} strokeWidth={1} strokeOpacity={0.7} markerEnd="url(#schem-arrow)" />

      <text x={24} y={176} fontFamily={MONO} fontSize={9} fill={MUTED}>
        online presence · session auth
      </text>
      <circle cx={310} cy={172} r={3} fill={ACCENT} opacity={0.85} />
    </Frame>
  );
}

export default function ProjectSchematic({ projectId }: SchematicProps) {
  switch (projectId) {
    case "plant-doctor":
      return <PlantDoctorSchematic />;
    case "foodygo":
      return <FoodyGoSchematic />;
    case "chatapp":
      return <ChatAppSchematic />;
    default:
      return null;
  }
}
