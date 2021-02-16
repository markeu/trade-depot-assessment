import React, { useState } from 'react';
import GradientButton from './common/GradientButton';
import AuthDebugger from './AuthDebugger';
import Apply from './apply'

const Footer = () => {
  const [showAuthDebugger, setShowAuthDebugger] = useState(
    false
  );
   const [showProduct, setShowProduct] = useState(
    false
  );
  return (
    <footer className="p-6">
      <div className="flex justify-between">
        <GradientButton
          text="Auth Debugger"
          onClick={() =>
            setShowAuthDebugger(!showAuthDebugger)
          }
        />
          <GradientButton
          text="Create Product"
          onClick={() =>
            setShowProduct(!showProduct)
          }
        />
      </div>
      <div className="mt-4">
        {showAuthDebugger && <AuthDebugger />}
      </div>
       <div className="mt-4">
        {showProduct && <Apply/> }
      </div>
    </footer>
  );
};


export default Footer;
