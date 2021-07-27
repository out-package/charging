export const runFunction = (f: any) => f();

export const ua = navigator.userAgent.toLowerCase();
export const isWeixin = ua.indexOf('micromessenger') !== -1;

export const os = (function () {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isSmallScreen: window.innerHeight < 570,
  };
})();

export function getLatLng(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 3000000,
      timeout: 20 * 1000,
    });
  });
}

export const openApp = (to: string) => {
  if (os.isPhone) {
    window.location.href = `comgooglemaps://?daddr=${to}`;
  } else if (os.isAndroid) {
    window.location.href = `google.navigation:q=${to}`;
  }
};
