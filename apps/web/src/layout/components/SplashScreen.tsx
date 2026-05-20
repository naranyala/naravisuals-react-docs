interface SplashScreenProps {
  title: string;
}

export function SplashScreen({ title }: SplashScreenProps) {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-title">{title}</h1>
      </div>
    </div>
  );
}
