import React from 'react';

const StarBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="stars" />
      <style>{`
        .stars {
          width: 100%;
          height: 100%;
          background: radial-gradient(white 1px, transparent 1px),
                      radial-gradient(white 1px, transparent 1px);
          background-position: 0 0, 50px 50px;
          background-size: 100px 100px;
          animation: starMove 60s linear infinite;
        }

        @keyframes starMove {
          from {
            background-position: 0 0, 50px 50px;
          }
          to {
            background-position: 100px 100px, 150px 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
