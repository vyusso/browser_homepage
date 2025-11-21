import { TerminalLayout } from "../components/TerminalLayout";
import { SearchPanel } from "../components/SearchPanel";
import { StatusLog } from "../components/StatusLog";
import { HardwarePanel } from "../components/HardwarePanel";
import { MainImagePanel } from "../components/MainImagePanel";
import { SecondaryImagePanel } from "../components/SecondaryImagePanel";

// homepage layout with search, logs, images, and vitals
export default function Home() {
  return (
    <TerminalLayout>
      <div className="terminal-grid">
        <div className="terminal-column">
          <SearchPanel />
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
