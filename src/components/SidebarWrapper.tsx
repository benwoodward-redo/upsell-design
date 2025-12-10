import SidebarNavigation from '../imports/SidebarNavigation';

export function SidebarWrapper() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full" style={{ transform: 'scale(1)' }}>
        <SidebarNavigation />
      </div>
    </div>
  );
}
