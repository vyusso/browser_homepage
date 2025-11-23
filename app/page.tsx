import { TerminalLayout } from "../components/TerminalLayout";
import { ClockPanel } from "../components/ClockPanel";
import { StatusLog } from "../components/StatusLog";
import { HardwarePanel } from "../components/HardwarePanel";
import { MainImagePanel } from "../components/MainImagePanel";
import { SecondaryImagePanel } from "../components/SecondaryImagePanel";

// homepage layout with clock, logs, images, and vitals
export default function Home() {
  return (
    <TerminalLayout>
      <div className="terminal-grid">
        <div className="terminal-column">
          <ClockPanel />
          <StatusLog />
          <SecondaryImagePanel />
          <HardwarePanel />
        </div>
        <div className="terminal-column">
          <MainImagePanel />
        </div>
      </div>
    </TerminalLayout>
  );
}
