import {
  DockviewApi,
  DockviewReact,
  DockviewReadyEvent
} from "dockview";
import MonacoEditorDefault from './monaco-editor';


import { useRef } from 'react';
import DockViewNavbar from './dockview-navbar';

const components = {
  // default: (props: IDockviewPanelProps) => {
  //   return <MonacoEditorDefault />;
  // }
  default: () => {
    return <MonacoEditorDefault />;
  }
};

export default function DockView() {
  //const dockviewApiRef = useRef<DockviewApi>(null);
  const dockviewApiRef = useRef<DockviewApi>(null) as React.MutableRefObject<DockviewApi>;

  const onReady = (event: DockviewReadyEvent) => {
    dockviewApiRef.current = event.api;

    event.api.addPanel({
      id: "Quickstart",
      component: "default"
    });

    // event.api.addPanel({
    //   id: "panel_2",
    //   component: "default"
    // });
  };

  const handleAddTab = () => {
    if (dockviewApiRef.current) {
      dockviewApiRef.current.addPanel({
        id: `panel_added_${Date.now()}`,
        component: "default"
      });
    }
  };

  return (
    <div className="DockView">

      <div className="flex flex-col items-center w-full tabs-wrapper">
        <DockViewNavbar onAddTab={handleAddTab} />
      </div>

      <DockviewReact
        className="dockview-theme-default"
        onReady={onReady}
        components={components}
      />
    </div>
  );
}
