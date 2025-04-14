import { useEffect, useState } from 'react';

interface OrientationWarningProps {
  requiredOrientation: 'landscape' | 'portrait';
}

const OrientationWarning = ({ requiredOrientation = 'landscape' }: OrientationWarningProps) => {
  const [isMismatched, setIsMismatched] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;

      const mismatched =
        (requiredOrientation === 'portrait' && !isPortrait) ||
        (requiredOrientation === 'landscape' && !isLandscape);

      setIsMismatched(mismatched);
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [requiredOrientation]);

  if (!isMismatched) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      textAlign: 'center',
      padding: '1rem',
    }}>
      <p>
        Please rotate your device to <strong>{requiredOrientation}</strong> mode to continue using this app.
      </p>
    </div>
  );
};

export { OrientationWarning };
