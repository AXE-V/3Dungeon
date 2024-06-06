export const NotFound = () => {
  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.75,
      }}>
      <div style={{ fontSize: '10vw' }}>404</div>
      <p style={{ textAlign: 'center', fontSize: '2vw' }}>Page not found</p>
    </div>
  );
};
