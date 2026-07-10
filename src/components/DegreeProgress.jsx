export default function DegreeProgress({
  totalSemesters = 8,
  completed = 4,
  ongoing = 1,
  labels = ["Y1S1", "Y1S2", "Y2S1", "Y2S2", "Y3S1", "Y3S2", "Y4S1", "Y4S2"],
}) {
  const segAngle = 360 / totalSemesters;
  const gap = 3;
  let parts = [];

  for (let i = 0; i < totalSemesters; i++) {
    let color = "rgba(255,255,255,0.07)"; // upcoming
    if (i < completed) color = "var(--accent-blue-light)";
    else if (i < completed + ongoing) color = "#4ade80";

    const start = i * segAngle + gap / 2;
    const end = (i + 1) * segAngle - gap / 2;
    parts.push(`${color} ${start}deg ${end}deg`);
    if (i < totalSemesters - 1) {
      parts.push(`transparent ${end}deg ${(i + 1) * segAngle + gap / 2}deg`);
    }
  }

  const gradient = `conic-gradient(${parts.join(", ")})`;
  const percent = Math.round((completed / totalSemesters) * 100);
  const radius = 95; // label distance from center

  return (
    <div className="degree-progress">
      <div className="degree-ring-wrapper">
        <div className="degree-ring" style={{ background: gradient }}>
          <div className="degree-ring-inner">
            <span className="degree-percent">{percent}%</span>
            <span className="degree-label">Completed</span>
          </div>
        </div>

        {labels.slice(0, totalSemesters).map((label, i) => {
          const midAngle = i * segAngle + segAngle / 2;
          const rad = (midAngle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const y = -Math.cos(rad) * radius;
          const isDone = i < completed + ongoing;

          return (
            <span
              key={i}
              className={`ring-label ${isDone ? "ring-label-active" : ""}`}
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${midAngle}deg)`,
              }}
            >
              {label}
            </span>
          );
        })}
      </div>

      <div className="degree-legend">
        <div className="legend-row"><span className="legend-dot completed"></span> Completed</div>
        <div className="legend-row"><span className="legend-dot ongoing"></span> Ongoing</div>
        <div className="legend-row"><span className="legend-dot upcoming"></span> Upcoming</div>
      </div>
    </div>
  );
}