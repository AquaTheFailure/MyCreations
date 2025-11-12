import { useState, useEffect } from 'react';
import { Clock } from './components/Clock';
import { TimezoneSelector } from './components/TimezoneSelector';
import { SettingsPanel } from './components/SettingsPanel';
import { Dock, DockApp } from './components/Dock';
import { IframeView } from './components/IframeView';

export interface Settings {
  background: string;
  clockStyle: 'digital' | 'analog';
  show24Hour: boolean;
  showSeconds: boolean;
  accentColor: string;
  customBackground?: string;
}

export default function App() {
  const [timezone, setTimezone] = useState('America/New_York');
  const [settings, setSettings] = useState<Settings>({
    background: 'gradient-1',
    clockStyle: 'digital',
    show24Hour: false,
    showSeconds: true,
    accentColor: '#3b82f6',
  });
  const [isHoveringClock, setIsHoveringClock] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState<DockApp | null>(null);

  const getBackgroundClass = () => {
    if (settings.background === 'custom' && settings.customBackground) {
      return '';
    }
    
    switch (settings.background) {
      case 'gradient-1':
        return 'bg-gradient-to-br from-blue-500 to-purple-600';
      case 'gradient-2':
        return 'bg-gradient-to-br from-pink-500 to-orange-400';
      case 'gradient-3':
        return 'bg-gradient-to-br from-green-400 to-blue-500';
      case 'gradient-4':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'dark':
        return 'bg-gray-900';
      case 'light':
        return 'bg-gray-100';
      default:
        return 'bg-gradient-to-br from-blue-500 to-purple-600';
    }
  };

  // If an app is open, show the iframe view
  if (currentApp) {
    return <IframeView app={currentApp} onBack={() => setCurrentApp(null)} />;
  }

  const backgroundStyle = settings.background === 'custom' && settings.customBackground
    ? {
        backgroundImage: `url(${settings.customBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${getBackgroundClass()}`}
      style={backgroundStyle}
    >
      <div className="absolute top-6 left-6">
        <TimezoneSelector timezone={timezone} onTimezoneChange={setTimezone} />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div 
          onMouseEnter={() => setIsHoveringClock(true)}
          onMouseLeave={() => setIsHoveringClock(false)}
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="p-8 cursor-pointer"
        >
          <Clock 
            timezone={timezone} 
            settings={settings}
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <SettingsPanel 
          settings={settings} 
          onSettingsChange={setSettings} 
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      </div>

      <Dock onAppClick={(app) => setCurrentApp(app)} />
    </div>
  );
}
