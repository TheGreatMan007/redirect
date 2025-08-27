function generateGoogleWrappedLink(vercelRedirectUrl, gclid = '') {
  let finalRedirectUrl = vercelRedirectUrl;

  if (gclid) {
    finalRedirectUrl += vercelRedirectUrl.includes('?') ? `&gclid=${gclid}` : `?gclid=${gclid}`;
  }

  const wrappedUrl = `https://www.google.com/url?q=${encodeURIComponent(finalRedirectUrl)}`;
  return wrappedUrl;
}
// Example usage:const redirectUrl = 'https://silverfiesta.vercel.app/redirect?dest=https://sord.helpdeskinld.com/page';const gclid = 'exouEw1';
console.log(generateGoogleWrappedLink(redirectUrl, gclid));