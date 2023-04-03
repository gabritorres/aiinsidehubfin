import posthog from "posthog-js";
import { useState, useEffect } from "react";

function cookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (hasAcceptedCookies) {
      setShowBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div>
          <p>We use Cookies</p>
          <button onClick={acceptCookies}>Accept</button>
          <button onClick={declineCookies}>Decline</button>
        </div>
      )}
    </div>
  );
}

export default cookieBanner;
