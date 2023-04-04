import posthog from "posthog-js";
import Image from "next/image";
import { useState, useEffect } from "react";
import cookie from "../public/img/cookie.svg";
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
          <div className="aviso-cookies fixed bottom-4 left-4 z-50 bg-white p-4 rounded-lg w-full max-w-xs text-center shadow-xl">
            <div className="relative bottom-12 flex justify-center items-center">
              <Image
                src={cookie.src}
                width={70}
                height={70}
                alt="imagen logotipo"
                className="z-10"
              />
            </div>
            <h3 className="text-lg font-bold">Cookies</h3>
            <p className="">
              We use our own and third-party cookies to improve our services.
            </p>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded font-bold transition duration-300 hover:bg-black mb-2 w-full"
              onClick={acceptCookies}
            >
              Accept
            </button>
            <a
              className="text-blue-500 font-bold hover:underline"
              onClick={declineCookies}
            >
              Decline
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default cookieBanner;
