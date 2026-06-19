import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
  const { needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div style={{ padding: '10px', background: 'yellow' }}>
      <span>New content available, click on reload button to update.</span>
      <button onClick={() => updateServiceWorker(true)}>Reload</button>
    </div>
  );
}

export default ReloadPrompt;